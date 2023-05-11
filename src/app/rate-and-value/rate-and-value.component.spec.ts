import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAndValueComponent } from './rate-and-value.component';

describe('RateAndValueComponent', () => {
  let component: RateAndValueComponent;
  let fixture: ComponentFixture<RateAndValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateAndValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateAndValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
