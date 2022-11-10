import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent,
    children:[
      { path: 'list', component: ListUserComponent },
      { path: 'list/profile/:user', component: ProfileComponent },
      { path: 'login', component:LoginComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
