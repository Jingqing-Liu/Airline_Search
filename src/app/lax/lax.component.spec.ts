import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAXComponent } from './lax.component';

describe('LAXComponent', () => {
  let component: LAXComponent;
  let fixture: ComponentFixture<LAXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
