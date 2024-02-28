/**
 * This file will handle connection and storing of books
 */
import {BookList} from "../types/BookList";

export default interface IController {
    readonly source_url: string;

    // Globals

    // TODO different collectors can have different properties. This is the base properties, should allow extending

    /**
     *
     * @param startIndex
     * @param maxResults
     * @param query
     */
    getConstructedURL(startIndex: number, maxResults: number, query: string): string;

    /**
     * Extract only required data from retrieved JSON and transform it to a list of books by the collectors type
     *
     * @param response
     * @param existingBookList
     */
    transformBooks(response: any, existingBookList: BookList): BookList;

    /**
     *
     */
    getAllowedMaxResults(): number;
}