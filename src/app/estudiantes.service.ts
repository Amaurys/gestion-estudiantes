import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Estudiante } from '../Models/estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private baseUrl = 'http://localhost:5169/api/Estudiantes';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getEstudiantes(): Observable<Estudiante[]> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get<Estudiante[]>(this.baseUrl, { headers });
  }
}