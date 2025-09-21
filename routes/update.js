import express from "express";
import { guestBook } from "../index.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  const postID = Number(req.params.id);
  const entry = guestBook.find((a) => a.id === postID);
  if (entry) {
    res.render("update.ejs", { entry });
  } else {
    res.status(404).send("Guest is not here");
  }
});

router.post("/:id", (req, res) => {
  const postID = Number(req.params.id);
  const entry = guestBook.find((a) => a.id === postID);
  const name = req.body.updatedGuest;
  const message = req.body.updatedMessage;

  if (name.trim() === "" || message.trim() === "") {
    res.redirect("/update/" + postID);
  } else {
    entry.name = name;
    entry.message = message;

    res.redirect("/");
  }
});

export default router;
