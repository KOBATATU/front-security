import express, { Application, Request, Response } from "express";
import { router } from "./routes/api";

const app: Application = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", async (_req: Request, res: Response) => {
  res.end("Top Page");
});

app.use("/api", router);

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
