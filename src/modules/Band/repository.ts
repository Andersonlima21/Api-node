import { CreateGameDto, UpdateGameDto } from "../games/games.dto";
import { BandModel, IBand } from "./schema";

export const bandRepository = {
    findAll(): Promise<IBand[]> {
        return BandModel.find().lean<IBand[]>();
    },

    findById(id: string): Promise<IBand | null> {
        return BandModel.findById(id).lean<IBand>();
    },

    create(data: CreateGameDto): Promise<IBand> {
        return BandModel.create(data);
    },

    update(id: string, data: UpdateGameDto): Promise<IBand | null> {
        return BandModel.findByIdAndUpdate(id, data, { new: true }).lean<IBand>();
    },

    delete(id: string): Promise<IBand | null> {
        return BandModel.findByIdAndDelete(id).lean<IBand>();
    },


}