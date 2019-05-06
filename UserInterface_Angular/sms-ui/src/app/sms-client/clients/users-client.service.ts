import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../dto/User';

@Injectable({
  providedIn: 'root'
})
export class UsersClientService {

  private context = 'user-service/users';

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get<User>(`${this.context}/${id}`);
  }

  findByEmail(email: string) {
    return this.http.get<User>(`${this.context}/email/${email}`);
  }
}
