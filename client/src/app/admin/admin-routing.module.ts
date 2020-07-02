import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'create', component: EditProductComponent, data: { breadcrumb: 'Create Product'}},
  {path: 'edit/:id', component: EditProductComponent, data: { breadcrumb: 'Edit Product'}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
