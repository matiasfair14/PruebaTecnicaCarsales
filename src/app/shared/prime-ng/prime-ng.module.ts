import { NgModule } from '@angular/core';
// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';import { CalendarModule } from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import {MultiSelectModule} from 'primeng/multiselect';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';

import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';

@NgModule({
  exports: [
    DialogModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    ToolbarModule,
    InputTextModule,
    RippleModule,
    CardModule,
    TooltipModule,
    ToastModule,
    CheckboxModule,
    ConfirmDialogModule,
    MenubarModule,
    TabMenuModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    ChartModule,
    MultiSelectModule,
    SliderModule,
    ContextMenuModule,
    ProgressBarModule,
    SidebarModule,
    PanelModule,
    MenuModule,
  ],
})
export class PrimeNgModule {}
