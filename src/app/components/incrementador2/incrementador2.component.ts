import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';



@Component({
  selector: 'app-incrementador2',
  templateUrl: './incrementador2.component.html',
  styles: [
  ]
})
export class Incrementador2Component implements OnInit{

  ngOnInit() {
    this.btnClass=`btn ${ this.btnClass}`;
  }
  
@Input() progreso: number=50;
@Input() btnClass: string='btn-primary';


@Output() valorSalida : EventEmitter<number> = new EventEmitter();


cambiarValor(valor:number){
  if(this.progreso>=100 && valor>=0 )
  {
    this.valorSalida.emit(100);
    return  this.progreso=100;
  }
  if(this.progreso<=0 && valor<0 )
  {
    
    this.valorSalida.emit(0);
    return  this.progreso=0;
  }


  this.progreso=this.progreso +valor;
  this.valorSalida.emit(this.progreso);
  return;
}

onChange( valor:number ){
  
  if(valor>=100){
    this.progreso=100;
  }else  if(valor<0){
           this.progreso=0;
        }else{
              this.progreso=valor;
              }

  this.valorSalida.emit(valor);

}

}
