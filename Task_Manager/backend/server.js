const express = require("express");
require("dotenv").config();
const cors = require("cors");
const fileUpload = require("express-fileupload");

const dbConnection = require("../backend/db/dataBase");
const taskRoutes = require("../backend/routes/taskRoutes");
const userRoutes = require("../backend/routes/userRoutes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/task", taskRoutes);

dbConnection();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
