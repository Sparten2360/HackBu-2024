import { Document, Schema, Model, model, Error } from "mongoose";

export interface IImage extends Document {
    image_id: string;
    clicks: number;
}

export const imageSchema: Schema = new Schema({
    image_id: {
        type: String,
        required: true,
        unique: true,
    },
    clicks: {
        type: Number,
        required: true,
    }
});

export const Image: Model<IImage> = model<IImage>("Image", imageSchema);
