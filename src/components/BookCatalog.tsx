/**
 * Our collection of books, no matter from what source (collector)
 * This is our view
 */
import React from 'react';
import IBook from "../types/IBook";
import './BookCatalog.css';


export const BookCatalog = ({books}) => {
    return (
        <div className="book-catalog-table-wrapper">
            <table className="book-catalog-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Cover</th>
                    <th>Buy</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book: IBook) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.volumeInfo.title}</td>
                        <td>
                            {book.volumeInfo.imageLinks ? (
                                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book cover"/>
                            ) : ""}
                        </td>
                        <td className="checkbox-container">
                            <input type="checkbox"/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
