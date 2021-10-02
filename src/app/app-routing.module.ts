import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mainPage/home/home.component';
import { Lr3Component } from './dashboard/lr3/lr3.component';
import { LoginComponent } from './dashboard/login/login.component';
import { InfoComponent } from './dashboard/info/info.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { AboutComponent } from './dashboard/about/about.component';
import { PreferencesComponent } from './dashboard/preferences/preferences.component';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { PrefsGuard } from './core/guards/prefs/prefs.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'lr3', component: Lr3Component,
    children: [
      { path: '', component: InfoComponent, canActivate: [AuthGuard] },
      { path: 'login', component:  LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'preferences', component: PreferencesComponent, canActivate: [PrefsGuard] },
      { path: 'weather', component: WeatherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
