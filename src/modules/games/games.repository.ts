import { GameModel, IGame } from "./games.schema";
import { CreateGameDto, UpdateGameDto } from "./games.dto";

export const gamesRepository = {
  findAll(): Promise<IGame[]> {
    return GameModel.find().lean<IGame[]>();
  },

  findById(id: string): Promise<IGame | null> {
    return GameModel.findById(id).lean<IGame>();
  },

  create(data: CreateGameDto): Promise<IGame> {
    return GameModel.create(data);
  },

  update(id: string, data: UpdateGameDto): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(id, data, { new: true }).lean<IGame>();
  },

  delete(id: string): Promise<IGame | null> {
    return GameModel.findByIdAndDelete(id).lean<IGame>();
  },
};
