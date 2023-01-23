import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
})
export class AccountSettingsComponent implements OnInit{

  public linkTheme=document.querySelector('#tema');
  public links :NodeListOf<Element>=document.querySelectorAll('.selector');


  constructor(private settingsService: SettingsService){}

  ngOnInit(): void {
    this.links= document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

    changeTheme(tema: string) {

     this.settingsService.changeTheme(tema);
      this.checkCurrentTheme();
    }

    checkCurrentTheme(){

      this.links.forEach( elem => {

      
        elem.classList.remove('working');
        const btnTheme =elem.getAttribute('data-theme');

        const btnThemUrl=`./assets/css/colors/${ btnTheme }.css`

        const currentTheme =this.linkTheme?.getAttribute('href');
        if(btnThemUrl===currentTheme)
        {
          elem.classList.add('working');

        }

      })
    }

}
