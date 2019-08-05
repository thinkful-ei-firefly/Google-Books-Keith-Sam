import React from 'react';

function SearchBar(props){
  //takes in setSearch function
  return (
    <section>
      <form className = 'Search' onSubmit = {props.setSearch()}>
        <label htmlFor = "search">Search</label>
        <input type = "text" id = "search" required></input>
        <button>Search</button>
      </form>
      <div className = "filters">
        <select>
          <option value = "all">All</option>
          <option value = "eooks">E-Books</option>
          <option value = "free-ebooks">Free E-Books</option>
          <option value = "full">Full</option>
          <option value = "paid-ebooks">Paid E-Books</option>
          <option value = "partial">Partial</option>
        </select>
        <select>
          <option value = "all">No filter</option>
          <option value = "books">Books</option>
          <option value = "magazines">Magazines</option>
        </select>
      </div>
    </section>
  );
}

export default SearchBar;