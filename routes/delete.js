import express from "express";
import { guestBook } from "../index.js";

const router = express.Router();

router.post("/:id", (req, res) => {
  const postID = Number(req.params.id);
  const findIndex = guestBook.findIndex((a) => a.id === postID);
  findIndex !== -1 && guestBook.splice(findIndex, 1);

  res.redirect("/");
});

export default router;
