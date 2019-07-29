import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ListImage from "../ListImage/ListImage";
import Loading from "../Loading/Loading";
import AppContext from "../../Contexts/AppContext";
import { fetchUnsplash } from "../../Functions/fetchUnsplash";
import "./App.css";

const App = () => {
  const [listImage, setListImage] = useState([]);
  const [query, setQuery] = useState("");
  const [isFetchData, setIsFetchData] = useState(false);
  const [loading, setLoading] = useState(false);
  // handle scroll
  const handleScroll = useCallback(async () => {
    // check at the bottom of window
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.body.scrollHeight
    ) {
      setIsFetchData(true);
    }
  }, []);
  // add an event scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // fetch data
  useEffect(() => {
    if (isFetchData) {
      const fetchData = async () => {
        setLoading(true);
        const result = await fetchUnsplash({
          query,
          per_page: listImage.length + 10
        });
        setIsFetchData(false);
        setListImage(result);
        setLoading(false);
      };
      fetchData();
    }
  }, [isFetchData]);
  return (
    <AppContext.Provider
      value={{ listImage, setListImage, setLoading, setQuery }}
    >
      <div className="ui container ptb-10">
        <SearchBar />
        <ListImage listImage={listImage} />
        {loading && <Loading />}
      </div>
    </AppContext.Provider>
  );
};

export default App;
