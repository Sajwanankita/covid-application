import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListPrecautionComponent } from './list-precaution/list-precaution.component';
import { PrecautionsRoutingModule } from './precaution-routing.module';

@NgModule({
  declarations: [ListPrecautionComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrecautionsRoutingModule

  ]
})
export class PrecautionsModule { }
