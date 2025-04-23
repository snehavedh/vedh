import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksheetComponent } from './worksheet.component';

const routes: Routes = [
  {path:'',component:WorksheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksheetRoutingModule { }
