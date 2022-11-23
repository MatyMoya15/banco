import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersProfileComponent } from './pers-profile.component';

describe('PersProfileComponent', () => {
  let component: PersProfileComponent;
  let fixture: ComponentFixture<PersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
