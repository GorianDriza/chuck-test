import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

const classesToUse = [
  MatProgressBarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTreeModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  DragDropModule
];

@NgModule({
  imports: classesToUse,
  declarations: [],
  exports: classesToUse
})
export class MaterialModule {
}
