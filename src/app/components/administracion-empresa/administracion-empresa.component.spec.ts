import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEmpresaComponent } from './administracion-empresa.component';

describe('AdministracionEmpresaComponent', () => {
  let component: AdministracionEmpresaComponent;
  let fixture: ComponentFixture<AdministracionEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
