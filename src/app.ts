import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import { animesRouter } from "./modules/animes/animes.routes";
import { gamesRouter } from "./modules/games/games.routes";
import { musicsRouter } from "./modules/musics/musics.routes";

export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/games", gamesRouter);
app.use("/animes", animesRouter);
app.use("/musics", musicsRouter);

app.use(errorMiddleware);
