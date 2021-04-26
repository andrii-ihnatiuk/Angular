import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { Lr2Component } from './lr2/lr2.component';
import { Lr2Child1Component } from './lr2-child1/lr2-child1.component';
import { NoSpacePipe } from './customPipes/no-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    Lr2Component,
    Lr2Child1Component,
    NoSpacePipe,
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
