import React, { useState, useContext } from "react";
import AppContext from "../../Contexts/AppContext";
import { fetchUnsplash } from "../../Functions/fetchUnsplash";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { setListImage, setLoading, setQuery } = useContext(AppContext);
  const onSubmit = async event => {
    event.preventDefault();
    // loadding
    setLoading(true);
    setQuery(value);
    setListImage([]);
    // set list of images
    const result = await fetchUnsplash({ query: value });
    setListImage(result);
    setLoading(false);
  };
  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
