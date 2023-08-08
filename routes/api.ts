import express, { Application, Request, Response, Router } from "express";

// CORS
export const router: Router = express.Router();
router.use(express.json());
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, PUT, PATCH");
  res.header("Access-Control-Max-Age", "3600");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "X-Token");
  }
  next();
});
router.get("/", (req: Request, res) => {
  res.setHeader("X-Timestamp", Date.now());
  const message = req.query?.message;
  if (message === "" || !message) {
    let errorMessage: string;
    const lang = req.headers["x-lang"];
    if (lang === "en") {
      errorMessage = "message is empty.";
    } else {
      errorMessage = "messageの値が空です";
    }

    return res.status(400).send({ errorMessage });
  }
  return res.status(200).send({ message });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

router.put("/", (req, res) => {
  console.log("aa");
  res.end();
});
