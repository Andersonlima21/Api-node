import { CreateAnimeDto, UpdateAnimeDto } from "./animes.dto";
import { AnimeModel, IAnime } from "./animes.schema";

export const animesRepository = {
    findAll(): Promise<IAnime[]> {
        return AnimeModel.find().lean<IAnime[]>();
    },

    findById(id: string): Promise<IAnime | null> {
        return AnimeModel.findById(id).lean<IAnime>();
    },

    create(data: CreateAnimeDto): Promise<IAnime> {
        return AnimeModel.create(data);
    },

    update(id: string, data: UpdateAnimeDto): Promise<IAnime | null> {
        return AnimeModel.findByIdAndUpdate(id, data, {new: true}).lean<IAnime>();
    },

    delete(id: string): Promise<IAnime | null> {
        return AnimeModel.findByIdAndDelete(id).lean<IAnime>();
    }
}