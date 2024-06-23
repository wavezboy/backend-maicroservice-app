import { Request, Response } from "express";
import Twit from "twit";
import generateRandomComment from "../utils/comment";
import { Tweet } from "../utils/types";

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY!,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET!,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY!,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
});

const screenName = "Curioussoikat01"; // Replace with the target account
const interval = 10 * 1000; // 10 seconds for testing

const processTweets = async () => {
  try {
    const params = {
      screen_name: screenName,
      count: 10,
    };

    const { data }: { data: Tweet[] } = (await T.get(
      "statuses/user_timeline",
      params
    )) as { data: Tweet[] };

    for (const tweet of data) {
      const tweetId = tweet.id_str;

      // Like the tweet if not already liked
      if (!tweet.favorited) {
        await T.post("favorites/create", { id: tweetId });
        console.log(`Liked tweet: ${tweetId}`);
      }

      // Retweet the tweet if not already retweeted
      if (!tweet.retweeted) {
        await T.post("statuses/retweet/:id", { id: tweetId });
        console.log(`Retweeted tweet: ${tweetId}`);
      }

      // Comment on the tweet
      const comment = generateRandomComment();
      await T.post("statuses/update", {
        status: `@${screenName} ${comment}`,
        in_reply_to_status_id: tweetId,
      });
      console.log(`Commented on tweet: ${tweetId}`);
    }
  } catch (error) {
    console.error(`Error processing tweets: ${JSON.stringify(error, null, 2)}`);
  }
};

let intervalId: NodeJS.Timeout;

export const startProcessing = (req: Request, res: Response) => {
  console.log("Endpoint /twitter/start was hit.");
  if (!intervalId) {
    intervalId = setInterval(processTweets, interval);
    res.send("Started processing tweets.");
  } else {
    res.send("Tweet processing is already running.");
  }
};
