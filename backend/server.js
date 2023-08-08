const express = require("express");

const dotenv = require("dotenv").config();

const app = express();
const chats = require("./data/mini_data");

const newChat = JSON.stringify(chats);

const port = process.env.PORT || 4900;

app.get("/", (req, resp) => {
  resp.send("Api is running sucessfully!");
});

app.get("/api/chat", (req, resp) => {
  resp.send(newChat);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);

  const chatId = req.params.id;

  const singleChat = chats.find((chat) => chat._id === chatId);

  if (singleChat) {
    res.send(singleChat);
  } else {
    res.send("No data foe this chat ID");
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
