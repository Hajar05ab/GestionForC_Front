import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diplome } from '../Models/diplome.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {
  private api = 'http://localhost:8095/api/diplomes';

  constructor(private http: HttpClient) { }

  getDiplomes() {
    return this.http.get<Diplome[]>(this.api);
  }

  createDiplome(diplome: Diplome){
    console.log('Creating Diplome:', diplome);
    return this.http.post<Diplome>(`${this.api}/save`, diplome);
  }

  updateDiplome(id: number, diplome: Diplome){
    return this.http.put<Diplome>(`${this.api}/update/${id}`, diplome);
  }

  deleteDiplome(id: number){
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
