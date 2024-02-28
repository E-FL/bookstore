/**
 * Generic book interface as we display it.
 * TODO We can plan creating a different adapters for collector, as they might return response differently
 */
export default interface IBook {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks?: {
            smallThumbnail: string | undefined;
            thumbnail: string | undefined; // not used
        }
        previewLink?: {
            url: string; // not used
        }
    }

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