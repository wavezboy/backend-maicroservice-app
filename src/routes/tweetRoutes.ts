import express from "express";
import * as tweetController from "../controllers/tweetController";

const router = express.Router();

router.get("/getTweets", tweetController.getAllTweets);
router.get("/getTweet/:id", tweetController.getAllTweets);
router.delete("/deleteTweet/:id", tweetController.deleteTweet);
router.put("/updateTweet/:id", tweetController.updateTweet);
router.post("/createTweet", tweetController.createTweet);

export default router;
