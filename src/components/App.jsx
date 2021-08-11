import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer';
import CreateBook from './CreateBook/CreateBook';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the Light We Cannot See", author: 'Anthony Doerr'},
            {title: 'Harry Potter and the Goblet of Fire', author: "J.K. Rowling"}
        ];
        this.state = {
            bookNumber: 0
        };
    }
    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        }); 
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    
    createTheBook = (newBook) => {
        console.log("From the createbook on App component", newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length -1
        })
    }
    
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book = {this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook = {this.goToPreviousBook} />
                <CreateBook createNewBook={this.createTheBook}/>
                <Footer />
            </div>
        )
    }
}

export default App;