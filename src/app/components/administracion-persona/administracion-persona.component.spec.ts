import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPersonaComponent } from './administracion-persona.component';

describe('AdministracionPersonaComponent', () => {
  let component: AdministracionPersonaComponent;
  let fixture: ComponentFixture<AdministracionPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
