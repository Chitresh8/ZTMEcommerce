import React, { useState } from "react";

const SearchWithSuggestions = () => {
    // Sample suggestions list
    const suggestionsList = ["How to cook pasta?", "How to learn React?", "How to improve coding?", "How to fix bugs?", "How are you?"];
    
    const [searchText, setSearchText] = useState("");  // State for search input
    const [filteredSuggestions, setFilteredSuggestions] = useState([]); // State for filtered suggestions
    const [showSuggestions, setShowSuggestions] = useState(false); // State to show/hide suggestions

    // Handle input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);

        if (value.length > 0) {
            const filtered = suggestionsList.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
        }
    };

    // Handle suggestion selection
    const handleSuggestionClick = (suggestion) => {
        setSearchText(suggestion);  // Set selected suggestion in input
        setShowSuggestions(false);  // Hide suggestions after selection
    };

    return (
        <div style={{ width: "300px", position: "relative" }}>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}  // Show suggestions on focus
                style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />

            {/* Suggestions List */}
            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul style={{
                    position: "absolute",
                    width: "100%",
                    background: "white",
                    border: "1px solid #ccc",
                    listStyleType: "none",
                    padding: "5px",
                    margin: "0",
                    maxHeight: "150px",
                    overflowY: "auto",
                    borderRadius: "5px"
                }}>
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchWithSuggestions;
