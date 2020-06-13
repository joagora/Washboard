import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class NewsFeedService {
    constructor(private httpClient: HttpClient) {

    }

    getFeedDetails(urlQuery: string) {
        const url = `https://api.instagram.com/oembed?url=${urlQuery}`;
        return this.httpClient.get<any>(url);
    }
}