import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes =  [
  {path: "", component: IndexComponent, data : {title: 'BookMyDoc'}},
  {path: "login", component: LoginComponent, data : {title: 'BookMyDoc - Login'}},
  {path: "signup", component: SignupComponent, data : {title: 'BookMyDoc - Signup'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
