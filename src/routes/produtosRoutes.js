import { Router } from "express";
import produtosController from "../controller/ProdutosController";

const router = new Router();

router.post("/", produtosController.store);

export default router;
