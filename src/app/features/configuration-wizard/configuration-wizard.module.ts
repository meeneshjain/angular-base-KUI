import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationWizardRoutingModule } from './configuration-wizard-routing.module';
import { CwViewComponent } from './cw-view/cw-view.component';
import { CwOperationCustomerComponent } from './cw-operation-customer/cw-operation-customer.component';
import { CwMbomConfigureProductComponent } from './cw-mbom-configure-product/cw-mbom-configure-product.component';
import { CwVerifyAcceptFinalComponent } from './cw-verify-accept-final/cw-verify-accept-final.component';
import { CwViewOldComponent } from './cw-view-old/cw-view.component';
import { SharedModules } from 'src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PanelBarModule } from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [CwViewComponent, CwOperationCustomerComponent, CwMbomConfigureProductComponent, CwVerifyAcceptFinalComponent, CwViewOldComponent],
  imports: [
    CommonModule,
    ConfigurationWizardRoutingModule,
    LayoutModule,
    PanelBarModule,
    SharedModules    
  ],
  // entryComponents: [CwViewComponent]
  entryComponents: [CwViewOldComponent]
})
export class ConfigurationWizardModule { }
