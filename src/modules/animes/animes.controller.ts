import { NextFunction, Request, Response } from "express";
import { animeService } from "./animes.service";

export const animesController = {
    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const anime = await animeService.findAll();
            res.json(anime);
        } catch (err) {
            next(err);
        }
    },

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const anime = await animeService.findById(req.params.id);
            res.json(anime);
        } catch (err) {
            next(err);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const anime = await animeService.create(req.body);
            res.status(201).json(anime);
        } catch (err) {
            next(err);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const anime = await animeService.update(req.params.id, req.body);
            res.json(anime);
        } catch (err) {
            next(err);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await animeService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
};
