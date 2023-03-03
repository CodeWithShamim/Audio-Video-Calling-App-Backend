const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const videoRouter = require("./routes/video.route");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.use("/api/v1/video", videoRouter);

app.listen(port, () => {
  console.log("Listening to port on", port);
});
