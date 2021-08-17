import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { AuthguardServiceService } from './service/authguard-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';
import { AppResolve } from './app.resolve';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthguardServiceService, AppResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
