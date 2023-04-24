import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {path: '',
  component: DefaultComponent,
  children: [{
    path: '', 
    component: HomeComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'login',
    component: LoginComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
