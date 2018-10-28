import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { UsersComponent} from '../users/users.component';
import {RepositoriesComponent} from '../repositories/repositories.component';
import {NotFoundComponent} from '../not-found/not-found.component';

// Defining Routes
 const routes:Routes=[
   {path:"users",component:UsersComponent},
   {path:"Repositories",component:RepositoriesComponent},
   {path:"",redirectTo:"/users",pathMatch:"full"},
   {path:'**',component:NotFoundComponent}
 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
