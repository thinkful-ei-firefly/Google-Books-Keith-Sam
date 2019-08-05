import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results';
import Header from './Header';
import $ from 'jquery';

class App extends React.Component{
  state = {
    BASE_URL: 'https://www.googleapis.com/books/v1/volumes?',
    search: '',
    results: []
  }

  search = () => {
      fetch(`${this.state.BASE_URL}q=${this.state.search}`)
      .then(res => res.json())
      .then(res => {
        const items = res.items.map(item => {
          if (item.saleInfo.saleability === "NOT_FOR_SALE"){
            return {
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors,
              desc: item.volumeInfo.description,
              price: 'NOT FOR SALE',
              image: item.volumeInfo.imageLinks.thumbnail
            };
          } else {
            return {
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors,
              desc: item.volumeInfo.description,
              price: item.saleInfo.listPrice.amount,
              image: item.volumeInfo.imageLinks.thumbnail
            };
          }
        });
        this.setState({results: items});
      }).catch(err => {
        console.log(err);
      });
  }

  setSearch = (event) =>{
    event.preventDefault();
    const term = ($('#search').val());
    this.setState({search: term}, () => this.search());
  }


  render(){
    return (
      <main>
        <Header />
        <SearchBar setSearch = {() => this.setSearch}/>
        <Results results = {this.state.results} />
      </main>
    );
  }
}

export default App;
