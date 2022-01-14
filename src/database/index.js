import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../models/User";
import Produtos from "../models/Produtos";

const models = [User, Produtos];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
