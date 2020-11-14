import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

// Redux imports
import { addSearchTerm } from '../actions/index';
import { useDispatch } from 'react-redux';

// The form state used to initialize the form on fresh renders
const initialFormState = {
  searchTerms: '',
};

const SearchForm = ({ setResults }) => {
  const [form, setForm] = useState(initialFormState);
  const dispatch = useDispatch();

  // Form change handler to save user input to component state
  // The component state is synced with the input
  const handleChange = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Form submit handler to submit the user input to the API
  const handleSubmit = (event) => {
    // Prevent unwanted page refreshes after the form submits
    event.preventDefault();

    // Send a request to the API endpoint and store in parent state
    // using setResults, which is derived from the parent component
    const queryString = `?query=${form.searchTerms}&tags=story`;
    const unencodedURI = process.env.REACT_APP_API_URI + queryString;
    const encodedURI = encodeURI(unencodedURI);
    axios
      .get(encodedURI)
      .then((res) => {
        const results = res.data.hits;
        setResults(results);
        setForm(initialFormState);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          name='searchTerms'
          className='search-input'
          type='text'
          placeholder='Search Hacker News...'
          value={form.searchTerms}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <div className='separator'></div>
    </div>
  );
};

export default SearchForm;
