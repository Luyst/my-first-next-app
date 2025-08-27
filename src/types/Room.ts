export interface ListingType {
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

export interface SectionType {
    id: string;
    title: string;
    listings: ListingType[];
}
