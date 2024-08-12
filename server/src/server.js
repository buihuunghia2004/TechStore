import express from "express";
import { env } from "./config/environment";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware ";
import { connectdb } from "./config/mongodb";
import { initAppRoutes } from "./routes/initAppRoutes";

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
