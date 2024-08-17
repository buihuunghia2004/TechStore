import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
// import { initAppRoutes } from "./routes/initAppRoutes";
import { env } from "./config/environment.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware.js"
import { connectdb } from "./config/mongodb.js";
import { initAppRoutes } from "./routes/initAppRoutes.js";

//express
const app = express();
//connect db
connectdb();

//cors
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({ extended: true }));

//init server routes
initAppRoutes(app);

//middleware error handler
app.use(errorHandlingMiddleware);

app.listen(env.APP_PORT, () => {
  console.log("Listen port " + env.APP_PORT);
});
