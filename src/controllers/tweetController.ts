import { RequestHandler } from "express";
import app from "../app";
import { PrismaClient } from "@prisma/client";
import { Mongoose, Types } from "mongoose";

const prisma = new PrismaClient();

export const getAllTweets: RequestHandler = async (req, res) => {
  try {
    const tweets = await prisma.tweet.findMany();

    res.status(201).json(tweets);
  } catch (error) {
    res.status(501).json({ error });
  }
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
  try {
    const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });

    res.status(201).json(tweet);
  } catch (error) {
    res.status(501).json({ error });
  }
};

interface createTweetBody {
  content: string;
  image: string;
  userId: number;
}

export const createTweet: RequestHandler<
  unknown,
  unknown,
  createTweetBody,
  unknown
> = async (req, res) => {
  const { content, image, userId } = req.body;

  try {
    const tweet = await prisma.tweet.create({
      data: {
        content: content,
        image: image,
        userId: userId,
      },
    });

    res.status(201).json({ tweet });
  } catch (error) {
    res.status(501).json({ error });
  }
};

export const updateTweet: RequestHandler<
  getTweetBody,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  let { id } = req.params;

  try {
  } catch (error) {
    res.status(501).json({ error });
  }
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
