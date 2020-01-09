import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdministradorComponent } from './registrar-administrador.component';

describe('RegistrarAdministradorComponent', () => {
  let component: RegistrarAdministradorComponent;
  let fixture: ComponentFixture<RegistrarAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
