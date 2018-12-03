import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {SellerInfoComponent} from './components/seller-info/seller-info.component';
import {LoginGuard} from './guards/login.guard';
import {ChatComponent} from './components/chat/chat.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
      path: 'products/:id', component: ProductDetailComponent, canActivate: [LoginGuard],
      children: [
        {path: '', component: ProductDescriptionComponent},
        {path: 'seller/:id', component: SellerInfoComponent}
      ]
    },
    {path: 'chat', component: ChatComponent, outlet: 'aux'},
    {path: 'luxury', loadChildren: 'src/app/components/luxury/luxury.module'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
