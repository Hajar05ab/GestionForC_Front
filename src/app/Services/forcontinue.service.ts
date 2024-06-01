import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForContinue } from '../Models/forcontinue.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForcontinueService {

  private apiUrl = 'http://localhost:8095/api/forContinues';

  constructor(private http: HttpClient) { }

  getForContinues() {
    return this.http.get<ForContinue[]>(this.apiUrl);
  }

  createForContinue(forcontinue: ForContinue){
    return this.http.post<ForContinue>(this.apiUrl + '/save', forcontinue);
  }

  updateForContinue(id: number, forcontinue: ForContinue){
    return this.http.put<ForContinue>(`${this.apiUrl}/update/${id}`, forcontinue);
  }

  deleteForContinue(id: number){
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
