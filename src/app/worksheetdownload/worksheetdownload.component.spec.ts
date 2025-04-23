import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetdownloadComponent } from './worksheetdownload.component';

describe('WorksheetdownloadComponent', () => {
  let component: WorksheetdownloadComponent;
  let fixture: ComponentFixture<WorksheetdownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetdownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
