import { RouterModule } from "@angular/router";
import { ZipCodeLookupComponent } from './zip-code-lookup/zip-code-lookup.component';
import { CityLookupComponent } from './city-lookup/city-lookup.component';
import { AppComponent } from './app.component';


const routes = [
  {path: "city", component: CityLookupComponent},
  {path: "city/:city/:state/:country", component: CityLookupComponent},
  {path: "zipcode", component: ZipCodeLookupComponent},
  {path: "zipcode/:zip_code/:country", component: ZipCodeLookupComponent},
  {path: "", component: CityLookupComponent}
]

const routing = RouterModule.forRoot(routes);
export {routing};

