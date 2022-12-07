import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCOHotelComponent } from './mco-hotel.component';

describe('MCOHotelComponent', () => {
  let component: MCOHotelComponent;
  let fixture: ComponentFixture<MCOHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCOHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCOHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
