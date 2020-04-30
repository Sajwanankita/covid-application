import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {
  MatCardModule,
} from '@angular/material/card';
import {
  MatInputModule,

} from '@angular/material/input';
import {
  MatButtonModule,
} from '@angular/material/button';
import {
  MatTableModule,
} from '@angular/material/table';
import {
  MatDialogModule
} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
];


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    MatToolbarModule,
    AccordionModule,
    CardModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    DialogModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatToolbarModule,
    ButtonModule,
    HeaderComponent,
    PanelModule,
    AccordionModule,
    TableModule,
    CardModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    DialogModule,
    MatDialogModule,
    RouterModule
  ]
})
export class SharedModule { }
