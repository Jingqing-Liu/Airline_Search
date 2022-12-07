import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAXHotelComponent } from './lax-hotel.component';

describe('LAXHotelComponent', () => {
  let component: LAXHotelComponent;
  let fixture: ComponentFixture<LAXHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAXHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAXHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
