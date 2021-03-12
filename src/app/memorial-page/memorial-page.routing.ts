import { Routes, RouterModule } from '@angular/router'
import { LinksComponent } from './components/links/links.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'links' },
  { path: 'links', component: LinksComponent },
]

export const routing = RouterModule.forChild(routes)
