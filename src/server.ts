import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect("")
  .then(() => {
    console.log("mongoose connected");
    app.listen(8000, () => {
      console.log("connected to 8000");
    });
  })
  .catch(console.error);
