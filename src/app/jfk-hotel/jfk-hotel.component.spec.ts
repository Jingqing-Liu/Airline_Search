import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JFKHotelComponent } from './jfk-hotel.component';

describe('JFKHotelComponent', () => {
  let component: JFKHotelComponent;
  let fixture: ComponentFixture<JFKHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JFKHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JFKHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
