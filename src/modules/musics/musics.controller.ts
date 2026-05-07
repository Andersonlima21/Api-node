import { NextFunction, Request, Response } from "express";
import { musicsService } from "./musics.service";

export const musicsController = {
    async findAll_old(req: Request, res: Response, next: NextFunction) {
        try {
            const music = await musicsService.findAll();
            res.json(music);
        } catch (err) {
            next(err);
        }
    },

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            let { genre } = req.query;

            const music = genre
                ? await musicsService.findByGenre(genre as string)
                : await musicsService.findAll();

            res.json(music);
        } catch (err) {
            next(err)
        }
    },

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const music = await musicsService.findById(req.params.id);
            res.json(music)
        } catch (err) {
            next(err);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const music = await musicsService.create(req.body);
            res.status(201).json(music);
        } catch (err) {
            next(err);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const music = await musicsService.update(req.params.id, req.body);
            res.json(music);
        } catch (err) {
            next(err);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await musicsService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    },

    async getStats(req: Request, res: Response, next: NextFunction) {
        try {
            const stats = await musicsService.getStats();
            res.json(stats);
        } catch (err) {
            next(err);
        }
    }

}