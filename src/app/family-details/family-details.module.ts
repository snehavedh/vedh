import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyDetailsRoutingModule } from './family-details-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FamilyDetailsComponent } from './family-details.component';


@NgModule({
  declarations: [FamilyDetailsComponent],
  imports: [
    CommonModule,
    FamilyDetailsRoutingModule,
    SharedModule
  ]
})
export class FamilyDetailsModule { }
