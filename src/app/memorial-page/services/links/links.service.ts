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
  apiURL = 'http://localhost:3001'

  constructor(private http: HttpClient) {}

  get(): Observable<Link[]> {
    return this.http.get<Link[]>(this.apiURL, httpOptions)
  }

  update(link: Link): Observable<any> {
    const url = this.apiURL + '/' + link.id
    const r = this.http.put(url, link, httpOptions)
    console.log('SUBMIT', url, r)
    return r
  }
}
