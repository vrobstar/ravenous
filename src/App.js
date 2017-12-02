import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp'

// got warning message that this wasn't used.
const business = {};

const businesses = [];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then(businesses => this.setState({
        businesses: businesses
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses= {this.state.businesses}/>
      </div>
    );
  }
}

export default App;
