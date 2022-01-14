import dotenv from "dotenv";

dotenv.config();

import "./src/database";

import express from "express";
import userRoutes from "./src/routes/userRoutes";
import produtosRoutes from "./src/routes/produtosRoutes";

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users/", userRoutes);
    this.app.use("/produtos/", produtosRoutes);
  }
}

export default new App().app;
