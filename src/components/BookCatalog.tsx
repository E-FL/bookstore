/**
 * Our collection of books, no matter from what source (collector) TODO future
 */
// @ts-ignore // TODO is there a solution for this?
import React, {useEffect, useState} from "react";
import IBook from '../types/IBook';
import {BooksAPI} from "../API/BooksAPI";
import {CollectorGoogle} from "../collectors/CollectorGoogle";

export const BookCatalog: React.FC = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [startIndex, setStartIndex] = useState<number>(0);
    const [maxResults, setMaxResults] = useState<number>(BooksAPI.DEFAULT_RESULTS_PER_PAGE);

    // init books
    useEffect(() => {
        const loadInitialBooks = async () => {
            const initialBooks = await BooksAPI.fetchBooks(new CollectorGoogle());
            setBooks(initialBooks);
        }

        loadInitialBooks().then(r => {/* TODO should I do something after? */
        });
    }, []);

    return (
        <div>

        </div>
    );
};