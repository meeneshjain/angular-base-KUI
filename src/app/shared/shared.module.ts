import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { CustomLayoutModule } from '../@layout/customLayout.module';
import { DatePickerModule, DateRangeModule, DateInputModule } from '@progress/kendo-angular-dateinputs';
import { LookupComponent } from './lookup/lookup.component';
import { CustomDialogsComponent } from './custom-dialogs/custom-dialogs.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TreeViewComponent } from './TreeView/tree.view';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ToFixedPipe } from 'src/app/core/pipe/to-fixed.pipe';
import { PreferencesComponent } from '../features/preferences/preferences.component';

@NgModule({
  declarations: [
  LookupComponent,
  TreeViewComponent,
  CustomDialogsComponent,
  ToFixedPipe,
  PreferencesComponent
],
  imports: [
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    DialogsModule,
    GridModule,
    ExcelModule,    
    CustomLayoutModule,
    NotificationModule,
    DatePickerModule,
    DateRangeModule,
    DateInputModule,
    DropDownsModule,
    TooltipModule
  ],
  exports: [
    FormsModule, FlexLayoutModule, NotificationModule, ExcelModule, GridModule, CommonModule, CustomLayoutModule, DialogsModule, DatePickerModule, DateInputModule, DateRangeModule, LookupComponent, CustomDialogsComponent,DropDownsModule, TooltipModule, TreeViewComponent, ToFixedPipe],
  providers: [LookupComponent],
  bootstrap: []
})
export class SharedModules { }
