import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

// Stateless functional component
// const Search = () => (
//   <div className="search">
//   <header>
//     <h1>svideo</h1>
//     <input type="text" placeholder="search" />
//   </header>
//     <div>
//       {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
//     </div>
//   </div>
// );

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "this is some sort of debug statement"
    };
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type="text" placeholder="search" />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
