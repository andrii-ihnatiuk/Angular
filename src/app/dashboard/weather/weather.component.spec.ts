import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherServiceService } from 'src/app/core/api/weather-service.service';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: WeatherServiceService;

  beforeEach(async () => {
    weatherService = jasmine.createSpyObj('WeatherService', ['getWeather$']);

    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      providers: [
        { provide: WeatherServiceService, useValue: weatherService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
