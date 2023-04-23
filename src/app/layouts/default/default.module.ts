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


@NgModule({
    declarations: [
        DefaultComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        CheckInOutComponent
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
