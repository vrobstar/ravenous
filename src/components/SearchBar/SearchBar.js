import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if(this.state.sortBy===sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      // My way (below) did not work with conditional styling.  Why not?
      //let sortByOptionValue = [];
      //sortByOptionValue.push(sortByOption);
      //Recommended method:
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick= {this.handleSortByChange.bind(this, sortByOptionValue)}>
        {sortByOption}</li>;
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
      });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
      });
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
      });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }


  render() {
    return (
      <div className = "SearchBar" searchYelp = {this.searchYelp}>
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let&#39;s Go</a>
        </div>
      </div>
    )
  }
};

export default SearchBar;
