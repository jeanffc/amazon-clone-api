import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export { app };
