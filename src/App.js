import React, { useState } from "react";
import "./App.css";

// Component imports
import Navbar from "./components/Navbar";
import StoryList from "./components/StoryList";
import SearchForm from "./components/SearchForm";

function App() {
  const [results, setResults] = useState([]); // The search results
  return (
    <div className="App">
      <Navbar />
      <SearchForm setResults={setResults} />
      <StoryList stories={results} />
    </div>
  );
}

export default App;
