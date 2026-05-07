import { bandRepository } from "./repository";

export const bandService = {
    async findAll() {
        return bandRepository.findAll();
    }
}