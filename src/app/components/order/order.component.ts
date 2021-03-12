import { Component, Input, OnInit } from '@angular/core'
import { Order } from '../../models/Order'
import { UUID } from '../../types/UUID'
import { OrderService } from '../../services/order/order.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  @Input() order: Order
  showEditForOrder: UUID

  ngOnInit(): void {}

  orderUpdate(submitEvent: Event): void {
    submitEvent.preventDefault()
    this.showEditForOrder = null

    this.orderService.update(this.order).subscribe((updatedOrder: Order) => {
      console.log('update order', updatedOrder)
    })
  }
}
