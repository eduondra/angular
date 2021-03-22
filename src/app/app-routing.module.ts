import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from './pages/posts-list/posts-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
