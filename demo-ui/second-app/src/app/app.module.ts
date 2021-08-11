import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppResolve } from './app.resolve';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    AppResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
