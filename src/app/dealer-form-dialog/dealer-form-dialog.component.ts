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
  isEditing: boolean = false;
  constructor(
    private dealerService: DealerService,
    public dialogRef: MatDialogRef<DealerFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // If data is provided and is in edit mode
    if (data && data.isEditing) {
      this.formData = { ...data.dealer }; // Set the form data to the dealer data
      this.isEditing = true; // Set the flag to indicate edit mode
    }
  }


  submitForm(): void {
    if (this.isEditing) {
      // Update existing dealer
      this.dealerService.updateDealer(this.formData.id, this.formData)
        .subscribe(
          () => {
            console.log('Dealer updated successfully');
            this.dialogRef.close(true); // Pass true to indicate update
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
            this.dialogRef.close(true); // Pass true to indicate creation
          },
          error => {
            console.error('Error creating dealer:', error);
            // Handle error
          }
        );
    }
  }
}
