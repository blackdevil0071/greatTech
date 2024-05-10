import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerTableComponent } from './dealer-table.component';

describe('DealerTableComponent', () => {
  let component: DealerTableComponent;
  let fixture: ComponentFixture<DealerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerTableComponent]
    });
    fixture = TestBed.createComponent(DealerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
