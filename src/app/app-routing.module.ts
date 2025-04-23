import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SettingsComponent } from './settings/settings.component'; 
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';
import { LeaveSummaryComponent } from './components/leave-summary/leave-summary.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';
import { ErrorComponent } from './components/error/error.component';
import { AttendanceApprovalsComponent } from './manager/attendance-approvals/attendance-approvals.component'; 
import { LeaveApprovalsComponent } from './manager/leave-approvals/leave-approvals.component';
import { ManagerApprovalsComponent } from './manager/manager-approvals/manager-approvals.component';
import { DeptAttendanceComponent } from './manager/dept-attendance/dept-attendance.component';

import { HrmsComponent } from './HR/hrms/hrms.component';
import { AttendanceReportAssamComponent } from './components/attendance-report-assam/attendance-report-assam.component';
import { CtcComponent } from './components/ctc/ctc.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { MngrAssesmentFormComponent } from './manager/mngr-assesment-form/mngr-assesment-form.component';
import { AssmntFillFormComponent } from './manager/assmnt-fill-form/assmnt-fill-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

import { VaccineRegComponent } from './components/vaccine-reg/vaccine-reg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HRpoliciesComponent } from './hrpolicies/hrpolicies.component';
import { AnnouncementsComponent } from './HR/announcements/announcements.component';

import { EmployeeLetterComponent } from './employee-letter/employee-letter.component';
import { EmployeeHikeLetterComponent } from './employee-hike-letter/employee-hike-letter.component';
import { IdcardComponent } from './idcard/idcard.component';
import { UtilitiesComponent } from './utilities/utilities.component';


import { AssetmainComponent } from './assetmain/assetmain.component';
import { AssetDataComponent } from './assertdata/asset-data.component';
import { AssethistoryComponent } from './assethistory/assethistory.component';
import {AssetRequestFormComponent} from 'src/app/components/asset-request-form/asset-request-form.component';
import {AssetItAdminComponent} from 'src/app/components/asset-it-admin/asset-it-admin.component';
import { QRManagementComponent } from './qrmanagement/qrmanagement.component';
import { ConfirmationLetterComponent } from './components/confirmation-letter/confirmation-letter.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeAssertModuleComponent } from './employee-assert-module/employee-assert-module.component';
import { WorksheetdownloadComponent } from './worksheetdownload/worksheetdownload.component';


   
const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent }, 
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]  },
  { path: 'home', component: HomepageComponent,canActivate: [AuthGuard]  },

  { path: 'settings', component: SettingsComponent,canActivate: [AuthGuard]  }, 
  { path: 'profilePage', component: ProfilePageComponent,canActivate: [AuthGuard]  }, 

  
  { path: 'birthdays', component: BirthdaysComponent,canActivate: [AuthGuard] },
  { path: 'deptInfo', component: DepartmentInfoComponent,canActivate: [AuthGuard] },
  { path: 'leaveSummary', component: LeaveSummaryComponent,canActivate: [AuthGuard] },
  { path: 'attendanceReport', component: AttendanceReportComponent,canActivate: [AuthGuard]},
  { path: 'attendanceReportAssam', component: AttendanceReportAssamComponent,canActivate: [AuthGuard]}, 
  { path: 'applyLeave', component: ApplyLeaveComponent,canActivate: [AuthGuard]},

  { path: 'ctcInfo', component: CtcComponent,canActivate: [AuthGuard]},
  { path: 'vaccination', component: VaccineRegComponent,canActivate: [AuthGuard]},
  { path: 'HR-Policies', component: HRpoliciesComponent,canActivate: [AuthGuard]},

  { path: 'employeeletter', component: EmployeeLetterComponent,canActivate: [AuthGuard]},

  { path: 'employeehikeletter', component: EmployeeHikeLetterComponent,canActivate: [AuthGuard]},
  


  // HRMS 
 { 
    path: 'hrms', 
    loadChildren: () => import('./HR/hrms/hrms.module').then(m => m.HrmsModule), 
    canActivate: [AuthGuard]  
  },
 { 
    path: 'familydetails', 
    loadChildren: () => import('./family-details/family-details.module').then(m => m.FamilyDetailsModule), 
    canActivate: [AuthGuard]  
  },
  { path: 'postAnnouncement', component: AnnouncementsComponent,canActivate: [AuthGuard]},
      

  // Manager 
  { path: 'managerApprovals', component: ManagerApprovalsComponent,canActivate: [AuthGuard]},    
  { path: 'attendanceApprovals', component: AttendanceApprovalsComponent,canActivate: [AuthGuard]},  
  { path: 'leaveApprovals', component: LeaveApprovalsComponent,canActivate: [AuthGuard]},
  { path: 'deptAttendance/:id', component: DeptAttendanceComponent,canActivate: [AuthGuard]},
  { path: 'assesmentForm', component: MngrAssesmentFormComponent,canActivate: [AuthGuard]},
  { path: 'assesmentFillForm', component: AssmntFillFormComponent,canActivate: [AuthGuard]},
  { path: 'errorPage', component: ErrorComponent},
    
    {
    path: 'mastercreation',
    loadChildren: () =>
      import('./mastercreation/mastercreation.module').then(
        (m) => m.MastercreationModule
      ),
  },
{ path: 'idcard', component: IdcardComponent, canActivate: [AuthGuard] },
{path:'utilities',component:UtilitiesComponent},
{path:'worksheet',loadChildren:()=>import('./worksheet/worksheet.module').then(m=>m.WorksheetModule),canActivate: [AuthGuard] },
//  {path:'employeeassets',loadChildren:()=>import('./employee-assert-module/employee-assert-module.module').then(m=>m.EmployeeAssertModuleModule)},
{path: 'assetamain',component:AssetmainComponent},
  { path: 'asset', component: AssetDataComponent },
  { path: 'assethistory', component: AssethistoryComponent },
  {path:'employeeasset',component:EmployeeAssertModuleComponent},
  { path: 'AssetAllocationRequest', component: AssetRequestFormComponent,canActivate: [AuthGuard] },
  { path: 'AssetITAdmin', component: AssetItAdminComponent,canActivate: [AuthGuard] },
  
  { path: 'qr-management', component: QRManagementComponent,canActivate: [AuthGuard] },
  { path: 'confirmationletter', component: ConfirmationLetterComponent,canActivate: [AuthGuard] },
  {path:'attendance',component:AttendanceComponent,canActivate:[AuthGuard]},
    {path:'worksheetdownload',component:WorksheetdownloadComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
