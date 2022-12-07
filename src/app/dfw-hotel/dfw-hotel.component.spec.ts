import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFWHotelComponent } from './dfw-hotel.component';

describe('DFWHotelComponent', () => {
  let component: DFWHotelComponent;
  let fixture: ComponentFixture<DFWHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFWHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DFWHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
