import { RequestHandler } from "express";
import app from "../app";
import { PrismaClient } from "@prisma/client";
import signUpUser from "../utils/signUpValidator";

const prisma = new PrismaClient();

export const signUpUser: RequestHandler<
  unknown,
  unknown,
  signUpUser,
  unknown
> = async (req, res) => {
  const { bio, email, image, name, username } = req.body;

  res.status(501).json();
};

export const getAllUsers: RequestHandler = async (req, res) => {
  res.status(501).json({ error: "not implemented" });
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
  res.status(501).json({ error: "not implememted" + id });
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
