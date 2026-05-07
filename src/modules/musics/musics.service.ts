import { NOT_FOUND_MESSAGE, NOT_FOUND_MESSAGE_FOR_MANY } from "../../utils/CONSTANTS";
import { CreateMusicDto, UpdateMusicDto } from "./musics.dto";
import { musicsRepository } from "./musics.repository";

export const musicsService = {

    async findAll() {
        return musicsRepository.findAll();
    },

    async findById(id: string) {
        const music = await musicsRepository.findById(id);
        if (!music) throw new Error(NOT_FOUND_MESSAGE);
        return music;
    },

    async findByGenre(genre: string) {
        const music = await musicsRepository.findByGenre(genre);
        if (music.length === 0) throw new Error(NOT_FOUND_MESSAGE_FOR_MANY);
        return music;
    },

    async create(data: CreateMusicDto) {
        if (Array.isArray(data)) {
            return musicsRepository.createMany(data);
        }
        return musicsRepository.create(data);
    },

    async update(id: string, data: UpdateMusicDto) {
        const music = await musicsRepository.update(id, data);
        if (!music) throw new Error(NOT_FOUND_MESSAGE);
        return music;
    },

    async delete(id: string) {
        const music = await musicsRepository.delete(id);
        if (!music) throw new Error(NOT_FOUND_MESSAGE);
        return music;
    },

    async getStats() {
        const [total, genres, newest, oldest] = await Promise.all([
            musicsRepository.getTotalCount(),
            musicsRepository.getUniqueGenres(),
            musicsRepository.getNewestMusic(),
            musicsRepository.getOldestMusic(),
        ]);

        return { total, genres, newest, oldest };
    }
}