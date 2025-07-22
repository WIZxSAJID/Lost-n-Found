import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic here
    };

    return (
        <div className="flex justify-center items-center h-20">
            <form onSubmit={handleSearch} className="flex">
                <input
                    type="text"
                    placeholder="Search items..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 rounded-l"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
