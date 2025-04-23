import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksheetRoutingModule } from './worksheet-routing.module';
import { WorksheetComponent } from './worksheet.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [WorksheetComponent],
  imports: [
    CommonModule,
    WorksheetRoutingModule,
    SharedModule
  ]
})
export class WorksheetModule { }
