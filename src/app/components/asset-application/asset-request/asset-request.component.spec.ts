import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRequestComponent } from './asset-request.component';

describe('AssetRequestComponent', () => {
  let component: AssetRequestComponent;
  let fixture: ComponentFixture<AssetRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
