import { Component } from '@angular/core'
import { ColorSchemeService } from './services/color-scheme/color-scheme.service'
import { MenuVisibilityService } from './services/menu-visibility/menu-visibility.service'
import { Paragraphs } from '@streamlinehq/streamline-regular/lib/interface-essential'
import { Weather, DayNight } from '@streamlinehq/streamline-regular/lib/weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public colorSchemeService: ColorSchemeService, public menuVisibilityService: MenuVisibilityService) {
    this.colorSchemeService.load()
    this.menuVisibilityService.load()
  }

  changeColorScheme(scheme: string): void {
    this.colorSchemeService.update(scheme)
  }

  changeMenuVisibility(visibility: string): void {
    this.menuVisibilityService.update(visibility)
  }

  public icons = {
    menuOpen: Paragraphs.IndentIncrease1,
    menuClose: Paragraphs.IndentDecrease1,
    themeLight: Weather.WeatherSun,
    themeDark: DayNight.NightMoonNew,
  }
}
