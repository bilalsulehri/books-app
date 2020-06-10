import React from 'react';

import './Book.css';

const book = (props) => (
    <article className="Book">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default book;