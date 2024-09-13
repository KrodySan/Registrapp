import { ComponentFixture, TestBed } from '@angular/core/testing';
import { menuprofePage } from './menuprofe.page';

describe('MenuprofePage', () => {
  let component: menuprofePage;
  let fixture: ComponentFixture<menuprofePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(menuprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
