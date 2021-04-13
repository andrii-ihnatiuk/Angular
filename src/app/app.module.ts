import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Для two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
