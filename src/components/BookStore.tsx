import React, {useEffect, useState} from "react";
import {BookCatalog} from "./BookCatalog";
import {BookList} from "../types/BookList";
import {BooksAPI} from "../API/BooksAPI";
import {ControllerGoogle} from "../controllers/ControllerGoogle";
import {CatalogControls} from "./CatalogControls";
import './BookStore.css';

export const BookStore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [bookList, setBookList] = useState<BookList>();
    const [selectedBooks, setSelectedBooks] = useState<BookList>();
    const [startIndex, setStartIndex] = useState<number>(0);
    const [maxResults, setMaxResults] = useState<number>(BooksAPI.DEFAULT_RESULTS_PER_PAGE);

    // init books
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            const loadBooks = async () => {
                const query = BooksAPI.DEFAULT_QUERY;

                console.debug(`Calling to fetch books ${startIndex}-${startIndex + maxResults - 1} by querying "${query}"`);
                try {
                    const bookList: BookList = await BooksAPI.fetchBooks(new ControllerGoogle(), startIndex, maxResults, query);
                    setBookList(bookList);
                } catch (error) {
                    console.debug('Failed loading books', error);
                } finally {
                    setIsLoading(false);
                }
            }

            console.time('loadBooks');
            try {
                console.debug('Before -> Books loading...');
                loadBooks().then(r => console.debug('After -> Finished loading books', r));
            } finally {
                console.timeEnd('loadBooks');
            }
        }
    }, [startIndex, maxResults]);

    if (!bookList)
        return null;

    const updatePage = (newPage: number) => {
        const newStartIndex = (newPage - 1) * maxResults;
        setStartIndex(newStartIndex);
    };

    const updateMaxResults = (newRows: number) => {
        setMaxResults(newRows);
        setStartIndex(0); // go back to first page... TODO need to do it when setting max results
    };

    const purchaseSelected = () => {
        const selectedIds = selectedBooks.books.map(book => book.id);
        console.log('Purchase selected books', selectedIds);
        window.alert(`Purchase selected books:\n${selectedIds.join('\n')}`);
    }

    const updateSelectedBooks = (id: string, selected: boolean) => {
        console.log(`${selected ? 'Select' : 'Unselect'} ${id}`);

        const newSelectedBooks = BookList.cloneBooks(selectedBooks);
        const book = bookList.getBook(id);
        if (book) {
            selected ? newSelectedBooks.addBook(book) : newSelectedBooks.removeBook(id);
        }

        setSelectedBooks(newSelectedBooks);
    }

    const currentPage = Math.floor(startIndex / maxResults) + 1;

    return (
        <div>
            {
                isLoading && (
                    <div className="loading-overlay">
                        <div className="loading-modal">
                            Loading...
                        </div>
                    </div>)
            }

            <CatalogControls
                query={bookList.query}
                total={bookList.totalCount}
                rows={maxResults}
                page={currentPage}
                selected={selectedBooks}

                onUpdatePage={updatePage}
                onUpdateRows={updateMaxResults}
                onPurchase={purchaseSelected}
            />

            <BookCatalog
                bookList={bookList}
                selected={selectedBooks}
                onSelect={updateSelectedBooks}
            />
        </div>
    )
}