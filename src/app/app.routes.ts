import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'estudiantes', component: EstudiantesComponent }
];
