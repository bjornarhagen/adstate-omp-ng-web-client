import { Injectable } from '@angular/core'
import { Link } from '../../../models/Link'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  private apiURLBase = 'http://localhost:3001'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private http: HttpClient) {}

  get(orderId: number): Observable<Link[]> {
    const url = this.apiURLBase + '/' + orderId
    return this.http.get<Link[]>(url, this.httpOptions)
  }
}
