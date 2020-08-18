import express, { Response } from "express";

const router = express.Router();

router.get("/", (_, res: Response<Book[]>) => {
  res.json([{} as Book]);
});

export default router;
