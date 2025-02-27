// 3. Create a Searchable Dropdown List
// Problem: Implement a searchable dropdown list in React that allows users to filter through options as they type.

// Answer:

// Key Concepts:
// Dynamic Filtering: Filtering a list based on user input.
// Controlled Components: Using React state for form input.


import React, { useState } from "react";

export const SearchableDropDownList = () => {
  const options = ["Apple", "Banana", "Cherry", "Date", "Grape", "Orange"];
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const inputHandler = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredOptions(
      options.filter((el) => el.toLowerCase().includes(query))
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Fruits"
        value={search}
        onChange={inputHandler}
      />
      {filteredOptions.length === 0 ? (
        <p>No Results Found</p>
      ) : (
        <ul>
          {filteredOptions.map((el, index) => {
            return (
              <ul>
                <li key={index}>{el}</li>
              </ul>
            );
          })}
        </ul>
      )}
    </>
  );
};
