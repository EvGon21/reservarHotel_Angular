import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponentComponent } from './components/body/body-component/body-component.component';
import { AboutComponent } from './components/nav-bar/about/about.component';
import { ContactComponent } from './components/nav-bar/contact/contact.component';
import { FeedbackComponent } from './components/nav-bar/feedback/feedback.component';
import { RoomTypesComponent } from './components/nav-bar/room-types/room-types.component';

const routes: Routes = [
  {path:'home', component: BodyComponentComponent},
  {path:'home/about', component: AboutComponent},
  {path:'home/contact', component: ContactComponent},
  {path:'home/feedback', component: FeedbackComponent},
  {path:'home/room-type', component: RoomTypesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Cuando es la raíz
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
