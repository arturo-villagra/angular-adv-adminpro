import { Component } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent {

  ngOnInit(): void {
    this.getUsuarios().then(
      usuarios=>{console.log(usuarios)}
    );
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const promesa= new Promise( (resolve, reject)=>{
    //   if(false){

    //     resolve("Hola mundo");
    //   }else{
    //     reject("Algo salio mal!!!");
    //   }

    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // })
    // .catch(error =>console.log("Error promesa",error));
  
  }

  getUsuarios(){
    const promesa=new Promise( resolve =>{
      fetch('https://reqres.in/api/users')
        .then(resp=> resp.json())
        .then(body => resolve(body.data));
        
    })
      return promesa;
  }
}
