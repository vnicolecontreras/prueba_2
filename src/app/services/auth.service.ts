import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../INTERFACE/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_api = "https://dummyjson.com/auth/login";
  
  constructor(
    private http: HttpClient // Inyección del servicio Http
  ) { }

  // Método de login
  login(username: string, password: string): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post<User>(this.url_api, body, { headers });
  }

  // Método para insertar el token
  insert_token(token: string): void {
    localStorage.setItem('accessToken', token);
  }



//obtener token 

  obtener_token (): string | null {
    return localStorage.getItem('accessToken')

  } 


  obtener_headers(): HttpHeaders{ 
    const token = this.obtener_token();
    return new HttpHeaders({ 
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, 


    )}
}   