import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-worksheetdownload',
  templateUrl: './worksheetdownload.component.html',
  styleUrls: ['./worksheetdownload.component.sass']
})
export class WorksheetdownloadComponent implements OnInit {
  loggedUser: any = {};
  userData: any;
  myDate: Date = new Date();
  currentYear: any;
  years: any;
  payPeriodDate:any;
  isYearWise: boolean = true;
  worksheetForm: FormGroup;
  isUploading: boolean = false;
  currentDate: any;
  startOfMonth: any;
  firstDateOfMonth:any;
  colorTheme = 'theme-dark-blue';  

  months = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' }
  ];
  currentMonth: any;

  constructor(private service: AuthService, private fb: FormBuilder, private datePipe: DatePipe) { }

ngOnInit(): void {
  this.loggedUser = decodeURIComponent(window.atob(localStorage.getItem('userData')!));
  this.userData = JSON.parse(this.loggedUser);
  this.currentYear = new Date().getFullYear();
  this.years = this.generateYears();
  this.currentMonth = new Date().getMonth() + 1;
  this.currentDate = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
  this.firstDateOfMonth = new Date(this.currentYear, this.currentMonth - 1, 1).toISOString().split('T')[0]; // 'YYYY-MM-DD'
  this.startOfMonth = new Date(this.currentYear, this.currentMonth - 1, -1).toISOString().split('T')[0]; // First day of the current month
  
  // Set default values for the form and selected fields
  this.worksheetForm = this.fb.group({
    year: [this.currentYear],
    month: [this.currentMonth],
    fromDate: [this.firstDateOfMonth],
    toDate: [this.currentDate],
  });

  // Default values for getData
  this.selectedMonth = this.currentMonth.toString(); // Default to the current month
  this.selectedYear = this.currentYear.toString();  // Default to the current year
  this.selectedEmpId = this.userData.user.empID; // Default to the logged-in employee ID
  
  // Call getData to fetch and display the data
  this.getData();
}

// getData() {
//   const formData = new FormData();
//   formData.append('month', this.selectedMonth);       
//   formData.append('year', this.selectedYear);        
//   formData.append('employeeId', this.selectedEmpId);  

//   this.service.getWorksheetData(formData).subscribe(res => {
//     this.employeeData = res;
//     console.log('Response:', res);
//   });
// }

  // generateYears(): number[] {
  //   let yearsArray: number[] = [];
  //   for (let year = this.currentYear; year >= this.currentYear - 5; year--) {
  //     yearsArray.push(year);
  //   }
  //   return yearsArray;
  // }
  generateYears(): number[] {
    let yearsArray: number[] = [];
    let currentYear = new Date().getFullYear(); 
    let startYear = 2025; 
    for (let year = startYear; year <= currentYear; year++) {
        yearsArray.push(year);
    }
    return yearsArray;
}




