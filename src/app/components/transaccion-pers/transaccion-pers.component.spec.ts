import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionPersComponent } from './transaccion-pers.component';

describe('TransaccionPersComponent', () => {
  let component: TransaccionPersComponent;
  let fixture: ComponentFixture<TransaccionPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
