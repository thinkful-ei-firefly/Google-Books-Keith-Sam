import React from 'react';
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
      console.log(this.url())
      fetch(this.url())
      .then(res => res.json())
      .then(res => {
        if (res.totalItems === 0) {
          alert('No Results Found');
          return;
        }
        console.log(res)
        const items = res.items.map(item => {
          return {
            title: (item.volumeInfo.title ? item.volumeInfo.title : 'No Title'),
            authors: (item.volumeInfo.authors ? item.volumeInfo.authors : 'No Author'),
            desc: (item.volumeInfo.description ? item.volumeInfo.description : 'No Description') ,
            price: (item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : item.saleInfo.saleability),
            image: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-13-300x300.png')
          };
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

  url = () => {
    const searchTerm = `q=${encodeURIComponent(this.state.search)}`
    const printFilter = `&printType=${$('#print-type').find(":selected").attr('value')}`
    let bookFilter
    if ($('#book-type').find(":selected").attr('value') !== 'false') {
      bookFilter = `&filter=${$('#book-type').find(":selected").attr('value')}`;
    } else {
      bookFilter = ''
    }
    return (
      this.state.BASE_URL + searchTerm + printFilter + bookFilter
    )
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
