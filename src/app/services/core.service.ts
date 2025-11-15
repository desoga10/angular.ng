import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppSettings, defaults as defaultSettings } from '../config';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  get notify(): Observable<Record<string, any>> {
    return this.notify$.asObservable();
  }

  private htmlElement!: HTMLHtmlElement;
  private currentOptions: AppSettings;

  private notify$ = new BehaviorSubject<AppSettings>(defaultSettings);

  constructor() {
    this.htmlElement = document.querySelector('html')!;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    this.currentOptions = {
      ...defaultSettings,
      theme: savedTheme ?? defaultSettings.theme,
    };

    this.applyThemeClass(this.currentOptions.theme);
    this.notify$.next(this.currentOptions);
  }

  getOptions(): AppSettings {
    return this.currentOptions;
  }

  get options$(): Observable<AppSettings> {
    return this.notify$.asObservable();
  }

  setOptions(options: Partial<AppSettings>): void {
    this.currentOptions = { ...this.currentOptions, ...options };
    this.notify$.next(this.currentOptions);

    if (options.theme) {
      localStorage.setItem('theme', options.theme);
      this.applyThemeClass(options.theme);
    }
  }

  toggleTheme(): void {
    const newTheme = this.currentOptions.theme === 'dark' ? 'light' : 'dark';
    this.setOptions({ theme: newTheme });
  }

  private applyThemeClass(theme: string): void {
    this.htmlElement.classList.toggle('dark-theme', theme === 'dark');
    this.htmlElement.classList.toggle('light-theme', theme === 'light');
  }

  getLanguage(): string {
    return this.currentOptions.language;
  }

  setLanguage(lang: string): void {
    this.currentOptions = { ...this.currentOptions, language: lang };
    this.notify$.next(this.currentOptions);
  }
}
