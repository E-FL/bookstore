/**
 * Our collection of books, no matter from what source (collector)
 * This is our view
 */
import React from 'react';
import IBook from "../types/IBook";
import './BookCatalog.css';
import {BookList} from "../types/BookList";

class BookCatalogProps {
    bookList: BookList;
    selected: BookList;
    onSelect: (id: string, checked: boolean) => void;
}

export const BookCatalog: React.FC<BookCatalogProps> = (props) => {
    return (
        <div className="book-catalog-table-wrapper">
            <table className="book-catalog-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Cover</th>
                    <th>Select</th>
                </tr>
                </thead>
                <tbody>
                {props.bookList.books.map((book: IBook) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.volumeInfo.title}</td>
                        <td>
                            {book.volumeInfo.imageLinks ? (
                                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book cover"/>
                            ) : ""}
                        </td>
                        <td className="checkbox-container">
                            <input
                                type="checkbox"
                                onChange={event => props.onSelect(book.id, event.target.checked)}
                                checked={props.selected?.getBook(book.id) != null}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
