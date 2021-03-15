import { Component, OnInit } from '@angular/core'
import { OrderService } from '../../services/order/order.service'
import { Order } from '../../models/Order'
import { UUID } from '../../types/UUID'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[]

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.get().subscribe((orders: Order[]) => {
      this.orders = orders
    })
  }
}
