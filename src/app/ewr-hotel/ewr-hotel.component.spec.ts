import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWRHotelComponent } from './ewr-hotel.component';

describe('EWRHotelComponent', () => {
  let component: EWRHotelComponent;
  let fixture: ComponentFixture<EWRHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWRHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EWRHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
