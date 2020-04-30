import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrecautionComponent } from './list-precaution/list-precaution.component';
import { PrecautionsRoutingModule } from './precaution-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [ListPrecautionComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrecautionsRoutingModule
  
  ]
})
export class PrecautionsModule { }
