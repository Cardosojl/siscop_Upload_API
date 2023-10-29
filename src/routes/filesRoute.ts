import express from 'express';
import filesController from '../controllers/FilesController';

const route = express.Router();

route.post('/oneFile', filesController.storeOne);
route.post('/manyFiles', filesController.storeMany);

export default route;
