import { Routes, RouterModule } from '@angular/router'

import { OrdersComponent } from './components/orders/orders.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  {
    path: 'memorial-page',
    loadChildren: './memorial-page/memorial-page.module#MemorialPageModule',
  },
]

export const routing = RouterModule.forRoot(routes)
