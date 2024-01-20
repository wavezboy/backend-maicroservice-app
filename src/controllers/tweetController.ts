import { RequestHandler } from "express";
import app from "../app";

export const getAllTweets: RequestHandler = async (req, res) => {
  res.status(501).json({ error: "not implemented" });
};

interface getTweetBody {
  id: string;
}
export const getTweet: RequestHandler<
  getTweetBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;
  res.status(501).json({ error: "not implememted" + id });
};

export const updateTweet: RequestHandler<
  getTweetBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;

  res.status(501).json({ error: "not implemented" });
};

export const deleteTweet: RequestHandler<
  getTweetBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;

  res.status(501).json({ error: "not implemented" });
};
