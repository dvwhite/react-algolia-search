import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

// The form state used to initialize the form on fresh renders
const initialFormState = {
  searchTerms: ''
}

const SearchForm = ({ setResults }) => {
  const [form, setForm] = useState(initialFormState);

  // Form change handler to save user input to component state
  // The component state is synced with the input
  const handleChange = event => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  // Form submit handler to submit the user input to the API
  const handleSubmit = event => {
    // Prevent unwanted page refreshes after the form submits
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          Search Hacker News Algolia API
        </h2>
        <input
          name='searchTerms'
          className='search-input'
          type='text'
          placeholder='Enter the text to search...'
          value={form.searchTerms}
          onChange={handleChange}
        />
      <button type='submit'>Search</button>
      </form>
    </div>
  )
};

export default SearchForm;
