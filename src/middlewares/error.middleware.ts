import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { logger } from "../utils/logger";

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof ZodError) {
    res.status(400).json({ message: "Dados inválidos", errors: err.flatten().fieldErrors });
    return;
  }

  logger.error(err.message);
  res.status(500).json({ message: "Erro interno do servidor" });
}
