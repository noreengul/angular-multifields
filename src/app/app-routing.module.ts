import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { AddressComponent } from './users/address/address.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'users',component:UsersComponent},
  { path:'items' , component: ItemsComponent},
  { path: 'users/address/:id', component:AddressComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
