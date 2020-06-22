import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { DatePipe, KeyValuePipe } from '@angular/common'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProfileComponent } from 'dashboard/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { VerifyEmailComponent } from './user-auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './user-auth/forgot-password/forgot-password.component';

import { AuthenticationService } from './shared/authentication.service';
import { CurrentCrittersComponent } from './dashboard/current-critters/current-critters.component';
import { CurrentFishComponent } from './dashboard/current-critters/current-fish/current-fish.component';
import { CurrentBugsComponent } from './dashboard/current-critters/current-bugs/current-bugs.component';
import { NavComponent } from './nav/nav.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';
import { FishComponent } from './critterpedia/fish/fish.component';

import { EventsComponent } from './dashboard/events/events.component';
import { BirthdayComponent } from './dashboard/birthday/birthday.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { VillagersComponent } from './villagers/villagers.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    CurrentCrittersComponent,
    CurrentFishComponent,
    CurrentBugsComponent,
    NavComponent,
    EventsComponent,
    BirthdayComponent,
    CritterpediaMainComponent,
    VillagersComponent,
    BugsComponent,
    FishComponent,
    WelcomeComponent
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    RouterModule
  ],
  providers: [AuthenticationService, DatePipe, KeyValuePipe, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }