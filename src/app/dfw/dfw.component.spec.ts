import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFWComponent } from './dfw.component';

describe('DFWComponent', () => {
  let component: DFWComponent;
  let fixture: ComponentFixture<DFWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DFWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
