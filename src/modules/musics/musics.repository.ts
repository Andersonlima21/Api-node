import { CreateOneMusicDto, UpdateMusicDto } from "./musics.dto";
import { IMusic, MusicModel } from "./musics.schema";

export const musicsRepository = {
    findAll(): Promise<IMusic[]> {
        return MusicModel.find().lean<IMusic[]>();
    },

    findById(id: string): Promise<IMusic | null> {
        return MusicModel.findById(id).lean<IMusic>();
    },

    findByGenre(genre: string): Promise<IMusic[]> {
        return MusicModel.find({ genre }).lean<IMusic[]>();
    },

    create(data: CreateOneMusicDto): Promise<IMusic> {
        return MusicModel.create(data);
    },

    createMany(data: CreateOneMusicDto[]): Promise<IMusic[]> {
        return MusicModel.insertMany(data);
    },

    update(id: string, data: UpdateMusicDto): Promise<IMusic | null> {
        return MusicModel.findByIdAndUpdate(id, data, { new: true }).lean<IMusic>();
    },

    delete(id: string): Promise<IMusic | null> {
        return MusicModel.findByIdAndDelete(id).lean<IMusic>();
    },

    getTotalCount(): Promise<Number> {
        return MusicModel.countDocuments();
    },

    getUniqueGenres(): Promise<string[]> {
        return MusicModel.distinct("genre");
    },

    getNewestMusic(): Promise<IMusic | null> {
        return MusicModel.findOne().sort({ releaseYear: -1 }).lean<IMusic>();
    },

    getOldestMusic(): Promise<IMusic | null> {
        return MusicModel.findOne().sort({ releaseYear: 1 }).lean<IMusic>();
    }

}