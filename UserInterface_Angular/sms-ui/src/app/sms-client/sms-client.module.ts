import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SmsInterceptor } from './interceptors/sms.interceptor';
import { UsersClientService } from './clients/users-client.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    UsersClientService,
    {provide: HTTP_INTERCEPTORS, useClass: SmsInterceptor, multi: true}
  ]
})
export class SmsClientModule { }
