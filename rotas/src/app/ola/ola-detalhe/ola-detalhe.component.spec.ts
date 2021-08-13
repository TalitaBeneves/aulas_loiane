import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaDetalheComponent } from './ola-detalhe.component';

describe('OlaDetalheComponent', () => {
  let component: OlaDetalheComponent;
  let fixture: ComponentFixture<OlaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
