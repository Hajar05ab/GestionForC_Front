import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thematique } from 'src/app/Models/thematique.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThematiqueService {

  private api = 'http://localhost:8095/api/thematiques';

  constructor(private http: HttpClient) { }

  getThematiques(): Observable<Thematique[]> {
    return this.http.get<Thematique[]>(this.api);
  }

  createThematique(thematique: Thematique): Observable<Thematique> {
    console.log('Creating Thematique:', thematique); // Log the object being sent to the server
    return this.http.post<Thematique>(`${this.api}/save`, thematique);
  }

  updateThematique(id: number, thematique: Thematique): Observable<Thematique> {
    return this.http.put<Thematique>(`${this.api}/update/${id}`, thematique);
  }

  deleteThematique(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}

