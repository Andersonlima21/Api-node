import { Request, Response, NextFunction } from "express";
import { gamesService } from "./games.service";

export const gamesController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const games = await gamesService.findAll();
      res.json(games);
    } catch (err) {
      next(err);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const game = await gamesService.findById(req.params.id);
      res.json(game);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const game = await gamesService.create(req.body);
      res.status(201).json(game);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const game = await gamesService.update(req.params.id, req.body);
      res.json(game);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await gamesService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
