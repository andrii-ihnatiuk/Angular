import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/core/api/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cities: Array<any>;
  weatherData: any;
  currentData: any;
  selCity: any;
  selDay: any; // прогноз на день
  current: any; // погода в данный момент
  curCity: string;
  isSetCity: boolean;

  constructor(private service: WeatherServiceService) {
    this.curCity = '';
    this.isSetCity = false;
    this.cities = [
      { id: '1', name: 'Odessa', lat: '46.482952', lon: '30.712481' },
      { id: '2', name: 'Kiev', lat: '50.450001', lon: '30.523333' },
      { id: '3', name: 'London', lat: '51.509865', lon: '-0.118092' }
    ];
  }

  ngOnInit(): void { }

  getWeatherData(event: any): void {
    const cityId = event.target.value;
    if (cityId === null) {
      return;
    }
    this.cities.forEach(city => {
      if (city.id === cityId) {
        this.selCity = new Array(city.lat, city.lon);
        this.curCity = city.name;
      }
    });

    this.service.getWeather$(this.selCity).subscribe(
      days => {
        this.setWeatherData(days);
      }
    );
  }

  setWeatherData(data: any): void {

    this.weatherData = Array.from(data.daily);
    this.currentData = Array.from([data.current])[0];

    this.weatherData.forEach((day: any) => {
      day.dt = new Date(day.dt * 1000).toLocaleDateString();
      day.temp.day = this.modifyTemp(day.temp.day);
      day.temp.night = this.modifyTemp(day.temp.night);
      day.feels_like.day = this.modifyTemp(day.feels_like.day);
      day.feels_like.night = this.modifyTemp(day.feels_like.night);
      day.weather = { main: day.weather[0].main, more: day.weather[0].description };
    });

    this.selDay = this.weatherData[0]; // info for today
    // info for NOW
    this.current = { date: new Date(this.currentData.dt * 1000).toLocaleDateString(), temp: this.modifyTemp(this.currentData.temp) };
    this.isSetCity = true;
  }

  modifyTemp(temp: number): string {
    return (temp - 273.15).toFixed(0);
  }

  specifyDay(index: number): void {
    const selDate = this.weatherData[index + 1].dt;

    if (this.current.date === selDate) {
      return;
    }
    // for (let i = 0; i < this.weatherData.length; i++) {
    //   if (this.weatherData[i].dt === selDate) {
    //     this.selDay = this.weatherData[i];
    //     this.current = { date: selDate, temp: this.weatherData[i].temp.day };
    //   }
    // }

    for (const weatherData of this.weatherData) {
      if (this.weatherData.dt === selDate) {
        this.selDay = this.weatherData;
        this.current = { date: selDate, temp: this.weatherData.temp.day };
      }
    }
  }

}
