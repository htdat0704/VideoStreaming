const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const port = 5000;
const multer = require("multer");
const firebase = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyDydi39LpwJlMaUJiht8e1_iPCLCvd3sQE",
  authDomain: "videostreaming-43488.firebaseapp.com",
  projectId: "videostreaming-43488",
  storageBucket: "videostreaming-43488.appspot.com",
  messagingSenderId: "15539592868",
  appId: "1:15539592868:web:c0f90ad478e50596935031",
  measurementId: "G-TKDRSG30XJ",
};
const { ConsoleLogger } = require("@bitmovin/api-sdk");
const BitmovinApi = require("@bitmovin/api-sdk").default;

const input = await bitmovinApi.encoding.inputs.https.create(
  new HttpsInput({
      host: '<HTTPS_INPUT_HOST>',
      name: '<INPUT_NAME>'
  })
);
firebase.initializeApp(firebaseConfig);

const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
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

app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) {
    req.status(400).send("No file uploaded");
    return;
  }

  const storageRef = ref(storage, req.file.originalname);
  const metadata = {
    contentType: "video/mp4",
  };

  uploadBytes(storageRef, req.file.buffer, metadata).then(() => {
    getDownloadURL(storageRef)
      .then((url) => {
        res.send({ url });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
