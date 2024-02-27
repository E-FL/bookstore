/**
 * API handling
 */

import ICollector from '../collectors/ICollector';
import axios from "axios";

const DEFAULT_QUERY: string = 'cyber';
const DEFAULT_RESULTS_PER_PAGE: number = 10;

/**
 * This function retrieves n books (maxResults) from the source according
 * to the query parameter (filter) from start index
 *
 * @param collector
 * @param query
 * @param startIndex
 * @param maxResults
 */
const fetchBooks = async (collector: ICollector,
                          query: string = DEFAULT_QUERY,
                          startIndex: number = 0,
                          maxResults: number = DEFAULT_RESULTS_PER_PAGE) => {


    try {
        const constructedURL: string = collector.getConstructedURL(query, startIndex, maxResults);
        const response = await axios.get(constructedURL);
        return response.data;
    } catch (e) {
        // any non 2xx errors will be caught here

        // TODO better log and handle errors from Axios
        if (e.response) {
            console.error(e.response.data);
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