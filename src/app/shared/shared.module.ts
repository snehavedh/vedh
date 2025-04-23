import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { NavComponent } from '../nav/nav.component';
import { ErrorComponent } from '../components/error/error.component';
import { FooterComponent } from '../footer/footer.component';

// Pipes
import { DateSuffixPipe } from '../pipes/date-suffix.pipe';
import { KeysPipe } from '../pipes/keys.pipe';
import { SafePipe } from '../pipes/safe.pipe';
import { NoCommaPipe } from '../pipes/no-comma.pipe';
import { MomentDatePipe } from '../pipes/moment-date.pipe';

// Third-party Modules
import { ChartsModule } from 'ng2-charts';
import { OwlModule } from 'ngx-owl-carousel';
import { TooltipModule } from 'ng2-tooltip-directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { RouterModule } from '@angular/router';
import { NumbersOnlyDirective } from '../directives/numbers-only.directive';
import { TrackCapslockDirective } from '../directives/track-capslock.directive';
import { NoDoubleClickBtnDirective } from '../directives/no-double-click-btn.directive';
import { DebounceClickDirective } from '../directives/debounce-click.directive';
import { BlockCopyPasteDirective } from '../directives/block-copy-paste.directive';
import { RestrictWhiteSpaceDirective } from '../directives/restrict-white-space.directive';
import { NoRightClickDirective } from '../directives/no-right-click.directive';

@NgModule({
  declarations: [
    NavComponent,
    ErrorComponent,
    FooterComponent,
    DateSuffixPipe,
    KeysPipe,
    SafePipe,
    NoCommaPipe,
    MomentDatePipe,
    NumbersOnlyDirective,
    TrackCapslockDirective,
    NoDoubleClickBtnDirective,
    DebounceClickDirective,
    BlockCopyPasteDirective,
    RestrictWhiteSpaceDirective,
    NoRightClickDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ChartsModule,
    OwlModule,
    TooltipModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    
  ],
  exports: [
    NumbersOnlyDirective,
    TrackCapslockDirective,
    NoDoubleClickBtnDirective,
    DebounceClickDirective,
    BlockCopyPasteDirective,
    RestrictWhiteSpaceDirective,
    NoRightClickDirective,
    NavComponent,
    ErrorComponent,
    FooterComponent,
    DateSuffixPipe,
    KeysPipe,
    SafePipe,
    NoCommaPipe,
    MomentDatePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    OwlModule,
    TooltipModule,
    Ng2SearchPipeModule,
    BsDatepickerModule,
    TimepickerModule,
  ]
})
export class SharedModule { }


