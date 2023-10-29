import { Request, Response } from 'express';
import filesDB from '../models/Files';
import { manyFiles, oneFile } from '../config/upload';

class FilesController {
    async storeOne(req: Request, res: Response): Promise<void> {
        try {
            await oneFile(req, res);
            if (req.file) {
                const file = await filesDB.create({ ...req.file, ...req.body });
                res.status(201).send({ response: file });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ message: (error as Record<string, string>).message }] });
        }
    }

    async storeMany(req: Request, res: Response): Promise<void> {
        try {
            await manyFiles(req, res);
            if (req.files) {
                for (const element of (req.files as unknown as { 'file[]': File[] })['file[]']) {
                    await filesDB.create({ ...element, ...req.body });
                }
                res.status(201).send({ response: '201' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ message: (error as Record<string, string>).message }] });
        }
    }
}

export default new FilesController();
