import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchviewComponent } from './searchview/searchview.component';


const routes: Routes = [
  { path:'searchview',component: SearchviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
