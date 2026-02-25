import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/mongoose.js";
import userRouter from "../routers/users.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("SERVER IS LISTENING TO PORT: ", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/", userRouter); 

app.get("/", (req, res) => {
    res.json({
        success: true,
        message:"testing ok"
    })
})

app.use((err, req, res, next) => {
  res.json({
    success: false,
    message: err.message || "no message found",
    error: err,
  });
});
