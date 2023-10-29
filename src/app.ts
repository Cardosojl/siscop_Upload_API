import express, { Application } from 'express';
import cors from 'cors';
import files from './routes/filesRoute';
import corsOptions from './config/cors';

class App {
    app: Application;
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(cors(corsOptions));
    }

    private routes() {
        this.app.use('/files', files);
    }
}

export default new App().app;
