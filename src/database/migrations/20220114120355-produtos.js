module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tp_produto: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      qtd_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vlr_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("produtos"),
};
