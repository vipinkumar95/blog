import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  constructor() { }

  login(email:string,password:string){
    return this.http.post<{
      accessToken:string;
    }>("https://localhost:44366/api/Auth",{email,password});
  }
}
