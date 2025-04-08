const express = require("express");
const cors = require("cors");
const { configDotenv } = require("dotenv");

const router = require("./controller");
const { sequelize } = require("./model");

configDotenv();
const port = process.env.SERVER_PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "localhost",
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true
  })
);

app.use("/", router);

app.listen(port, async () => {
  console.log(`Server is running on ${port}`);

  await sequelize
    .sync({ force: false })
    .then(() => {
      console.log("DB has initted");
    })
    .catch((err) => {
      console.error(err);
    });
});
