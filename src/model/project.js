const Sequelize = require("sequelize");

class Project extends Sequelize.Model {
  static initiate(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        contestId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: "Contest",
            key: "id"
          },
          onDelete: "CASCADE"
        },
        writerId: {
          type: Sequelize.BIGINT,
          allowNull: true,
          references: {
            model: "User",
            key: "id"
          },
          onDelete: "SET NULL"
        },
        projectName: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        authorCategory: {
          type: Sequelize.ENUM("PERSONAL", "TEAM"),
          allowNull: false
        },
        teamName: {
          type: Sequelize.STRING(20),
          allowNull: true
        },
        skills: {
          type: Sequelize.STRING(600),
          allowNull: true
        },
        introduction: {
          type: Sequelize.STRING(100),
          allowNull: true
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        startDate: {
          type: Sequelize.DATE,
          allowNull: true
        },
        endDate: {
          type: Sequelize.DATE,
          allowNull: true
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true
        },
        vedio: {
          type: Sequelize.STRING,
          allowNull: true
        },
        state: {
          type: Sequelize.ENUM("WRITING", "PENDING", "APPROVAL", "REJECTED", "MODIFY"),
          allowNull: true,
          defaultValue: "WRITING"
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Project",
        tableName: "Project",
        paranoid: false,
        charset: "utf8",
        getterMethods: "utf8_general_ci"
      }
    );
  }
}

module.exports = Project;
