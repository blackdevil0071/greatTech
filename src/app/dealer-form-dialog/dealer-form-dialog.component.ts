import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealer-form-dialog',
  templateUrl: './dealer-form-dialog.component.html',
  styleUrls: ['./dealer-form-dialog.component.css']
})
export class DealerFormDialogComponent {
  formData: any = {};

  constructor(
    private dealerService: DealerService,
    public dialogRef: MatDialogRef<DealerFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // If data is provided, it means we're editing an existing dealer
    if (data) {
      this.formData = { ...data };
    }
  }

  submitForm(): void {
    if (this.formData.id) {
      // Update existing dealer
      this.dealerService.updateDealer(this.formData.id, this.formData)
        .subscribe(
          () => {
            console.log('Dealer updated successfully');
            this.dialogRef.close();
          },
          error => {
            console.error('Error updating dealer:', error);
            // Handle error
          }
        );
    } else {
      // Create new dealer
      this.dealerService.createDealer(this.formData)
        .subscribe(
          () => {
            console.log('Dealer created successfully');
            this.dialogRef.close();
          },
          error => {
            console.error('Error creating dealer:', error);
            // Handle error
          }
        );
    }
  }
}
