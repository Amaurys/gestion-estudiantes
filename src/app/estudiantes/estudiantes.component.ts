import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteService } from '../estudiantes.service';
import { Estudiante } from '../../Models/estudiante';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe({
      next: (data) => {
        this.estudiantes = data;
      },
      error: (err) => {
        console.error('Error fetching estudiantes', err);
      }
    });
  }
}
