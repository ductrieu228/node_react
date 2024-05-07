import express from "express";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(cookieParser());
app.use(express.json());


app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
//app.use("/api/users", postRoute);

app.listen(8000, () => {
  console.log("Server is running !");
});