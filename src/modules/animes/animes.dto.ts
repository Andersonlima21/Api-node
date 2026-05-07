import { z } from "zod";

export const createAnimeDto = z.object({
    title: z.string().min(1),
    genre: z.array(z.string()).min(1),
    releaseYear: z.number().int().min(1950).max(new Date().getFullYear()),
    rating: z.number().min(0).max(10).optional(),
    coverUrl: z.string().url().optional(),
})

export const updateAnimeDto = createAnimeDto.partial();

export type CreateAnimeDto = z.infer<typeof createAnimeDto>;
export type UpdateAnimeDto = z.infer<typeof updateAnimeDto>;