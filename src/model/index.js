const Sequelize = require("sequelize");
const config = require("../config/config");

const User = require("./user");
const Student = require("./student");
const Contest = require("./contest");
const Project = require("./project");
const Mark = require("./mark");

const db = {};
const sequelize = new Sequelize({ ...config, sync: false });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Student = Student;
db.Contest = Contest;
db.Project = Project;
db.Mark = Mark;

User.initiate(sequelize);
Student.initiate(sequelize);
Contest.initiate(sequelize);
Project.initiate(sequelize);
Mark.initiate(sequelize);

module.exports = db;
