import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  private renderer: Renderer2;
  private colorScheme: string;
  // Define prefix for clearer and more readable class names in scss files
  private colorSchemePrefix = 'color-scheme-';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // Detect if prefers-color-scheme is supported
  _detectPrefersColorScheme() {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
    } else {
      this.colorScheme = 'dark';
    }
  }

  // Save prefers-color-scheme to localStorage
  _setColorScheme(scheme) {
    this.colorScheme = scheme;
    localStorage.setItem('prefers-color', scheme);
  }

  // Check if any prefers-color-scheme is stored in localStorage
  _getColorScheme() {
    if (localStorage.getItem('prefers-color')) {
      this.colorScheme = localStorage.getItem('prefers-color');
    } else {
      this._detectPrefersColorScheme();
    }
  }

  load() {
    this._getColorScheme();
    this.renderer.addClass(
      document.querySelector('app-root'),
      this.colorSchemePrefix + this.colorScheme
    );
  }

  update(scheme) {
    this._setColorScheme(scheme);
    this.renderer.removeClass(
      document.querySelector('app-root'),
      this.colorSchemePrefix + (this.colorScheme === 'dark' ? 'light' : 'dark')
    );
    this.renderer.addClass(
      document.querySelector('app-root'),
      this.colorSchemePrefix + scheme
    );
  }

  currentActive() {
    return this.colorScheme;
  }
}
