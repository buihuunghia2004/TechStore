import { adminRoute } from "@/api/admin/admin.route";
import { authManagerRoute } from "@/api/auth/manager/authManager.route";
import { brandRoute } from "@/api/brand/brand.route";
import { categoryRoute } from "@/api/category/category.route";
import { managerRoute } from "@/api/manager/manager.route";

export const initAppRoutes = (app) => {
   app.use('/api/auth/manager', authManagerRoute);
   app.use('/api/admin',adminRoute)
   app.use('/api/managers',managerRoute)
   app.use('/api/brands',brandRoute)
   app.use('/api/categories',categoryRoute)
}