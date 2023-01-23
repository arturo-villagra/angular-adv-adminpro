import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval,take, map , filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs:Subscription;

  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe();
  }
constructor(){

  // this.retornaObservable().pipe(
  //   retry(1)
  // ).subscribe(
  //   valor =>console.log('Subs:',valor),
  //   error =>console.warn('Error',error),
  //   () =>console.info('Obs terminado')
  // );
   this.intervalSubs=  this.retornaIntervalo()
    .subscribe(console.log )
} 

    retornaIntervalo(){
        return  interval(500)
                      .pipe(
                        map(valor=>valor+1),
                        filter(valor=>(valor % 2 === 0)? true:false),
                        // take(4),
                      );
 
    }

    retornaObservable(){
      
      let i =0;
    return  new Observable<number>( observer => {
        
        const intervalo= setInterval(()=>{
        i++;
        observer.next(i);

        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }

        
        // if(i===2){
        //   console.log('i=2..error')
        //   observer.error('i llego al valor 2')
        // }

        },1000)
      });


    }
}
