import { z } from "zod";

export const createBandDto = z.object({
    name: z.string().min(1),
    country: z.array(z.string()).min(1),
    formedYear: z.number().int().min(1950).max(new Date().getFullYear()),
});

export const updateBandDto = createBandDto.partial();

export type CreateBandDto = z.infer<typeof createBandDto>;
export type UpdateBandDto = z.infer<typeof updateBandDto>;