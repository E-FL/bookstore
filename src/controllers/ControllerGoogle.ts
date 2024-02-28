/**
 * Base collector for Google books
 *
 * TODO now that I think of it, this collector is the controller, it should not hold the data, only functions
 * TODO add a model, rename classes to controller instead of collector.
 * TODO In the model, think of adding a caching mechanism
 * TODO There is a weird situation with the totalItems returned value, it is very in-accurate... can not rely on
 */
import IController from "./IController";
import {BookList} from "../types/BookList";

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const MAX_ALLOWED_RESULTS = 40; // this is from Google's API

export class ControllerGoogle implements IController {
    source_url: string;

    constructor(source: string = BASE_URL) {
        this.source_url = source;
    }

    getConstructedURL = (startIndex: number, maxResults: number, query: string) => {
        if (!query)
            throw new Error('Query must be a non-empty string!');

        /**
         * TODO handle search key specifics
         * can add control to search only intitle, inauthor, inpublisher...
         * in accordance to https://developers.google.com/books/docs/v1/using#PerformingSearch
         */

        /**
         * TODO handle specific returned fields
         * Can control which fields will return, if we only display thumbnail and title, don't bring all...
         * in accordance to https://developers.google.com/books/docs/v1/performance
         */

        return `${(this.source_url)}?q="${encodeURIComponent(query)}"+intitle&startIndex=${startIndex}&maxResults=${maxResults}&projection=lite`;
    }

    transformBooks(response: any, existingBookList: BookList = null): BookList {
        // TODO test to see if this JSON is legit
        // TODO go over items and transform each record according to the relevant type (BookGoogle for this one)
        // TODO validate types in the response

        const bookList: BookList = existingBookList || new BookList();

        // TODO test if it is a valid IBook contract
        if (Array.isArray(response.data.items))
            bookList.books.push(...response.data.items);

        // should be the same all the time... but keep the latest anyway, just in-case
        if (response.data['totalItems'] != null)
            bookList.totalCount = response.data['totalItems'];

        return bookList;
    }

    getAllowedMaxResults(): number {
        return MAX_ALLOWED_RESULTS;
    }
}