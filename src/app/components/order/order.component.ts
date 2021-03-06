import { Component, Input, OnInit } from '@angular/core'
import { Order } from '../../models/Order'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor() {}

  @Input() order: Order

  ngOnInit(): void {}
}
