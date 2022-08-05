

export class Location {
    city?: string;
    state?: string;
    country!: string;
    zip_code?: string;
}

export class Place {
    // required 
    'place name'!: string;
    latitude!: number;
    longitude!: number;

    // optional
    'post code'?: string;
    state?: string;
    'state abbreviation'?: string;
}
