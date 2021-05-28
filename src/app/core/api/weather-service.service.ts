import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient: HttpClient) { }

  getWeather$(city: any[]): Observable<any[]> {

    return this.httpClient.get(`${environment.apiUrl}lat=${city[0]}&lon=${city[1]}&exclude=minutely,hourly,alerts&appid=4b2c365a926cccdff33315bed3e8689e`)
    .pipe(map((data: any) => data));
  }

}
