import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrmsComponent } from './hrms.component';
import { UnfreezeDatesComponent } from '../unfreeze-dates/unfreeze-dates.component';
import { FlexiPolicyComponent } from '../flexi-policy/flexi-policy.component';
import { AuthGuard } from 'src/app/auth.guard';
import { SaturdayPolicyComponent } from '../saturday-policy/saturday-policy.component';
import { BulkUploadComponent } from 'src/app/bulk-upload/bulk-upload.component';
import { ProcessOfAssessmentComponent } from '../process-of-assessment/process-of-assessment.component';
import { AssessmentProcessReportComponent } from '../assessment-process-report/assessment-process-report.component';
import { AssessmentExtendedReportComponent } from '../assessment-extended-report/assessment-extended-report.component';
import { AssessmentPermanentReportComponent } from '../assessment-permanent-report/assessment-permanent-report.component';
import { ProfileRequestsComponent } from '../profile-requests/profile-requests.component';
import { ReviewLetterComponent } from '../review-letter/review-letter.component';
import { HikeReviewLetterComponent } from '../hike-review-letter/hike-review-letter.component';
import { PromotionLetterComponent } from 'src/app/promotion-letter/promotion-letter.component';
import { PayslipsuploadsComponent } from '../payslipsuploads/payslipsuploads.component';
import { CommnctnAddrssComponent } from '../commnctn-addrss/commnctn-addrss.component';
import { PermntAddrssComponent } from '../permnt-addrss/permnt-addrss.component';
import { IceAddressComponent } from '../ice-address/ice-address.component';
import { BankAddrssComponent } from '../bank-addrss/bank-addrss.component';
import { PanReqstsComponent } from '../pan-reqsts/pan-reqsts.component';
import { BusinessUnitAttendanceComponent } from '../business-unit-attendance/business-unit-attendance.component';
import { AttendanceLogsComponent } from '../attendance-logs/attendance-logs.component';
import { AttendanceApprovalsComponent } from 'src/app/manager/attendance-approvals/attendance-approvals.component';
import { LeavequotaComponent } from 'src/app/leavequota/leavequota.component';

const routes: Routes = [
  {path:'',component:HrmsComponent},
  {path:'unfreezedDates',component:UnfreezeDatesComponent},
  {path:'flexiPolicy',component:FlexiPolicyComponent},
  {path:'bulkUpload', component:BulkUploadComponent},
  {path:'assessmentProcess',component:ProcessOfAssessmentComponent},
  {path:'assessmentProcessReport',component:AssessmentProcessReportComponent},
  {path:'assessmentExtendedReport',component:AssessmentExtendedReportComponent},
  {path:'assessmentPermanentReport',component:AssessmentPermanentReportComponent},
  {path:'profileRequests',component:ProfileRequestsComponent},
  {path:'reviewletter',component:ReviewLetterComponent},
  {path:'hikereviewletter',component:HikeReviewLetterComponent},
  {path:'promotionletter',component:PromotionLetterComponent},
  {path:'Payslipupload',component:PayslipsuploadsComponent},
  {path:'commnctnAddrssReqsts',component:CommnctnAddrssComponent},
  {path:'permntAddrssReqsts',component:PermntAddrssComponent},
  {path:'iceAddressReqsts',component:IceAddressComponent},
  {path:'bankAddrssReqsts',component:BankAddrssComponent},
  {path:'panReqsts',component:PanReqstsComponent},
{path:'saturdayPolicy',component: SaturdayPolicyComponent},
  {path:'buAttendance',component:BusinessUnitAttendanceComponent},
  {path:'attendanceLogs',component:AttendanceLogsComponent},
  {path:'attendanceReader',component:AttendanceApprovalsComponent},
{path:'LeaveQuota',component:LeavequotaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsRoutingModule { }
