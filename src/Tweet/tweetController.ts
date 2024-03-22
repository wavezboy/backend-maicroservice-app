import { RequestHandler } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTweets: RequestHandler = async (req, res) => {
  try {
    const tweets = await prisma.tweet.findMany({
      include: { user: { select: { id: true, name: true, image: true } } },
      // select: {
      //   id: true,
      //   content: true,
      //   user: {
      //     select: {
      //       id: true,
      //       name: true,
      //       username: true,
      //       image: true,
      //     },
      //   },
      // },
    });

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
    const tweet = await prisma.tweet.findMany({
      where: { userId: Number(id) },
    });

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
  const { content, image } = req.body;

  //@ts-ignore
  const user = req.user;

  try {
    const tweet = await prisma.tweet.create({
      data: {
        content: content,
        image: image,
        userId: user.id,
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
