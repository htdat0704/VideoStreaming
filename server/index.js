const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");
const port = 5000;
const { ConsoleLogger } = require("@bitmovin/api-sdk");
const BitmovinApi = require("@bitmovin/api-sdk").default;

const bitmovinApi = new BitmovinApi({
  apiKey: "cf1c42de-2ebb-47f0-a170-4ae5268f977a",
  logger: new ConsoleLogger(),
});

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-Api-Key': 'cf1c42de-2ebb-47f0-a170-4ae5268f977a'
        }
      };
      
      fetch('https://api.bitmovin.com/v1/streams/video', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});

app.get("/video", (req, res) => {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range Headers");
  }

  const videoPath = "Ohno.mp4";
  const videoSize = fs.statSync(videoPath).size;

  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);

  const videoSream = fs.createReadStream(videoPath, { start, end });

  videoSream.pipe(res);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
