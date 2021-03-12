import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MenuVisibilityService {
  private renderer: Renderer2
  private menuVisibility: string
  // Define prefix for clearer and more readable class names in scss files
  private menuVisibilityPrefix = 'menu-visibility-'

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  // Save prefers-menu-visibility to localStorage
  _setMenuVisibility(scheme) {
    this.menuVisibility = scheme
    localStorage.setItem('menu-visibility', scheme)
  }

  // Check if any prefers-menu-visibility is stored in localStorage
  _getMenuVisibility() {
    if (localStorage.getItem('menu-visibility')) {
      this.menuVisibility = localStorage.getItem('menu-visibility')
    } else {
      this.menuVisibility = 'visible'
    }
  }

  load() {
    this._getMenuVisibility()
    this.renderer.addClass(document.querySelector('app-root'), this.menuVisibilityPrefix + this.menuVisibility)
  }

  update(scheme) {
    this._setMenuVisibility(scheme)
    this.renderer.removeClass(
      document.querySelector('app-root'),
      this.menuVisibilityPrefix + (this.menuVisibility === 'hidden' ? 'visible' : 'hidden')
    )
    this.renderer.addClass(document.querySelector('app-root'), this.menuVisibilityPrefix + scheme)
  }

  currentActive() {
    return this.menuVisibility
  }
}
