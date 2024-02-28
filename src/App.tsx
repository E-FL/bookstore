import React from 'react';
import './App.css';
import {BookStore} from "./components/BookStore";
function App() {
    return (
        <div>
            <h2>Welcome to my store</h2>
            <hr />
            <BookStore />
        </div>
    );
}

export default App;
