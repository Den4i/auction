import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {SellerInfoComponent} from './components/seller-info/seller-info.component';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
      path: 'product/:id', component: ProductDetailComponent, canActivate: [LoginGuard],
      children: [
        {path: '', component: ProductDescriptionComponent},
        {path: 'seller/:id', component: SellerInfoComponent}
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
