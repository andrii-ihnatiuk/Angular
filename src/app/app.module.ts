import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mainPage/home/home.component';
import { SecondComponent } from './mainPage/second/second.component';
import { ThirdComponent } from './mainPage/third/third.component';
import { Lr2Component } from './mainPage/lr2/lr2.component';
import { Lr2Child1Component } from './mainPage/lr2-child1/lr2-child1.component';
import { NoSpacePipe } from './customPipes/no-space.pipe';
import { Lr3Component } from './dashboard/lr3/lr3.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { LoginComponent } from './dashboard/login/login.component';
import { InfoComponent } from './dashboard/info/info.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './dashboard/about/about.component';
import { PreferencesComponent } from './dashboard/preferences/preferences.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    Lr2Component,
    Lr2Child1Component,
    NoSpacePipe,
    Lr3Component,
    ContainerComponent,
    HeaderComponent,
    LoginComponent,
    InfoComponent,
    RegisterComponent,
    AboutComponent,
    PreferencesComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Для two-way binding
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
