import { Injectable } from '@angular/core'
import { Order } from '../../models/Order'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiURL = 'http://localhost:3000'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(private http: HttpClient) {}

  get(orderId?: Number): Observable<Order[] | Order> {
    let url = this.apiURL

    if (orderId) {
      url += '/' + orderId
      return this.http.get<Order>(url, this.httpOptions)
    }

    return this.http.get<Order[]>(url, this.httpOptions)
  }
}
