import { NgModule } from '@angular/core';

// Material modules
import { 
  MatButtonModule, 
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, 
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule, 
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class MaterialModule { }