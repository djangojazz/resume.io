import { NgModule } from '@angular/core';

// Material modules
import { 
  MatButtonModule, 
  MatCardModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, 
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule, 
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class MaterialModule { }