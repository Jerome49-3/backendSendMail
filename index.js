require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//add routes send-mail:
const sendMail = require("./routes/send-mail.routes");
app.use(sendMail);

//add routes get /:
app.get("/", (req, res) => {
  console.log("je suis sur la route get/");
  res.status(200).json({ message: " Hello: Welcome on my sendMail " });
});

//add routes all *:
app.all("*", (req, res) => {
  console.log("all routes");
  res.status(404).json({ message: "All routes" });
});

//add listen:
app.listen(process.env.PORT, () => {
  console.log("server started");
});
