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
      data: dealer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
      if (result) {
        this.loadDealers(); // Reload dealers after editing
      }
    });
  }

  openCreateDealerDialog(): void {
    const dialogRef = this.dialog.open(DealerFormDialogComponent, {
      width: '400px'
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
