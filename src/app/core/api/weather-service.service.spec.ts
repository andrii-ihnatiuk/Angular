import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceService } from './weather-service.service';

describe('WeatherServiceService', () => {
  let service: WeatherServiceService;
  let http: HttpClient;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);

    service = new WeatherServiceService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
