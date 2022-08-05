import { Component, OnInit } from '@angular/core';
import { Location, Place } from '../shared/location';
import { LocationLookupService } from '../location-lookup.service';
import { LocationLookupResponse } from '../shared/response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-lookup',
  templateUrl: './city-lookup.component.html',
  styleUrls: ['./city-lookup.component.css']
})
export class CityLookupComponent implements OnInit {

  location!: Location;
  resp!: LocationLookupResponse;
  haveData: boolean = false;

  submitForm(location: Location) : void {
    this.locationLookup.lookupByLocation(location).subscribe({
      next: (data) => {this.resp = data; this.haveData = true;},
      error: (err) => {console.log(err);},
    });
  }

  constructor(public locationLookup: LocationLookupService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.location = new Location();
    
    this._route.params.subscribe(p=> {
      this.location.city=p["city"]; 
      this.location.state=p["state"]; 
      this.location.country=p["country"];
    })

    // check if params exist
    if (this.location.city !== undefined && this.location.state !== undefined && this.location.country !== undefined) {
      this.submitForm(this.location);
    }
  }

}
