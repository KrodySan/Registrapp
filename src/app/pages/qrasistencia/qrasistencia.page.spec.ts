import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRAsistenciaPage } from './qrasistencia.page';

describe('QRAsistenciaPage', () => {
  let component: QRAsistenciaPage;
  let fixture: ComponentFixture<QRAsistenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
