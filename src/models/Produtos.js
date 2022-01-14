import Sequelize, { Model } from "sequelize";

export default class Produtos extends Model {
  static init(sequelize) {
    super.init(
      {
        nm_produto: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome do produto deve ter entre 3 e 255 caracteres",
            },
          },
        },
        tp_produto: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        qtd_produto: {
          type: Sequelize.NUMBER,
          defaultValue: "",
        },
        vlr_produto: {
          type: Sequelize.NUMBER,
          defaultValue: "",
        },
      },
      {
        sequelize,
        // eslint-disable-next-line comma-dangle
      }
    );

    return this;
  }
}
