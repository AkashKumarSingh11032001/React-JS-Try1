import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'best_match',
    'Most Reviewed': 'best_match'
}


class SearchBar extends Component {
    renderSortByOptions() {
        sortByOptions.keys(sortByOptions).map(x => { <li key={x}>{sortByOptions[x]}</li> });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
        
        
    }
}

export default SearchBar;