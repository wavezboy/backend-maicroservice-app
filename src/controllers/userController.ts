import { RequestHandler } from "express";
import app from "../app";
import { PrismaClient } from "@prisma/client";
import signUpUser from "../utils/signUpValidator";
import { validateSignUpInput } from "../utils/signUpValidator";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

export const signUpUser: RequestHandler<
  unknown,
  unknown,
  signUpUser,
  unknown
> = async (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);

  if (!isValid) {
    res.status(500).json({ errors });
    throw createHttpError("input validation fails");
  }

  const existingUername = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const existingEmail = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (existingUername || existingEmail) {
    res.status(500).json("existing username or email");
    throw createHttpError("existing username or email");
  }

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      bio: req.body.bio,
      email: req.body.email,
      image: req.body.image,
      username: req.body.username,
    },
  });

  res.status(200).json(user);
};

export const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();

    res.status(200).json({ allUsers });
  } catch (error) {
    throw error;
  }
};

interface getUserBody {
  id: string;
}
export const getUser: RequestHandler<
  getUserBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(user);
  } catch (error) {
    throw error;
  }
};

export const updateUser: RequestHandler<
  getUserBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;

  res.status(501).json({ error: "not implemented" });
};

export const deleteUser: RequestHandler<
  getUserBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;

  res.status(501).json({ error: "not implemented" });
};
