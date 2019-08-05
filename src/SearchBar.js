import React from 'react';

function SearchBar(props){
  //takes in setSearch function
  return (
    <section className = "searchBar">
      <form className = 'Search' onSubmit = {props.setSearch()}>
        <label htmlFor = "search">Search</label>
        <input type = "text" id = "search" name = "search" required></input>
        <div className = "filters">
        <label htmlFor = "book-type">Book Type</label>
        <select id="book-type">
          <option value = "false">No Filter</option>
          <option value = "ebooks">E-Books</option>
          <option value = "free-ebooks">Free E-Books</option>
          <option value = "full">Full</option>
          <option value = "paid-ebooks">Paid E-Books</option>
          <option value = "partial">Partial</option>
        </select>
        <label htmlFor = "print-type">Print Type</label>
        <select id="print-type">
          <option value = "all">All</option>
          <option value = "books">Books</option>
          <option value = "magazines">Magazines</option>
        </select>
      </div>
        <button>Search</button>
      </form>
    </section>
  );
}

export default SearchBar;