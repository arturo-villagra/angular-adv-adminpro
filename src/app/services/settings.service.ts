import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private  linkTheme=document.querySelector('#tema');

  constructor() { 
    const url=localStorage.getItem('tema')||'./assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href',url);

  }

  
  changeTheme(tema: string) {
    const url = `./assets/css/colors/${ tema }.css`;
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('tema', url);

  }
}
