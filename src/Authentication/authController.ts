import { RequestHandler } from "express";
import { generateEmailToken } from "../utils/logics/generateEmailToken";
import { PrismaClient } from "@prisma/client";
import { generateAuthToken } from "../utils/logics/generateAuthToken";

const prisma = new PrismaClient();

interface loginBody {
  email: string;
}

const EMAIL_TOKEN_EXPIRATION_MINUTES = 10;
const AUTHENTICATION_EXPIRATION_HOURS = 12;

// create a user if doesnt exist
// generate a token and send it to their email
export const Login: RequestHandler<
  unknown,
  unknown,
  loginBody,
  unknown
> = async (req, res, next) => {
  const { email } = req.body;
  try {
    const emailToken = generateEmailToken();
    const expiration = new Date(
      new Date().getTime() + EMAIL_TOKEN_EXPIRATION_MINUTES * 60 * 1000
    );

    const createdToken = await prisma.token.create({
      data: {
        type: "EMAIL",
        emailToken,
        expiration,
        user: {
          connectOrCreate: {
            where: { email },
            create: { email },
          },
        },
      },
    });
    // send emailToken to user email implementation
    console.log(createdToken);
  } catch (error) {
    res.status(500).json(error);
  }

  res.sendStatus(200);
};

// validate the emailToken
// generate a long lived JWT token
export const Authenticate: RequestHandler = async (req, res, next) => {
  const { email, emailToken } = req.body;

  const dBEmailtoken = await prisma.token.findUnique({
    where: { emailToken },
    include: { user: true },
  });

  if (!dBEmailtoken || !dBEmailtoken.valid) {
    return res.status(401).json("invalid token");
  }

  if (dBEmailtoken.expiration < new Date()) {
    return res.status(401).json({ error: "Token expired !" });
  }

  if (dBEmailtoken?.user?.email !== email) {
    return res.status(401).json("token doesnt belong to you");
  }

  // here we validated that the user is the owner of the email

  // generate an API token
  const expiration = new Date(
    new Date().getTime() + AUTHENTICATION_EXPIRATION_HOURS * 60 * 60 * 1000
  );
  const apiToken = await prisma.token.create({
    data: {
      type: "API",
      expiration: expiration,
      user: {
        connect: {
          email,
        },
      },
    },
  });

  // INVALIDATE THE EMAILTOKEN
  await prisma.token.update({
    where: { id: dBEmailtoken.id },
    data: { valid: false },
  });

  // generate JWT token

  const authToken = generateAuthToken(apiToken.id);
  res.status(200).json(authToken);
};
