import React from "react";
import './CatalogControls.css';

interface CatalogControlProps {
    query: string;
    total: number;
    rows: number;
    page: number;
    onUpdatePage: (page: number) => void;
    onUpdateRows: (rows: number) => void;
}

export const CatalogControls: React.FC<CatalogControlProps> = (props) => {
    return (
        <div className="catalog-controls-container">
            <header className="catalog-controls-header">
                Current page {props.page} out
                of {Math.ceil(props.total / props.rows)} pages (Displaying {props.rows} out
                of {props.total} {props.query ? `'${props.query}'` : ''} books)
            </header>
            <div className="catalog-controls-wrapper">
                <select
                    className="catalog-controls-select"
                    value={props.rows}
                    onChange={(event) => props.onUpdateRows(Number(event.target.value))}>
                    {[10, 25, 50].map(size => (
                        <option
                            key={size}
                            value={size}>show {size} books per page
                        </option>
                    ))}
                </select>
                <button
                    className="catalog-controls-buttons"
                    onClick={() => props.onUpdatePage(props.page - 1)}
                    disabled={props.page <= 1}>
                    Previous
                </button>
                <button
                    className="catalog-controls-buttons"
                    onClick={() => props.onUpdatePage(props.page + 1)}
                    disabled={props.page >= Math.ceil(props.total / props.rows)}>
                    Next
                </button>
            </div>
        </div>
    );
}