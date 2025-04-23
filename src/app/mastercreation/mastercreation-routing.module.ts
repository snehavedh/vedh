import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastercreationComponent } from './mastercreation.component';

const routes: Routes = [
   {
    path: '',
    component: MastercreationComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'create-university' }, 
      { path: 'create-university', component: MastercreationComponent },
      { path: 'create-department', component: MastercreationComponent },
      { path: 'assign-department', component: MastercreationComponent },
      { path: 'create-designation', component: MastercreationComponent },
      { path: 'assign-designation', component: MastercreationComponent },
      { path: 'create-qualification', component: MastercreationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastercreationRoutingModule { }
