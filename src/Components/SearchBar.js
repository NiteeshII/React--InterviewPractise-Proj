import React, { useEffect, useRef, useState } from "react";
import Pill from "./Pill";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [suggestion, setSuggestion] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);

  const InputRef = useRef(null);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setSuggestion([]);
      return;
    }
    const getData = async () => {
      const resp = await fetch(
        `https://dummyjson.com/users/search?q=${searchInput}`
      );
      let respdata = await resp.json();
      setSuggestion(respdata);
    };

    getData();
  }, [searchInput]);

  const handleSuggestionClick = (user) => {
    setSelectedUser([...selectedUser, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchInput("");
    setSuggestion([]);
    InputRef.current.focus();
  };

  const handlePillRemoval = (user) => {
    const updatedUsers = selectedUser.filter(
      (item) => item.email !== user.email
    );
    setSelectedUser(updatedUsers);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      selectedUser.length > 0 &&
      e.target.value === ""
    ) {
      const latestUser = selectedUser[selectedUser.length - 1];
      handlePillRemoval(latestUser);
    } else if (e.key === "ArrowDown" && suggestion?.users?.length > 0) {
      e.preventDefault();
      setActiveIndex((prevIndex) =>
        prevIndex < suggestion?.users?.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestion.users.length > 0) {
      e.preventDefault();
      setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      ActiveIndex >= 0 &&
      ActiveIndex < suggestion.users.length
    ) {
      handleSuggestionClick(suggestion.users[ActiveIndex]);
    }
  };

  return (
    <div className="SearchInput-Container">
      <div className="Search-userInput">
        {/* Pill */}
        {selectedUser?.map((item) => (
          <Pill
            item={item}
            key={item.email}
            onClick={() => handlePillRemoval(item)}
          />
        ))}
        {/* Input SearchBox */}
        <input
          type="text"
          ref={InputRef}
          className="serch-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Here...."
        />
      </div>
      {/* display suggestions */}
      <ul className="select-suggestion">
        {suggestion?.users?.map((item, index) => {
          return !selectedUserSet.has(item.email) ? (
            <li
              key={item.email}
              onClick={() => handleSuggestionClick(item)}
              className={index === ActiveIndex ? "Active" : ""}
            >
              <img src={item.image} alt={item.domain} />
              <span>
                {item.firstName} {item.lastName}
              </span>
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
