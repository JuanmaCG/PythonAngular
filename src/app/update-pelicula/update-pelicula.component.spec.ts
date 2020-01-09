import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePeliculaComponent } from './update-pelicula.component';

describe('UpdatePeliculaComponent', () => {
  let component: UpdatePeliculaComponent;
  let fixture: ComponentFixture<UpdatePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
