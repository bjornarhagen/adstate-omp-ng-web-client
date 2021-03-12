import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { routing } from './memorial-page.routing'

import { MemorialPageComponent } from './memorial-page.component'
import { LinksComponent } from './components/links/links.component'
import { OMPHeaderComponent } from './components/header/header.component'
import { OMPNavigationComponent } from './components/navigation/navigation.component'

@NgModule({
  declarations: [MemorialPageComponent, LinksComponent, OMPHeaderComponent, OMPNavigationComponent],
  exports: [LinksComponent, OMPHeaderComponent, OMPNavigationComponent],
  imports: [CommonModule, routing],
})
export class MemorialPageModule {}
