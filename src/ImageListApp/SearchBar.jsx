import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        onSubmit('cars')
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    onChange={handleChange}
                    value={term}
                />
            </form>
        </div>    
    )
}

export default SearchBar;