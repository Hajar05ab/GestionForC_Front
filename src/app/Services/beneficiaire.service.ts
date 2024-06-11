import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Beneficiaire } from '../Models/beneficiaire.Model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {

  private api = 'http://localhost:8095/api/beneficiaires';

  constructor(private http: HttpClient) { }

  getBeneficiaires(): Observable<Beneficiaire[]> {
    return this.http.get<Beneficiaire[]>(this.api);
  }

  createBeneficiaire(beneficiaire: Beneficiaire): Observable<Beneficiaire> {
    console.log('Creating Beneficiaire:', beneficiaire); // Log the object being sent to the server
    return this.http.post<Beneficiaire>(`${this.api}/save`, beneficiaire);
  }

  updateBeneficiaire(id: number, beneficiaire: Beneficiaire): Observable<Beneficiaire> {
    return this.http.put<Beneficiaire>(`${this.api}/update/${id}`, beneficiaire);
  }

  deleteBeneficiaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
