import { Router } from "express";
import { ImageController } from "./imageController";

export class ImageRoutes {
    public router: Router;
    public codeboardController: ImageController = new ImageController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/", this.codeboardController.getImages);
        this.router.get("/:id", this.codeboardController.getImage);
        this.router.post("/", this.codeboardController.createImage);
        this.router.put("/:id", this.codeboardController.updateImage);
        this.router.delete("/:id", this.codeboardController.deleteImage);
    }
}
