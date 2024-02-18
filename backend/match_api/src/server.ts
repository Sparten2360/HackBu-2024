import express from "express";
import compression from "compression";
import cors from "cors";
import { PORT } from "./util/secrets";
import { ImageRoutes } from "./routes/imageRoutes"

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public routes(): void {
        this.app.use("/api/image", new ImageRoutes().router);
        this.app.get("/api", (req, res) => res.send({ status: "I'm alive!" }));
    }

    public config(): void {
        this.app.set("port", PORT || 5000);
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    public start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("API is running at http://localhost:%d", this.app.get("port"));
        });
    }
}

const server = new Server();

server.start();
