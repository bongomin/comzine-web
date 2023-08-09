import React from 'react';

const SearchBar = () => {
    return (
        <div className="col-auto">
            <form action="#" className="header-search">
                <input type="text" placeholder="Search here..." />
                <button type="submit" aria-label="search-button">
                    <i className="far fa-search"></i>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
