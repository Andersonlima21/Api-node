import { gamesRepository } from "./games.repository";
import { CreateGameDto, UpdateGameDto } from "./games.dto";
import { NOT_FOUND_MESSAGE } from "../../utils/CONSTANTS";

export const gamesService = {
  async findAll() {
    return gamesRepository.findAll();
  },

  async findById(id: string) {
    const game = await gamesRepository.findById(id);
    if (!game) throw new Error(NOT_FOUND_MESSAGE);
    return game;
  },

  async create(data: CreateGameDto) {
    return gamesRepository.create(data);
  },

  async update(id: string, data: UpdateGameDto) {
    const game = await gamesRepository.update(id, data);
    if (!game) throw new Error(NOT_FOUND_MESSAGE);
    return game;
  },

  async delete(id: string) {
    const game = await gamesRepository.delete(id);
    if (!game) throw new Error(NOT_FOUND_MESSAGE);
    return game;
  },
};
