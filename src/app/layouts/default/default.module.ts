import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckInOutComponent } from 'src/app/modules/check-in-out/check-in-out.component';
import { FormsModule } from '@angular/forms';
import { SectionExperienceComponent } from 'src/app/modules/home/section-experience/section-experience.component';
import { SectionHomeComponent } from 'src/app/modules/home/section-home/section-home.component';
import { SectionSatisfyComponent } from 'src/app/modules/home/section-satisfy/section-satisfy.component';
import { RoomsComponent } from 'src/app/modules/rooms/rooms.component';
import { RoomTypesComponent } from 'src/app/modules/rooms/room-types/room-types.component';


@NgModule({
    declarations: [
        DefaultComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        CheckInOutComponent,
        SectionExperienceComponent,
        SectionHomeComponent,
        SectionSatisfyComponent,
        RoomsComponent,
        RoomTypesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,
        FontAwesomeModule,
        FormsModule
    ]
})
export class DefaultModule { }
