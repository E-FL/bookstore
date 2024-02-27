/**
 * Generic book interface as we display it.
 * TODO We can plan creating a different adapters for collector, as they might return response differently
 */
export default interface IBook {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks?: {
            thumbnail: string;
        }
        previewLink?: {
            url: string;
        }
    }
}