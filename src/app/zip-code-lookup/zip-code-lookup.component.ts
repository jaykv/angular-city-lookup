import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationLookupService } from '../location-lookup.service';
import { Location } from '../shared/location';
import { ZipCodeLookupResponse } from '../shared/response';

@Component({
  selector: 'app-zip-code-lookup',
  templateUrl: './zip-code-lookup.component.html',
  styleUrls: ['./zip-code-lookup.component.css']
})
export class ZipCodeLookupComponent implements OnInit {

  location!: Location;
  resp!: ZipCodeLookupResponse;
  haveData?: boolean;

  submitForm(location: Location): void {
    this.locationLookup.lookupByZipCode(location).subscribe({
      next: (data) => {this.resp = data; this.haveData = true;},
      error: (err) => {console.log(err);},
    });
  }
  constructor(private locationLookup: LocationLookupService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.location = new Location();

    this._route.params.subscribe(p=> {
      this.location.zip_code=p["zip_code"]; 
      this.location.country=p["country"];
    })

    // check if params exist
    if (this.location.zip_code !== undefined && this.location.country !== undefined) {
      this.submitForm(this.location);
    }
  }

}
