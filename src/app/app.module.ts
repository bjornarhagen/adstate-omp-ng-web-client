import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { StreamlineIconModule } from '@streamlinehq/streamline-wrapper-angular'

import { AppComponent } from './app.component'
import { NavigationComponent } from './components/navigation/navigation.component'

import { OrdersComponent } from './components/orders/orders.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { OrderComponent } from './components/order/order.component'

import { MemorialPageModule } from './memorial-page/memorial-page.module'

import { routing } from './app.routing'
@NgModule({
  declarations: [AppComponent, NavigationComponent, OrdersComponent, OrderComponent, DashboardComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing, StreamlineIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
