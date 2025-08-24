export interface Listing {
    id: string;
    title: string;
    type: string;
    city: string;
    pricePerNight: number;
    currency: string;
    rating: number;
    images: string[];
    tags: string[];
}

export interface Section {
    id: string;
    title: string;
    listings: Listing[];
}