getWorksheetDownload(): void {
  let fromDate = this.worksheetForm.get('fromDate')?.value;
  let toDate = this.worksheetForm.get('toDate')?.value;
  const formData = new FormData();
  if (this.isYearWise) {
    formData.append('employeeid', this.userData.user.empID);
    formData.append('year', this.worksheetForm.value.year);
    formData.append('month', this.worksheetForm.value.month);
    formData.append('formDate', null);
    formData.append('toDate', null);
    this. payPeriodDate = `${ this.worksheetForm.value.year}-${this.worksheetForm.value.month}`;
  } else {
    fromDate = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
    toDate = this.datePipe.transform(toDate, 'yyyy-MM-dd');
    formData.append('employeeid', this.userData.user.empID);
    formData.append('year', '0');
    formData.append('month', '0');
    formData.append('formDate',fromDate);
    formData.append('toDate', toDate);
    //alert(this.worksheetForm.value.fromDate); 
    //alert(this.worksheetForm.value.toDate);  
    this. payPeriodDate = `${fromDate}-${toDate}`;
  }

  this.isUploading = true;
  this.service.getWorksheetDownload(formData).subscribe(
    (res: Blob) => {
      const fileURL = window.URL.createObjectURL(res);
      const link = document.createElement('a');
       link.href = fileURL;
      link.download = `${this.payPeriodDate}_worksheet_report.xlsx`;
      link.click();
      this.isUploading = false;
      window.URL.revokeObjectURL(fileURL);
      Swal.fire({
        title: 'Success!',
        text: 'Successfully Downloaded!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.resetForm();
      //this.worksheetForm.reset();
    },
    (error) => {
      this.isUploading = false;
      if (error.status === 404) {
        Swal.fire({
          title: 'No Data Found',
          text: 'No data found for the given year and month.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else if (error.status === 403) {
        Swal.fire({
          title: 'Access Denied',
          text: 'You do not have permission to access this data.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while downloading the file.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  );
}

  resetForm() {
    this.worksheetForm.reset({
      year:this.currentYear,
      month: this.currentMonth,
      fromDate:this.firstDateOfMonth,
      toDate:this.currentDate
    });
  }

selfDownload(event: Event): void {
  event.preventDefault();
  if (this.isUploading) {
    return;
  }
  let fromDate = this.worksheetForm.get('fromDate')?.value;
  let toDate = this.worksheetForm.get('toDate')?.value;

  const formData = new FormData();
  if (this.isYearWise) {
    formData.append('employeeid', this.userData.user.empID);
    formData.append('year', this.worksheetForm.value.year);
    formData.append('month', this.worksheetForm.value.month);
    formData.append('fromDate', null);
    formData.append('toDate', null);
  } else {
    fromDate = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
    toDate = this.datePipe.transform(toDate, 'yyyy-MM-dd');
    formData.append('employeeid', this.userData.user.empID);
    formData.append('year', '0');
    formData.append('month', '0');
    formData.append('fromDate',fromDate);
    formData.append('toDate', toDate);
   // alert(this.worksheetForm.value.fromDate); 
   // alert(this.worksheetForm.value.toDate);  
  }

  this.isUploading = true; 
  this.service.getSelfDownload(formData).subscribe(
    (res: Blob) => {
      const fileURL = window.URL.createObjectURL(res);
      const link = document.createElement('a');
      link.href = fileURL;
      const employeeid = `${this.userData.user.empID}`;
      link.download = `${employeeid}_worksheet_report.xlsx`;
      link.click();
      this.isUploading = false; 
      window.URL.revokeObjectURL(fileURL);
      Swal.fire({
        title: 'Success!',
        text: 'Successfully Downloaded!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.resetForm();
    },
    (error) => {
      this.isUploading = false; 
      if (error.status === 404) {
        Swal.fire({
          title: 'No Data Found',
          text: 'No data found for the given year and month.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else if (error.status === 403) {
        Swal.fire({
          title: 'Access Denied',
          text: 'You do not have permission to access this data.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while downloading the file.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  );
}
onReportTypeChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  this.resetForm();
  this.isYearWise = selectElement.value === 'yearwise';
  // if (!this.isYearWise) {
  //   this.worksheetForm.get('year')?.reset(); 
  //   this.worksheetForm.get('month')?.reset(); 
  // }
  // else{
  //   this.worksheetForm.get('fromDate')?.reset(); 
  //   this.worksheetForm.get('toDate')?.reset(); 
  // }

}
employeeData: any[] = [];
  selectedMonth: string = '';
  selectedYear: string = '';
  selectedEmpId: string = '';
getData() {
  const formData = new FormData();
  formData.append('month', this.selectedMonth);       
  formData.append('year', this.selectedYear);        
  formData.append('employeeId', this.selectedEmpId);  

  this.service.getWorksheetData(formData).subscribe(res => {
     this.employeeData = res;
    console.log('Response:', res);
  });
}

}
