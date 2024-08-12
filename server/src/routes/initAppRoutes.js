import { categoryRoute } from "./categoryRoute";
import { managerRoute } from "./managerRoute";
import { roleRoute } from "./roleRoute";

export const initAppRoutes = (app) => {
   app.use('/api/category', categoryRoute);
   app.use('/api/role', roleRoute);
   app.use('/api/manager', managerRoute);
}