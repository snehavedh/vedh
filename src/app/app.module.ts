import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DatePipe } from '@angular/common'; 
import { BirthdaysComponent } from './components/birthdays/birthdays.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';
import { LeaveSummaryComponent } from './components/leave-summary/leave-summary.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';
import { AttendanceApprovalsComponent } from './manager/attendance-approvals/attendance-approvals.component';
import { NgIdleService } from './services/ng-idle-service.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LeaveApprovalsComponent } from './manager/leave-approvals/leave-approvals.component';
import { ManagerApprovalsComponent } from './manager/manager-approvals/manager-approvals.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DeptAttendanceComponent } from './manager/dept-attendance/dept-attendance.component';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AttendanceReportAssamComponent } from './components/attendance-report-assam/attendance-report-assam.component';
import { FooterComponent } from './footer/footer.component';

import { NgOtpInputModule } from 'ng-otp-input';

import { CtcComponent } from './components/ctc/ctc.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MngrAssesmentFormComponent } from './manager/mngr-assesment-form/mngr-assesment-form.component';
import { AssmntFillFormComponent } from './manager/assmnt-fill-form/assmnt-fill-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { KeysPipe } from './pipes/keys.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { NoCommaPipe } from './pipes/no-comma.pipe';
import { VaccineRegComponent } from './components/vaccine-reg/vaccine-reg.component';
import { MomentDatePipe } from './pipes/moment-date.pipe';
import { InOutTimeBarComponent } from './in-out-time-bar/in-out-time-bar.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { HomepageComponent } from './homepage/homepage.component';
import { HRpoliciesComponent } from './hrpolicies/hrpolicies.component';
import { AnnouncementsComponent } from './HR/announcements/announcements.component';
import { EmployeeLetterComponent } from './employee-letter/employee-letter.component';

import { EmployeeHikeLetterComponent } from './employee-hike-letter/employee-hike-letter.component';

import { IdcardComponent } from './idcard/idcard.component';
import { UtilitiesComponent } from './utilities/utilities.component';

import { AssethistoryComponent } from './assethistory/assethistory.component';
import { AssetDataComponent } from './assertdata/asset-data.component';
import { AssetmainComponent } from './assetmain/assetmain.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AssetRequestFormComponent } from './components/asset-request-form/asset-request-form.component';
import { AssetItAdminComponent } from './components/asset-it-admin/asset-it-admin.component';
import { QRManagementComponent } from './qrmanagement/qrmanagement.component';
import { ConfirmationLetterComponent } from './components/confirmation-letter/confirmation-letter.component';
import { SharedModule } from './shared/shared.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeAssertModuleComponent } from './employee-assert-module/employee-assert-module.component';
import { WorksheetdownloadComponent } from './worksheetdownload/worksheetdownload.component';
 
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    ProgressBarComponent, 
    BirthdaysComponent,
    DepartmentInfoComponent,
    LeaveSummaryComponent,
    AttendanceReportComponent,
    AttendanceApprovalsComponent, 
    LeaveApprovalsComponent,
    ManagerApprovalsComponent,
    DeptAttendanceComponent,
    AttendanceReportAssamComponent,  
    CtcComponent, ApplyLeaveComponent, 
    MngrAssesmentFormComponent, 
    AssmntFillFormComponent, ProfilePageComponent,  
     VaccineRegComponent, 
     InOutTimeBarComponent, EmployeeAssertModuleComponent,
     HomepageComponent, HRpoliciesComponent, AnnouncementsComponent, EmployeeLetterComponent, EmployeeHikeLetterComponent, IdcardComponent, UtilitiesComponent, AssethistoryComponent, AssetDataComponent, AssetmainComponent, SidebarComponent, AssetRequestFormComponent, AssetItAdminComponent, QRManagementComponent, ConfirmationLetterComponent, AttendanceComponent, WorksheetdownloadComponent 
  ],
  imports: [   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}), 
    BrowserAnimationsModule,
    AutocompleteLibModule,
    ImageCropperModule,
    NgOtpInputModule,
    SharedModule
  ],
  providers: [DatePipe, NgIdleService,{provide: LocationStrategy, useClass: HashLocationStrategy}, NgxImageCompressService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 