const Sequelize = require("sequelize");

class Mark extends Sequelize.Model {
  static initiate(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        projectId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: "Project",
            key: "id"
          },
          onDelete: "CASCADE"
        },
        userId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: "User",
            key: "id"
          },
          onDelete: "CASCADE"
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Mark",
        tableName: "Mark",
        paranoid: false,
        charset: "utf8",
        getterMethods: "utf8_general_ci"
      }
    );
  }
}

module.exports = Mark;
