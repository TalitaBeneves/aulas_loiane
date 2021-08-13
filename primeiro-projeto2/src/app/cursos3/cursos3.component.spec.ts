import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos3Component } from './cursos3.component';

describe('Cursos3Component', () => {
  let component: Cursos3Component;
  let fixture: ComponentFixture<Cursos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cursos3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
