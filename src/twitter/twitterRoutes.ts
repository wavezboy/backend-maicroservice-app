import express from "express";
import * as twitter from "../twitter/twitterController";

const router = express.Router();

router.get("/start", twitter.startProcessing);

export default router;
