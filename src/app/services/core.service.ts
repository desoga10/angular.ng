import { Injectable, signal, computed } from '@angular/core';
import { AppSettings, defaults as defaultSettings } from '../config';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private htmlElement!: HTMLHtmlElement;

  private optionsSignal = signal<AppSettings>(defaultSettings);

  readonly options = computed(() => this.optionsSignal());

  constructor() {
    this.htmlElement = document.querySelector('html')!;

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const newSettings: AppSettings = {
      ...defaultSettings,
      theme: savedTheme ?? defaultSettings.theme,
    };

    this.applyThemeClass(newSettings.theme);
    this.optionsSignal.set(newSettings);
  }

  getOptions(): AppSettings {
    return this.optionsSignal();
  }

  optionsSignal$ = this.optionsSignal.asReadonly();

  setOptions(options: Partial<AppSettings>): void {
    const updated = { ...this.optionsSignal(), ...options };
    this.optionsSignal.set(updated);

    if (options.theme) {
      localStorage.setItem('theme', options.theme);
      this.applyThemeClass(options.theme);
    }
  }

  toggleTheme(): void {
    const current = this.optionsSignal();
    const newTheme = current.theme === 'dark' ? 'light' : 'dark';
    this.setOptions({ theme: newTheme });
  }

  private applyThemeClass(theme: string): void {
    this.htmlElement.classList.toggle('dark-theme', theme === 'dark');
    this.htmlElement.classList.toggle('light-theme', theme === 'light');
  }

  getLanguage(): string {
    return this.optionsSignal().language;
  }

  setLanguage(lang: string): void {
    this.setOptions({ language: lang });
  }
}
