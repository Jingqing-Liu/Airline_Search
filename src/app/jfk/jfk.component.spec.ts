import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JFKComponent } from './jfk.component';

describe('JFKComponent', () => {
  let component: JFKComponent;
  let fixture: ComponentFixture<JFKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JFKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JFKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
