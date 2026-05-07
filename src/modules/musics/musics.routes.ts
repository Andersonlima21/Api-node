import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { musicsController } from "./musics.controller";
import { createMusicDto, updateMusicDto } from "./musics.dto";

export const musicsRouter = Router();

musicsRouter.get("/", musicsController.findAll);
musicsRouter.get("/stats", musicsController.getStats);
musicsRouter.get("/:id", musicsController.findById);
musicsRouter.post("/", validate(createMusicDto), musicsController.create);
musicsRouter.patch("/:id", validate(updateMusicDto), musicsController.update);
musicsRouter.delete("/:id", musicsController.delete);