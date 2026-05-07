import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { animesController } from "./animes.controller";
import { createAnimeDto, updateAnimeDto } from "./animes.dto";

export const animesRouter = Router();

animesRouter.get("/", animesController.findAll);
animesRouter.get("/:id", animesController.findById);
animesRouter.post("/", validate(createAnimeDto), animesController.create);
animesRouter.patch("/:id", validate(updateAnimeDto), animesController.update);
animesRouter.delete("/:id", animesController.delete);
