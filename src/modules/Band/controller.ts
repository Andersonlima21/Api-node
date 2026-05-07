import { Request, Response, NextFunction } from "express";
import { bandService } from "./service";

export const bandController = {
    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const bands = await bandService.findAll();
            res.json(bands);
        } catch (err) {
            next(err);
        }
    }
}