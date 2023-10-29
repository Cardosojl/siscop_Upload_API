import { Request, Response } from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();

const filesAllowed = (req: Request, file: Express.Multer.File, cb: CallableFunction) => {
    const allowedTypes = [
        'image/jpeg',
        'image/png',
        'text/html',
        'application/vnd.oasis.opendocument.spreadsheet',
        'application/vnd.oasis.opendocument.text',
        'application/vnd.rar',
        'application/x-tar',
        'application/zip',
        'text/plain',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/zip',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/pdf',
    ];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error();
        error.message = 'Arquivo com formato não suportado!';
        return cb(error, false);
    }
    return cb(null, true);
};

const multerConfig = multer({
    storage,
    limits: {
        fileSize: 10 * 1000000,
        files: 15,
    },
    fileFilter: filesAllowed,
});

export function oneFile(req: Request, res: Response) {
    try {
        const upload = multerConfig.single('file');
        return new Promise((resolve, reject) => {
            upload(req, res, (err) => {
                if (err) {
                    if (err.message === 'File too large') {
                        reject({ message: 'Arquivo ultrapassa o limite de 10MB!' });
                    } else {
                        reject(err);
                    }
                }
                resolve([req.file, req.body]);
            });
        });
    } catch (error) {
        throw new Error(error as string);
    }
}

export function manyFiles(req: Request, res: Response) {
    try {
        const upload = multerConfig.fields([{ name: 'file[]', maxCount: 15 }]);
        return new Promise((resolve, reject) => {
            upload(req, res, (err) => {
                if (err) {
                    if (err.message === 'File too large') {
                        reject(new Error('Um ou mais arquivos ultrapassam o limite de 10MB por arquivo!'));
                    } else {
                        reject(err);
                    }
                }
                resolve(req.files);
            });
        });
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}
