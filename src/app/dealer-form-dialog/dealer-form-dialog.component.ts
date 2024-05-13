import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealer-form-dialog',
  templateUrl: './dealer-form-dialog.component.html',
  styleUrls: ['./dealer-form-dialog.component.css']
})
export class DealerFormDialogComponent {
  formData: any = {};
  message: string = '';
  isEditing: boolean = false;

  @Output() messageEmitter: EventEmitter<string> = new EventEmitter<string>();

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
            this.message = 'Dealer updated successfully';
            this.messageEmitter.emit(this.message); // Emit message
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
            this.message = 'Dealer created successfully';
            this.messageEmitter.emit(this.message); // Emit message
          },
          error => {
            console.error('Error creating dealer:', error);
            // Handle error
          }
        );
    }
  }
  
}
