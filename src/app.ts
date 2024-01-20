import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world fucker");
});

app.use("/user", userRoutes);
app.use("/tweet", tweetRoutes);

app.listen(5000, () => {
  console.log("server ready and listening on port: 5000");
});

export default app;
