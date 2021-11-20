import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change name to Andrew', () => {
    // * Given
    const name = component.firstName;
    // * When
    component.andrew();
    // * Then
    expect(component.firstName).not.toEqual(name);
  });

  it('should change name to Roman', () => {
    // * Given
    const name = component.firstName;
    // * When
    component.roman();
    // * Then
    expect(component.firstName).not.toEqual(name);
  });

  it('should increase clicks', () => {
    // * Given
    const clicks = component.clicks;
    // * When
    component.setClicks(true);
    // * Then
    expect(component.clicks).toBeGreaterThan(clicks);
  });

  it('should decrese clicks', () => {
    // * Given
    const clicks = component.clicks;
    // * When
    component.setClicks(false);
    // * Then
    expect(component.clicks).toBeLessThan(clicks);
  });

  it('should navigate to /lr3', () => {
    // * Given
    // * When
    component.navigate();
    // * Then
    expect(router.navigate).toHaveBeenCalledOnceWith(['/lr3']);
  });

});
