/**
 * Our collection of books, no matter from what source (collector) TODO future
 * This is our view
 */
import React, {useEffect, useRef, useState} from 'react';
import {BooksAPI} from '../API/BooksAPI';
import {CollectorGoogle} from '../collectors/CollectorGoogle';
import {BookList} from "../types/BookList";

const BookCatalog = () => {
    const isLoadingRef = useRef<boolean>(false);
    const [bookList, setBookList] = useState<BookList>();
    const [startIndex, setStartIndex] = useState<number>(0);
    const [maxResults, setMaxResults] = useState<number>(BooksAPI.DEFAULT_RESULTS_PER_PAGE);

    // init books
    useEffect(() => {
        if (!isLoadingRef.current) {
            isLoadingRef.current = true;
            const loadBooks = async () => {
                // TODO show 'Loading...'
                const query = BooksAPI.DEFAULT_QUERY;

                console.log(`Calling to fetch books ${startIndex}-${startIndex + maxResults} by query "${query}"`);
                console.time('fetchBooks');
                const bookList: BookList =
                    await BooksAPI.fetchBooks(new CollectorGoogle(), startIndex, maxResults, query);
                console.timeEnd('fetchBooks');

                setBookList(bookList);
            }

            loadBooks().then(r => {/* TODO */
            });
        }
    }, []);

    console.debug('is loading?', isLoadingRef.current);

    if (!bookList)
        return null;

    return (
        <div>
            <header>Current page {startIndex % maxResults + 1} out of {Math.ceil(bookList.totalCount / maxResults)} pages (Displaying {bookList.books.length} out of {bookList.totalCount} {bookList.query ? `'${bookList.query}'` : ''} books)
            </header>

            {/*TODO create a component for displaying the model types*/}

            {bookList.books.map((book) => (
                <div key={book.id}>
                    <h3>{book.volumeInfo.title}</h3>
                    {book.volumeInfo.imageLinks && (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover"/>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BookCatalog;