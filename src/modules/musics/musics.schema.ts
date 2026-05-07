import { Document, model, Schema } from "mongoose";

export interface IMusic extends Document {
    title: string;
    genre: string[];
    releaseYear: number;
    rating: number;
    coverUrl?: string;
    createdAt: Date;
    updateAt: Date;
}

const musicSchema = new Schema<IMusic>({
    title: { type: String, required: true, trim: true },
    genre: { type: [String], required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    coverUrl: { type: String }
},
    { timestamps: true }
);

export const MusicModel = model<IMusic>("Musica", musicSchema);