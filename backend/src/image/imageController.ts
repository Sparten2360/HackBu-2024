import { Request, Response } from "express";
import { IImage, Image } from "./image";
import crypto from "crypto";

async function generateID() {
    let iid = crypto.randomBytes(20).toString("hex");
    let image;
    while (true) {
        image = await Image.findOne({ image_id: iid });
        if (image === null) break;
        else iid = crypto.randomBytes(20).toString("hex");
    }
    return iid;
}

export class ImageController {
    public async getMatch(req: Request, res: Response): Promise<void> {
        const images = await Image.find();
        res.json({ images });
    }

    public async getImage(req: Request, res: Response): Promise<void> {
        const image = await Image.findOne({ room_id: req.params.id });
        if (image === null) {
            res.sendStatus(404);
        } else {
            res.json(image);
        }
    }

    public async createImage(req: Request, res: Response): Promise<void> {
        req.body.image_id = await generateID();

        const newImage: IImage = new Image(req.body);

        const image = await Image.findOne({
            image_id: req.body.image_id,
        });
        if (image === null) {
            try {
                const result = await newImage.save();
                res.status(201).json({ status: 201, data: result });
            } catch {
                res.sendStatus(500);
            }
        } else {
            res.sendStatus(422);
        }
    }

    public async updateImage(req: Request, res: Response): Promise<void> {
        const image = await Image.findOneAndUpdate({ image_id: req.params.id }, req.body);
        if (image === null) {
            res.sendStatus(404);
        } else {
            const updatedImage = { image_id: req.params.id, ...req.body };
            res.json({ status: res.status, data: updatedImage });
        }
    }

    public async deleteImage(req: Request, res: Response): Promise<void> {
        const image = await Image.findOneAndDelete({
            image_id: req.params.id,
        });
        if (image === null) {
            res.sendStatus(404);
        } else {
            res.json({ response: "Image deleted Successfully" });
        }
    }
}