const Sequelize = require("sequelize");

class Student extends Sequelize.Model {
  static initiate(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.BIGINT,
          allowNull: true,
          references: {
            model: "User",
            key: "id"
          },
          onDelete: "SET NULL"
        },
        generation: {
          type: Sequelize.STRING(2),
          allowNull: false
        },
        name: {
          type: Sequelize.STRING(6),
          allowNull: false
        },
        grade: {
          type: Sequelize.STRING(1),
          allowNull: true
        },
        classNumber: {
          type: Sequelize.STRING(1),
          allowNull: true
        },
        studentNumber: {
          type: Sequelize.STRING(2),
          allowNull: true
        },
        state: {
          type: Sequelize.ENUM("SCHOOL", "GRADUATION", "LEAVE", "DROP", "KICK"),
          allowNull: false,
          defaultValue: "SCHOOL"
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Student",
        tableName: "Student",
        paranoid: false,
        charset: "utf8",
        getterMethods: "utf8_general_ci"
      }
    );
  }
}

module.exports = Student;
