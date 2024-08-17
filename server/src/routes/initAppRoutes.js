import { authRoute } from "./authRoute.js";
import { categoryRoute } from "./categoryRoute.js";
import { managerRoute } from "./managerRoute.js";

export const initAppRoutes = (app) => {
   app.use('/api/auth', authRoute);
   app.use('/api/categories', categoryRoute);
   app.use('/api/managers', managerRoute);
   /**
    * 
    */
}