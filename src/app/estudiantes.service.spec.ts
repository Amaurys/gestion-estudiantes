import { TestBed } from '@angular/core/testing';

import { EstudianteService } from './estudiantes.service';

describe('EstudiantesService', () => {
  let service: EstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
