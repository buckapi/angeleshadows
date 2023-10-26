import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'shop', loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
