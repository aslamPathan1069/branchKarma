import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigSettings {
  _lang: any;
  constructor() {
    if (localStorage.getItem('lang')) {
      this._lang = localStorage.getItem('lang');
    } else {
      this._lang = 'en';
    }
  }

  setLang(lang?: any) {
    localStorage.setItem('lang', lang);
    this._lang = lang;
  }
  getLang() {
    let wl = localStorage;
    if (wl == null || wl == undefined) {
      return 'en';
    } else {
      let lang = wl.getItem('lang');
      return lang as string;
    }
  }
}
