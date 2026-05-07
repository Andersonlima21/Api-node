import { Document, model, Schema } from "mongoose";

export interface IAnime extends Document {
    title: string;
    genre: string[];
    releaseYear: number;
    rating: number;
    coverUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

const animeSchema = new Schema<IAnime>(
    {
        title: { type: String, required: true, trim: true },
        genre: { type: [String], required: true },
        releaseYear: { type: Number, required: true },
        rating: { type: Number, min: 0, max: 10, default: 0 },
        coverUrl: { type: String },
    },
    { timestamps: true }
);

export const AnimeModel = model<IAnime>("Anime", animeSchema)