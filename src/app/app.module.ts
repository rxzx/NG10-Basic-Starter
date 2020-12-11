import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { ApiModule } from './helpers/api.module';
import { HttpService } from './services/http.service';
import { CommonComponentModule } from './common/common-component.module';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ApiModule.forRoot('https://www.autorod.com/api'),
    CommonComponentModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
