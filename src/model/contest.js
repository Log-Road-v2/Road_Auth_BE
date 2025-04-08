const Sequelize = require("sequelize");

class Contest extends Sequelize.Model {
  static initiate(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        startDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        endDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        purpose: {
          type: Sequelize.STRING(300),
          allowNull: true
        },
        state: {
          type: Sequelize.ENUM("BEFORE", "NOW", "VOTING", "PENDING", "FINISHED"),
          allowNull: false,
          defaultValue: "BEFORE"
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Contest",
        tableName: "Contest",
        paranoid: false,
        charset: "utf8",
        getterMethods: "utf8_general_ci"
      }
    );
  }
}

module.exports = Contest;
