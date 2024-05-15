import { Router } from "express";
import { getData, getDataByName, postData, deleteData } from "../controllers/controllersExpenses";

const mainRoutes = Router();

mainRoutes.get('/',getData);

mainRoutes.get('/:id',getDataByName);

mainRoutes.post('/',postData);

mainRoutes.delete('/:id',deleteData);

export default mainRoutes;