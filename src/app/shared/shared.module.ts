import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './helpers/api.module';
import { HttpService } from './services/http/http.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ApiModule.forRoot('https://www.autorod.com/api'),
  ]
  ,providers:[
    HttpService
  ],
})
export class SharedModule { }
