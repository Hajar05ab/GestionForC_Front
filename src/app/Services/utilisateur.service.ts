import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private api = 'http://localhost:8095/api/users';

  constructor(private http: HttpClient) { }

  getUtilisateurs() {
    return this.http.get<User[]>(this.api);
  }

  createUtilisateur(utilisateur: User){
    console.log('Creating Utilisateur:', utilisateur);
    return this.http.post<User>(`${this.api}/save`, utilisateur);
  }

  updateUtilisateur(id: number, utilisateur: User){
    return this.http.put<User>(`${this.api}/update/${id}`, utilisateur);
  }

  deleteUtilisateur(id: number){
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
