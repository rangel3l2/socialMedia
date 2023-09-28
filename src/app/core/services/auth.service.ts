import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user"
import { API_CONFIG } from "../config/config";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(user: User): Observable<any> {
    return this.http.post(`${API_CONFIG.base_url_auth}/authenticate`, user, {
      observe: "response",
      responseType: "text",
    });
  }

  get isLoggedIn() {
    return localStorage.getItem("isLoggedIn");
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem("isLoggedIn", "yes");
      })
    );
  }

  logout(): void {
    localStorage.removeItem("isLoggedIn");
  }

  register(user: User): Observable<any> {
    console.log(user)
    return this.http.post(`${API_CONFIG.base_url_auth}/create`, user, {
      observe: "response",
      responseType: "text",
    });
  }
}