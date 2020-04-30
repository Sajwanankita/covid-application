import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListPrecautionComponent } from './list-precaution/list-precaution.component';

const RULES_CONF_ROUTE: Routes = [
    {
        path: '',
        component: ListPrecautionComponent
    },
];

@NgModule({
    imports: [RouterModule
        .forChild(RULES_CONF_ROUTE)],
    exports: [RouterModule]
})
export class PrecautionsRoutingModule { }
