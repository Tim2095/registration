const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const config = require("./utils/config");
mongoose.set("strictQuery", false);
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");

logger.info("connecting to", config.MONGODB_URL);

const DB_URL = config.MONGODB_URL.replace(
  "PASSWORD",
  encodeURIComponent(config.DB_PASSWORD)
);

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to Mongo DB"))
  .catch((error) => console.log("Failed to connect to database", error));

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);
module.exports = app;
