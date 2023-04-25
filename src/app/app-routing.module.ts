import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';
import { RoomsComponent } from './modules/rooms/rooms.component';

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
  },{
    path: 'rooms',
    component: RoomsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
