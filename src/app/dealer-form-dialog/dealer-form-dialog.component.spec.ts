import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerFormDialogComponent } from './dealer-form-dialog.component';

describe('DealerFormDialogComponent', () => {
  let component: DealerFormDialogComponent;
  let fixture: ComponentFixture<DealerFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerFormDialogComponent]
    });
    fixture = TestBed.createComponent(DealerFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
