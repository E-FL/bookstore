/**
 * Base collector for Google books
 *
 * TODO now that I think of it, this collector is the controller, it should not hold the data, only functions
 * TODO add a model, rename classes to controller instead of collector
 */
import ICollector from "./ICollector";
import {BookList} from "../types/BookList";

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const MAX_ALLOWED_RESULTS = 40; // this is from Google's API

export class CollectorGoogle implements ICollector {
    source_url: string;

    constructor(source: string = BASE_URL) {
        this.source_url = source;
    }

    getConstructedURL = (startIndex: number, maxResults: number, query: string) => {
        if (!query)
            throw new Error('Query must be a non-empty string!');

        return `${(this.source_url)}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`;
    }

    transformBooks(query: string, response: any): BookList {
        // TODO test to see if this JSON is legit
        // TODO go over items and transform each record according to the relevant type (BookGoogle for this one)
        // TODO validate types in the response

        const bookList: BookList = new BookList(query);
        bookList.books = response.data['items'];
        bookList.totalCount = response.data['totalItems'];

        return bookList;
    }

    getAllowedMaxResults(): number {
        return MAX_ALLOWED_RESULTS;
    }
}