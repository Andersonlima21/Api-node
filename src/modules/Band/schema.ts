import { Document, model, Schema } from "mongoose";

export interface IBand extends Document {
    name: string;
    country?: string;
    formedYear: number;
}

const bandSchema = new Schema<IBand>(
    {
        name: { type: String, required: true, trim: true },
        country: { type: String, required: false, trim: true },
        formedYear: { type: Number, required: true }
    },
    { timestamps: true }
);

export const BandModel = model<IBand>("Banda", bandSchema);