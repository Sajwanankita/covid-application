import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
];


@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
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
    MatTabsModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
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
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    DialogModule,
    MatDialogModule,
    RouterModule,
    ToastrModule
  ]
})
export class SharedModule { }
