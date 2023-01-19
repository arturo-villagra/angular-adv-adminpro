import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefoud',
  templateUrl: './nopagefoud.component.html',
  styleUrls:['./nopageFound.component.css']
})
export class NopagefoudComponent  {

 year = new Date().getFullYear();
}
