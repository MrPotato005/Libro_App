import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosListComponents } from './libros-list';

describe('LibrosList', () => {
  let component: LibrosListComponents;
  let fixture: ComponentFixture<LibrosListComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrosListComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosListComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
