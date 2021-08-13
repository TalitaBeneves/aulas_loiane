import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosListasComponent } from './cursos-listas.component';

describe('CursosListasComponent', () => {
  let component: CursosListasComponent;
  let fixture: ComponentFixture<CursosListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
