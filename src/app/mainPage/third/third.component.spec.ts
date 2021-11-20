import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponent } from './third.component';

describe('ThirdComponent', () => {
  let component: ThirdComponent;
  let fixture: ComponentFixture<ThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch condition', () => {
    // * Given
    const condition = component.condition;
    // * When
    component.switchCondition();
    // * Then
    expect(component.checkHandler).not.toEqual(condition);
  });

  it('should switch color', () => {
    // * Given
    const isRed = component.redColor;
    // * When
    component.checkHandler('color');
    // * Then
    expect(component.redColor).not.toEqual(isRed);
  });

  it('should switch cursive', () => {
    // * Given
    const isCursive = component.cursive;
    // * When
    component.checkHandler('cursive');
    // * Then
    expect(component.cursive).not.toEqual(isCursive);
  });
});
