import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("level.txt", function (err, data) {
    if (err) {
      console.log(err);
    }
    res.status(200).json(data.toString());
  });
});

app.post("/", (req, res) => {
  const { lvl } = req.body;
  fs.writeFile("level.txt", lvl, function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.status(200).json({ success: "done" });
});

app.listen(8000, () => {
  console.log("connected");
});
