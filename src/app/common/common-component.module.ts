import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PrivateFooterComponent } from './private-footer/private-footer.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';



@NgModule({
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    PrivateHeaderComponent,
    PrivateFooterComponent,
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent
  ],
  entryComponents: [
    PublicHeaderComponent,
    PublicFooterComponent,
    PrivateHeaderComponent,
    PrivateFooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentModule { }
