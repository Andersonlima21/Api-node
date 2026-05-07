import { NOT_FOUND_MESSAGE } from "../../utils/CONSTANTS";
import { CreateAnimeDto, UpdateAnimeDto } from "./animes.dto";
import { animesRepository } from "./animes.repository";

export const animeService = {
    async findAll() {
        return animesRepository.findAll();
    },

    async findById(id: string) {
        const anime = await animesRepository.findById(id);
        if (!anime) throw new Error(NOT_FOUND_MESSAGE);
        return anime;
    },

    async create(data: CreateAnimeDto) {
        return animesRepository.create(data);
    },

    async update(id: string, data: UpdateAnimeDto) {
        const anime = await animesRepository.update(id, data);
        if (!anime) throw new Error(NOT_FOUND_MESSAGE);
        return anime;
    },

    async delete(id: string) {
        const anime = await animesRepository.delete(id);
        if (!anime) throw new Error(NOT_FOUND_MESSAGE);
        return anime;
    },
}