import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteretionComponent } from './registeretion.component';

describe('RegisteretionComponent', () => {
  let component: RegisteretionComponent;
  let fixture: ComponentFixture<RegisteretionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteretionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
