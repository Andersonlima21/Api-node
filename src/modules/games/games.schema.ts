import { Schema, model, Document } from "mongoose";

export interface IGame extends Document {
  title: string;
  genre: string[];
  platform: string[];
  developer: string;
  releaseYear: number;
  rating: number;
  coverUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const gameSchema = new Schema<IGame>(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: [String], required: true },
    platform: { type: [String], required: true },
    developer: { type: String, required: true, trim: true },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    coverUrl: { type: String },
  },
  { timestamps: true }
);

export const GameModel = model<IGame>("Game", gameSchema);
