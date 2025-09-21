import express from "express";
import { guestBook } from "../index.js";

const router = express.Router();

router.post("/", (req, res) => {
  const newName = req.body.nameOfGuest;
  const newMessage = req.body.messageOfGuest;
  const timeNow = new Date().toLocaleString();

  const newEntry = {
    time: timeNow,
    message: newMessage,
    name: newName,
    id: Date.now(),
  };

  if (newName.trim() === "" || newMessage.trim() === "") {
    res.redirect("/");
  } else {
    guestBook.push(newEntry);
    res.redirect("/");
  }
});

router.get("/:id", (req, res) => {
  const postID = Number(req.params.id);
  const entry = guestBook.find((e) => e.id === postID);

  if (entry) {
    res.render("guestBook.ejs", { entry });
  } else {
    res.status(404).send("Guest is not here");
  }
});

export default router;
