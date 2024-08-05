import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/login">Login</a>
      <a routerLink="/cursos">Cursos</a>
      <a routerLink="/estudiantes">Estudiantes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
