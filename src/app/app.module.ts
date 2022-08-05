import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityLookupComponent } from './city-lookup/city-lookup.component';
import { ZipCodeLookupComponent } from './zip-code-lookup/zip-code-lookup.component';
import { routing } from './app.router';

@NgModule({
  declarations: [	
    AppComponent,
    CityLookupComponent,
    ZipCodeLookupComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
