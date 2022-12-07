import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWRComponent } from './ewr.component';

describe('EWRComponent', () => {
  let component: EWRComponent;
  let fixture: ComponentFixture<EWRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EWRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
