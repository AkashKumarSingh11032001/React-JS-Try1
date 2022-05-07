import React from 'react';
import './SearchBar.css';




class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            "term": '',
            "location": '',
            "sortBy": 'best_match'
        }
    }


    sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'best_match',
        'Most Reviewed': 'best_match'
    }
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(x => { return <li key={this.sortByOptions[x]}>{x}</li>; });
    }
    getSortByClass(sortByOptions){
        if(this.state.sortBy == sortByOptions){
            return 'active';
        }
        else{
            return "";
        }
    }
    handleSortByChange(sortByOptions){
        this.setState({'sortBy': sortByOptions});
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
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