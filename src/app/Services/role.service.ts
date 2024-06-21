import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Role } from '../Models/role.Model';  // Assurez-vous que ce chemin est correct

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private api = 'http://localhost:8095/api/roles';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.api);
  }

  createRole(role: Role): Observable<Role> {
    console.log('Creating Role:', role); // Log the object being sent to the server
    return this.http.post<Role>(this.api + '/save', role);
  }

  updateRole(id: number, role: Role): Observable<Role> {
    return this.http.put<Role>(`${this.api}/update/${id}`, role);
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
