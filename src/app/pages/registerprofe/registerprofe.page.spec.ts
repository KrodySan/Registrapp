import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterprofePage } from './registerprofe.page';

describe('RegisterprofePage', () => {
  let component: RegisterprofePage;
  let fixture: ComponentFixture<RegisterprofePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
