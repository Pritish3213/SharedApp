import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
//import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';

@NgModule({
  declarations: [HeaderComponent, ListComponent, FooterComponent],
  imports: [
    NativeScriptCommonModule,
    
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
