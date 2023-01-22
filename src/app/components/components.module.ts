import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incrementador2Component } from './incrementador2/incrementador2.component';

import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    Incrementador2Component,
    DonaComponent
  ],
  exports: [
    Incrementador2Component,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
