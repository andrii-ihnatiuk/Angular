import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lr3Component } from './lr3.component';

describe('Lr3Component', () => {
  let component: Lr3Component;
  let fixture: ComponentFixture<Lr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lr3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
