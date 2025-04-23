import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmsRoutingModule } from './hrms-routing.module';
import { UnfreezeDatesComponent } from '../unfreeze-dates/unfreeze-dates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexiPolicyComponent } from '../flexi-policy/flexi-policy.component';
import { HrmsComponent } from './hrms.component';
import { SaturdayPolicyComponent } from '../saturday-policy/saturday-policy.component';
import { BulkUploadComponent } from 'src/app/bulk-upload/bulk-upload.component';
import { AssessmentExtendedReportComponent } from '../assessment-extended-report/assessment-extended-report.component';
import { AssessmentPermanentReportComponent } from '../assessment-permanent-report/assessment-permanent-report.component';
import { AssessmentProcessReportComponent } from '../assessment-process-report/assessment-process-report.component';
import { ProcessOfAssessmentComponent } from '../process-of-assessment/process-of-assessment.component';
import { ProfileRequestsComponent } from '../profile-requests/profile-requests.component';
import { ReviewLetterComponent } from '../review-letter/review-letter.component';
import { HikeReviewLetterComponent } from '../hike-review-letter/hike-review-letter.component';
import { PayslipsuploadsComponent } from '../payslipsuploads/payslipsuploads.component';
import { PromotionLetterComponent } from 'src/app/promotion-letter/promotion-letter.component';
import { CommnctnAddrssComponent } from '../commnctn-addrss/commnctn-addrss.component';
import { PermntAddrssComponent } from '../permnt-addrss/permnt-addrss.component';
import { IceAddressComponent } from '../ice-address/ice-address.component';
import { BankAddrssComponent } from '../bank-addrss/bank-addrss.component';
import { PanReqstsComponent } from '../pan-reqsts/pan-reqsts.component';
import { BusinessUnitAttendanceComponent } from '../business-unit-attendance/business-unit-attendance.component';
import { AttendanceLogsComponent } from '../attendance-logs/attendance-logs.component';
import { AttendanceReaderComponent } from '../attendance-reader/attendance-reader.component';
import { LeavequotaComponent } from 'src/app/leavequota/leavequota.component';


@NgModule({
  declarations: [
    UnfreezeDatesComponent,
    FlexiPolicyComponent,
    HrmsComponent,
    SaturdayPolicyComponent,
    BulkUploadComponent,
    AssessmentExtendedReportComponent,
    AssessmentPermanentReportComponent,
    AssessmentProcessReportComponent,
    ProcessOfAssessmentComponent,
    ProfileRequestsComponent,
    ReviewLetterComponent,
    HikeReviewLetterComponent,
    PayslipsuploadsComponent,
    PromotionLetterComponent,
    CommnctnAddrssComponent,
    PermntAddrssComponent,
    IceAddressComponent,
    BankAddrssComponent,
    PanReqstsComponent,
    BusinessUnitAttendanceComponent,
    AttendanceLogsComponent,
    AttendanceReaderComponent,
    LeavequotaComponent,
  ],
  imports: [
    CommonModule,
    HrmsRoutingModule,
    SharedModule
  ]
})
export class HrmsModule { }
