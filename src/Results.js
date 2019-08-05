import React from 'react';

function Results(props){
  //takes in results as an array
  const fill = props.results.map((item, index) => {
    return (
      <div className="item" key = {index}>
        <img src = {item.image} alt='Book Cover'/>
        <div className = "info">
          <h2>{item.title}</h2>
          <p>{item.authors}</p>
          <p>{item.price}</p>
          <p>{item.desc}</p>
        </div> 
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