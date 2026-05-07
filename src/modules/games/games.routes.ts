import { Router } from "express";
import { gamesController } from "./games.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createGameDto, updateGameDto } from "./games.dto";

export const gamesRouter = Router();

gamesRouter.get("/", gamesController.findAll);
gamesRouter.get("/:id", gamesController.findById);
gamesRouter.post("/", validate(createGameDto), gamesController.create);
gamesRouter.patch("/:id", validate(updateGameDto), gamesController.update);
gamesRouter.delete("/:id", gamesController.delete);
