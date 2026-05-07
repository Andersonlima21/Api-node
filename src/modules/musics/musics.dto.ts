import { z } from 'zod';

const musicBody = z.object({
    title: z.string().min(1),
    genre: z.array(z.string()).min(1),
    releaseYear: z.number().int().min(1950).max(new Date().getFullYear()),
    coverUrl: z.string().url().optional(),
});

export const createMusicDto = z.union([musicBody, z.array(musicBody)]);
export const updateMusicDto = musicBody.partial();

export type CreateMusicDto = z.infer<typeof createMusicDto>;
export type CreateOneMusicDto = z.infer<typeof musicBody>;
export type UpdateMusicDto = z.infer<typeof updateMusicDto>;
