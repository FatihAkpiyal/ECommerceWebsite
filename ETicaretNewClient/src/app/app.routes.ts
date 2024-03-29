import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: "admin", component: LayoutComponent, children: [
            {path:"admin",component:DashboardComponent},
            {
                path: "customers", loadChildren: () => import("./admin/components/customers/customers.module")
                    .then(module => module.CustomersModule)
            },
            {
                path: "products", loadChildren: () => import("./admin/components/products/products.module").then
                    (module => module.ProductsModule)
            },
            {
                path: "orders", loadChildren: () => import("./admin/components/orders/orders.module").then
                    (module => module.OrdersModule)
            }, 


        ]
    },
    
    {path:"",component:HomeComponent},
    {path:"basket",loadChildren:() => import("./ui/components/basket/basket.module").then
    (module=>module.BasketModule)},
    {path:"products",loadChildren:() => import("./ui/components/products/products.module").then
    (module=>module.ProductsModule)},
    {path:"register",loadChildren:() => import("./ui/components/register/register.module").then
    (module=>module.RegisterModule)},
    {path:"login",loadChildren:() => import("./ui/components/login/login.module").then
    (module=>module.LoginModule)},


];
