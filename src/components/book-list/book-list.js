import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import './book-list.css';

export default class BookList extends Component {

    render() {
        const { books } = this.props;
        return (
            <ul>
                { books.map((books) => {
                        return (
                            <li key={books.id}>
                                <BookListItem book={books} />
                            </li>
                        );
                    }) }
            </ul>
        );
    };
};
