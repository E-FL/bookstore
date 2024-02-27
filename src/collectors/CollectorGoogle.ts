/**
 * Base collector for Google books
 */
import ICollector from "./ICollector";
import IBook from "../types/IBook";

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export class CollectorGoogle implements ICollector {
    source_url: string;

    constructor(source: string = BASE_URL) {
        this.source_url = source;
    }

    getConstructedURL = (query: string, startIndex: number, maxResults: number) =>
        `${(this.source_url)}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`;

    transformBooks(items: any): IBook[] {
        // TODO test to see if this JSON is legit
        // TODO go over items and transform each record according to the relevant type (BookGoogle for this one)
        return [];
    }

    getTotalBooks = (): number => {
        // TODO extract 'totalItems' from JSON
        return 0;
    }

    getId = (): string => {
        // TODO extract 'id' from JSON
        return null;
    }

    getTitle = (): string => {
        // TODO extract 'volumeInfo/title' from JSON
        return null;
    }

    getThumbnailLink = () => {
        // TODO extract 'imageLinks/smallThumbnail' from JSON
        return null;
    }
}