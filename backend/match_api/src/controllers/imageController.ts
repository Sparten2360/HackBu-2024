import { Request, Response } from "express";
import { Image } from "../models/image";

export class ImageController {
    public async getImages(req: Request, res: Response): Promise<void> {
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

    }

    public async updateImage(req: Request, res: Response): Promise<void> {

    }

    public async deleteImage(req: Request, res: Response): Promise<void> {

    }
}