import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { Dashboard } from '@streamlinehq/streamline-regular/lib/interface-essential'
import { Shipment } from '@streamlinehq/streamline-regular/lib/shipping-delivery'
import { LinkUnlink } from '@streamlinehq/streamline-regular/lib/interface-essential'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  mobileMenuOpen = false

  constructor() {}

  public icons = {
    dashboard: Dashboard.PieLineGraph,
    orders: Shipment.ShipmentUpload,
    links: LinkUnlink.Hyperlink,
  }

  ngOnInit(): void {}
}
