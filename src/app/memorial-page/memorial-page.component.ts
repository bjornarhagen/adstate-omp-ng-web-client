import { Component } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import { Order } from '../models/Order'
import { OrderService } from '../services/order/order.service'

@Component({
  selector: 'app-memorial-page',
  templateUrl: './memorial-page.component.html',
})
export class MemorialPageComponent {
  private orderId: Number
  public order: Order

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.orderId = Number(this.route.snapshot.paramMap.get('orderId'))
      this.orderService.get(this.orderId).subscribe((order: Order) => {
        this.order = order
      })
    })
  }

  ngOnInit(): void {}
}
