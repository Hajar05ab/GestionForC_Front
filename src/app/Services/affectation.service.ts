import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Affectation } from '../Models/affectation.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  private api = 'http://localhost:8095/api/affectations';

  constructor(private http: HttpClient) { }

  getAffectations() {
    return this.http.get<Affectation[]>(this.api);
  }

  createAffectation(affectation: Affectation){
    console.log('Creating Affectation:', affectation);
    return this.http.post<Affectation>(`${this.api}/save`, affectation);
  }

  updateAffectation(id: number, affectation: Affectation){
    return this.http.put<Affectation>(`${this.api}/update/${id}`, affectation);
  }

  deleteAffectation(id: number){
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
