import { adminRoute } from "@/api/admin/admin.route";
import { authManagerRoute } from "@/api/auth/manager/authManager.route";
import { brandRoute } from "@/api/brand/brand.route";
import { categoryRoute } from "@/api/category/category.route";
import { filterProductInfoByCateRoute } from "@/api/filter_product_info_by_cate/filter-product-info-by-cate.route";
import { managerRoute } from "@/api/manager/manager.route";
import { productInfoByCateRoute } from "@/api/product_info_by_cate/product-info-by-cate.route";

export const initAppRoutes = (app) => {
   app.use('/api/auth/manager', authManagerRoute);
   app.use('/api/admin',adminRoute)
   app.use('/api/managers',managerRoute)
   app.use('/api/brands',brandRoute)
   app.use('/api/categories',categoryRoute)
   app.use('/api/product-info-by-cate',productInfoByCateRoute)
   app.use('/api/filter-product-info-by-cate',filterProductInfoByCateRoute)
}