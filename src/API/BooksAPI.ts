/**
 * API handling
 */

import IController from '../controllers/IController';
import axios from 'axios';
import {BookList} from "../types/BookList";

const DEFAULT_QUERY: string = 'Cyber'; // case-insensitive? according to Google doc
const DEFAULT_RESULTS_PER_PAGE: number = 10;

/**
 * This function retrieves n books (maxResults) from the source according
 * to the query parameter (filter) from start index
 *
 * TODO the totalItems is very inaccurate and I should consider not using it
 *
 * @param collector
 * @param startIndex
 * @param maxResults
 * @param query
 */
const fetchBooks = async (collector: IController,
                          startIndex: number = 0,
                          maxResults: number = DEFAULT_RESULTS_PER_PAGE,
                          query: string = DEFAULT_QUERY) => {

    const allowedMaxResults = collector.getAllowedMaxResults();
    const bookList: BookList = BookList.createFromQuery(query);

    let booksToFetch = maxResults;
    let currentStartIndex = startIndex;

    try {
        while (booksToFetch > 0) {
            const requestCount = Math.min(booksToFetch, allowedMaxResults);
            try {
                const constructedURL = collector.getConstructedURL(currentStartIndex, requestCount, query);
                const response = await axios.get(constructedURL);
                const returnedCount = response.data.items?.length;
                collector.transformBooks(response, bookList);

                console.debug(` Books --> 
                fetch=${booksToFetch} 
                start index=${currentStartIndex} 
                Requested=${requestCount} 
                received=${returnedCount} 
                size=${bookList.books.length}`);

                if (returnedCount < requestCount) {
                    // This is the number of books returned, I can break here if value is less than requested (probably last page)
                    console.debug(`I guess this is the last page`);
                    break;
                }

            } finally {
                // it can be logical to use the returned count
                currentStartIndex += requestCount;
                booksToFetch -= requestCount;
            }
        }

        return bookList;
    } catch (e) {
        // TODO better log and handle errors from Axios (non 2xx HTTP errors)
        if (e.response) {
            console.error(e.response.status);
            console.error(e.response.headers);
            console.error(e.response.data.error?.errors);
        } else if (e.request) {
            console.error(e.request);
        }

        window.alert(e.message);

        return null;
    }
}


export const BooksAPI = {
    DEFAULT_QUERY,
    DEFAULT_RESULTS_PER_PAGE,
    fetchBooks
}