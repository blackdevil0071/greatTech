import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerFormDialogComponent } from './dealer-form-dialog/dealer-form-dialog.component';
import { DealerTableComponent } from './dealer-table/dealer-table.component';

const routes: Routes = [
  // Other routes...
  { path: 'dealer-table', component: DealerTableComponent },
  { path: 'dealer-form/:id', component: DealerFormDialogComponent } // Route for dealer form with ID parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
