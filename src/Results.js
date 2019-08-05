import React from 'react';

function Results(props){
  //takes in results as an array
  const fill = props.results.map((item, index) => {
    return (
      <div className="item" key = {index}>
        <h2>{item.title}</h2>
        <img src = {item.image} alt='Book Cover'/>
        <p>{item.desc}</p>
        <p>{item.authors}</p>
        <p>{item.price}</p>
      </div>
    );
  });
  return (
    <section>
      {fill};
    </section>
  );

}

export default Results;