import { Request, Response, NextFunction, RequestHandler } from "express";
import { PrismaClient, User } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// extemds the express req to allow user type on it
type authRequest = Request & { user?: User };

export const authenticateToken = async (
  req: authRequest,
  res: Response,
  next: NextFunction
) => {
  // authentication
  const authHeader = req.headers["authorization"];
  const jwtToken = authHeader?.split(" ")[1];

  if (!jwtToken) {
    return res
      .status(401)
      .json("no jwtToken provided in the authentication header");
  }

  // decode the jwt token

  try {
    const payLoad = (await jwt.verify(jwtToken, process.env.JWT_SECRET!)) as {
      tokenId: number;
    };

    if (!payLoad.tokenId) {
      return res.status(401).json("property tokenId doesnt exist on payload");
    }
    const dbToken = await prisma.token.findUnique({
      where: { id: payLoad.tokenId },
      include: { user: true },
    });

    if (!dbToken?.valid || dbToken.expiration < new Date()) {
      return res.status(401).json({ errror: "API token expired" });
    }

    req.user = dbToken.user;
  } catch (error) {
    res.status(501).json({ error });
  }

  next();
};
