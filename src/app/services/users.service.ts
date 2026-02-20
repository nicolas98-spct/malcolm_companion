import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';


export interface UserCreate {
  names: string;
  email: string;
  age: number;
}

export interface User extends UserCreate {
  id: string;
  createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  // 🔁 CAMBIA por tu URL real de MockAPI
  private readonly baseUrl = 'https://6997bcf7d66520f95f159be9.mockapi.io/users';
  private readonly endpoint = `${this.baseUrl}/users`;

  constructor(private http: HttpClient) {}

  createUser(payload: UserCreate): Observable<User> {
    return this.http.post<User>(this.endpoint, payload);
  }

  // para validar duplicados por correo
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}?email=${encodeURIComponent(email)}`);
  }
}
