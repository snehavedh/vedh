import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastercreationRoutingModule } from './mastercreation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MastercreationComponent } from './mastercreation.component';


@NgModule({
  declarations: [MastercreationComponent],
  imports: [
    CommonModule,
    MastercreationRoutingModule,
    SharedModule
  ]
})
export class MastercreationModule { }
