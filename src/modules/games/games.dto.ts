import { z } from "zod";

export const createGameDto = z.object({
  title: z.string().min(1),
  genre: z.array(z.string()).min(1),
  platform: z.array(z.string()).min(1),
  developer: z.string().min(1),
  releaseYear: z.number().int().min(1950).max(new Date().getFullYear()),
  rating: z.number().min(0).max(10).optional(),
  coverUrl: z.string().url().optional(),
});

export const updateGameDto = createGameDto.partial();

export type CreateGameDto = z.infer<typeof createGameDto>;
export type UpdateGameDto = z.infer<typeof updateGameDto>;
