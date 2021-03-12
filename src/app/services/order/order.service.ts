import { Injectable } from '@angular/core'
import { Order } from '../../models/Order'
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
export class OrderService {
  apiURL = 'http://localhost:3000/orders'

  constructor(private http: HttpClient) {}

  get(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL, httpOptions)
  }

  update(order: Order): Observable<any> {
    const url = this.apiURL + '/' + order.id
    const r = this.http.put(url, order, httpOptions)
    console.log('SUBMIT', url, r)
    return r
  }
}
