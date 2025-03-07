import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppSettings, defaults } from '../config';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  get notify(): Observable<Record<string, any>> {
    return this.notify$.asObservable();
  }

  private htmlElement!: HTMLHtmlElement;

  private notify$ = new BehaviorSubject<Record<string, any>>({});

  constructor() {
    this.htmlElement = document.querySelector('html')!;
  }

  getOptions() {
    return this.options;
  }

  setOptions(options: AppSettings) {
    this.options = Object.assign(defaults, options);
    this.notify$.next(this.options);
  }

  toggleTheme(): void {
    this.options.theme = this.options.theme === 'dark' ? 'light' : 'dark';
    if (this.options.theme === 'dark') {
      this.htmlElement.classList.add('dark-theme');
      this.htmlElement.classList.remove('light-theme');
    } else {
      this.htmlElement.classList.remove('dark-theme');
      this.htmlElement.classList.add('light-theme');
    }
    this.notify$.next(this.options);
  }

  private options = defaults;

  getLanguage() {
    return this.options.language;
  }

  setLanguage(lang: string) {
    this.options.language = lang;
    this.notify$.next({ lang });
  }
}
