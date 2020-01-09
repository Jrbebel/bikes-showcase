import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BikesModule } from './bikes/bikes.module';
import { interceptorProviders } from '../shared/interceptors';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    PagesComponent,
  ],
  providers: [
    interceptorProviders
  ]
})
export class PagesModule { }
