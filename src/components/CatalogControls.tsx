import React from "react";

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
        <div>
            <header>
                Current page {props.page} out
                of {Math.ceil(props.total / props.rows)} pages (Displaying {props.rows} out
                of {props.total} {props.query ? `'${props.query}'` : ''} books)
            </header>
            <br/>
            <button
                onClick={() => props.onUpdatePage(props.page - 1)}
                disabled={props.page <= 1}>
                Previous
            </button>
            <button
                onClick={() => props.onUpdatePage(props.page + 1)}
                disabled={props.page >= Math.ceil(props.total / props.rows)}>
                Next
            </button>
            <select
                value={props.rows}
                onChange={(event) => props.onUpdateRows(Number(event.target.value))}>
                {[10, 25, 50].map(size => (
                    <option
                        key={size}
                        value={size}>show {size} books per page
                    </option>
                ))}
            </select>
        </div>
    );
}
