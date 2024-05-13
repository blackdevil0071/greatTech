// dealer-table.component.ts
import { Component, OnInit } from '@angular/core';
import { DealerService } from '../dealer.service';
import { MatDialog } from '@angular/material/dialog';
import { DealerFormDialogComponent } from '../dealer-form-dialog/dealer-form-dialog.component';

@Component({
  selector: 'app-dealer-table',
  templateUrl: './dealer-table.component.html',
  styleUrls: ['./dealer-table.component.css']
})
export class DealerTableComponent implements OnInit {
  dealers: any[] = [];
  message: string = '';
  displayedColumns: string[] = ['id', 'name', 'contactInformation', 'companyName', 'actions'];

  constructor(private dealerService: DealerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDealers();
  }

  loadDealers(): void {
    this.dealerService.getDealers().subscribe(
      (data: any[]) => {
        this.dealers = data;
      },
      (error: any) => {
        console.error('Error fetching dealers:', error);
      }
    );
  }

  editDealer(dealer: any): void {
    const dialogRef = this.dialog.open(DealerFormDialogComponent, {
      width: '400px',
      data: { dealer, isEditing: true } // Pass the dealer data and indicate edit mode
    });

    dialogRef.componentInstance.messageEmitter.subscribe((message: string) => {
      this.message = message;
      setTimeout(() => {
        this.message = ''; // Hide message after 3 seconds
      }, 3000);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
      if (result === true) {
        this.loadDealers(); // Reload dealers after editing
      }
    });
  }

  deleteDealer(dealerId: number): void {
    if (confirm('Are you sure you want to delete this dealer?')) {
      this.dealerService.deleteDealer(dealerId).subscribe(
        () => {
          console.log('Dealer deleted successfully');
          this.loadDealers(); // Reload dealers after deletion
        },
        error => {
          console.error('Error deleting dealer:', error);
          // Handle error
        }
      );
    }
  }

  openCreateDealerDialog(): void {
    const dialogRef = this.dialog.open(DealerFormDialogComponent, {
      width: '400px'
    });

    dialogRef.componentInstance.messageEmitter.subscribe((message: string) => {
      this.message = message;
      setTimeout(() => {
        this.message = ''; // Hide message after 3 seconds
      }, 3000);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
      if (result) {
        this.loadDealers(); // Reload dealers after creating
      }
    });
  }
}
