/**
 * This file will handle connection and storing of books
 */

import axios from 'axios';
import IBook from "../types/IBook";

export default interface ICollector {
    readonly source_url: string;

    // Globals

    // TODO different collectors can have different properties. This is the base properties, should allow extending
    /**
     *
     * @param query
     * @param startIndex
     * @param maxResults
     */
    getConstructedURL(query: string, startIndex: number, maxResults: number): string;

    /**
     * // TODO create adapter per each collector to create the collection according to its book interface
     * Extract only required data and transform it to a list of books by the collectors type
     *
     * @param items
     */
    transformBooks(items: any): IBook[];

    /**
     * Return the number of books that can be retrieved
     */
    getTotalBooks(): number;

    /**
     * Get the unique ID for this book (TODO is it really unique?)
     */
    getId(): string;

    /**
     * Get the title of the book
     */
    getTitle(): string;

    /**
     * Get the URL for displaying a thumbnail for the book
     */
    getThumbnailLink(): string;
}