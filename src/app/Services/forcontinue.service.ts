import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForContinue } from '../Models/forcontinue.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForcontinueService {

  private api = 'http://localhost:8095/api/forContinues';

  constructor(private http: HttpClient) { }

  getForContinues() {
    return this.http.get<ForContinue[]>(this.api);
  }

  createForContinue(forcontinue: ForContinue){
    return this.http.post<ForContinue>(this.api + '/save', forcontinue);
  }

  updateForContinue(id: number, forcontinue: ForContinue){
    return this.http.put<ForContinue>(`${this.api}/update/${id}`, forcontinue);
  }

  deleteForContinue(id: number){
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
