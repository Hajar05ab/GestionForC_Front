import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abscence } from '../Models/abscence.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbscenceService {
  private api = 'http://localhost:8095/api/abscences';

  constructor(private http: HttpClient) { }

  getAbscences() {
    return this.http.get<Abscence[]>(this.api);
  }

  createAbscence(abscence: Abscence){
    console.log('Creating Absence:', abscence);
    return this.http.post<Abscence>(`${this.api}/save`, abscence);
  }

  updateAbscence(id: number, abscence: Abscence){
    return this.http.put<Abscence>(`${this.api}/update/${id}`, abscence);
  }

  deleteAbscence(id: number){
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
