import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./Authentication/authRoutes";
import userRoutes from "./User/userRoutes";
import tweetRoutes from "./Tweet/tweetRoutes";
import { authenticateToken } from "./mildlwares/authMidleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world fucker");
});

app.use("/user", authenticateToken, userRoutes);
app.use("/tweet", authenticateToken, tweetRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("server ready and listening on port: 5000");
});

export default app;
