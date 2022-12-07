import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsresultComponent } from './flightsresult.component';

describe('FlightsresultComponent', () => {
  let component: FlightsresultComponent;
  let fixture: ComponentFixture<FlightsresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
