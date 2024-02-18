import { Document, Schema, Model, model, Error } from "mongoose";

export interface IImage extends Document {
    room_id: string;
    email: string;
    displayName: string;
    options: { [key: string]: any };
}

export const imageSchema: Schema = new Schema({
    room_id: {
        type: String,
        required: true,
        unique: true,
    },
    email: String,
    displayName: String,
    options: {
        type: Schema.Types.Mixed,
        required: true,
    },
});

export const Image: Model<IImage> = model<IImage>("Image", imageSchema);
