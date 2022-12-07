import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCOComponent } from './mco.component';

describe('MCOComponent', () => {
  let component: MCOComponent;
  let fixture: ComponentFixture<MCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
