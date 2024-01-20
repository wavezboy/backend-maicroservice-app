import { RequestHandler } from "express";
import app from "../app";

export const signUpUser: RequestHandler = async (req, res) => {
  res.status(501).json({ error: "not implemented" });
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
