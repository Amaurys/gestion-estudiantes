import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl = 'http://localhost:5169/api/Cursos';

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createCurso(curso: any): Observable<any> {
    return this.http.post(this.baseUrl, curso);
  }

  updateCurso(id: number, curso: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, curso);
  }

  deleteCurso(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
