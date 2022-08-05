import { Place } from "./location";


export class LocationLookupResponse {
    'place name'!: string;
    places?: Place[];
    country!: string;
    'country abbreviation'!: string;
    state!: string;
    'state abbreviation'!: string;
}

export class ZipCodeLookupResponse {
    'post code'!: string;
    country!: string;
    'country abbreviation'!: string;
    places?: Place[];

}