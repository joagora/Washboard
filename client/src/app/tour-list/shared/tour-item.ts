import { Moment } from "moment";

export interface TourItem {
    title?: string,
    content?: string
    date: Moment,
    address: TourAddress,
    ticketsLink?: string
}

export interface TourAddress {
    country: string
    city: string,
    street: string,
    venue: string
}