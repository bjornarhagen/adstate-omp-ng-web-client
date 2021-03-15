import { Injectable } from '@angular/core'
import { Link } from '../../../models/Link'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'test',
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  private apiURLBase = 'http://localhost:3001'

  constructor(private http: HttpClient) {}

  get(orderId: number): Observable<Link[]> {
    const url = this.apiURLBase + '/' + orderId
    return this.http.get<Link[]>(url, httpOptions)
  }
}
