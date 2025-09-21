import express from "express";
import bodyParser from "body-parser";
import postRouter from "./routes/posts.js";
import deleteRouter from "./routes/delete.js";
import updateRouter from "./routes/update.js";

const app = express();
const port = 3000;
export const guestBook = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { guestBook });
});

app.use("/posts", postRouter);
app.use("/delete", deleteRouter);
app.use("/update", updateRouter);
