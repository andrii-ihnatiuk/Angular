import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lr2Child1Component } from './lr2-child1.component';

describe('Lr2Child1Component', () => {
  let component: Lr2Child1Component;
  let fixture: ComponentFixture<Lr2Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lr2Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lr2Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
