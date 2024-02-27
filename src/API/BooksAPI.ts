/**
 * API handling
 */

import ICollector from '../collectors/ICollector';
import axios from 'axios';
import {BookList} from "../types/BookList";

const DEFAULT_QUERY: string = 'Cyber'; // TODO apparently it is CaSe SenSaTiVE! what to do?
const DEFAULT_RESULTS_PER_PAGE: number = 10;

/**
 * This function retrieves n books (maxResults) from the source according
 * to the query parameter (filter) from start index
 *
 * @param collector
 * @param startIndex
 * @param maxResults
 * @param query
 */
const fetchBooks = async (collector: ICollector,
                          startIndex: number = 0,
                          maxResults: number = DEFAULT_RESULTS_PER_PAGE,
                          query: string = DEFAULT_QUERY) => {

    // TODO tricky... should take into consideration limitations from the collector (max allowed results)
    // Phase 1 - do not allow - done
    // Phase 2 - process several requests until fulfilling total request or until total items - TBD
    const allowedMaxResults = collector.getAllowedMaxResults();
    if (allowedMaxResults > 0 && maxResults > allowedMaxResults) {
        window.alert(`Requested ${maxResults} items but site allows only up to ${allowedMaxResults}`);
        return null;
    }
    
    try {
        const constructedURL: string = collector.getConstructedURL(startIndex, maxResults, query);
        const response = await axios.get(constructedURL);

        return collector.transformBooks(query, response); // TODO I can pass different query value here... TBD
    } catch (e) {
        // any non 2xx errors will be caught here

        // TODO better log and handle errors from Axios
        if (e.response) {
            console.error(e.response.status);
            console.error(e.response.headers);
        } else if (e.request) {
            console.error(e.request);
        } else {
            console.error('Generic Error', e.message);
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