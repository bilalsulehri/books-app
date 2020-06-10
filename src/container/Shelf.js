import React, { Component } from 'react';
import axios from 'axios';
import Book from '../components/Book/Book';

import './Shelf.css';

class Shelf extends Component {
    state={
        books:[]
    }
    componentDidMount(){
        axios.get('http://localhost/books',{ headers: {'Access-Control-Allow-Origin': '*'}}).then(
            response=>{
                console.log(response);
                this.setState({books:response.data.books});
                
            }
        );
    }
    render () {
        const books=this.state.books.map(book=>{
            return <Book key={book.id} title={book.title} author={book.author}/>            
        });
        return (
            <div>
                <section>
                    {books}
                </section>
               
            </div>
        );
    }
}

export default Shelf;