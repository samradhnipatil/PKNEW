import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  // const [category, setCategory] = useState("general");
  // const [source, setSource] = useState();
  // const [index, setIndex] = useState(1);
  // const [darkTheme, setDarkTheme] = useState(true);

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI());
    setNews(data);
    // console.log("loggggggggggggggggggggggggggg--",data)
  };

  // const fetchNewsfromSource = async () => {
  //   try {  
  //     const { data } = await axios.get(getSourceAPI(source));
  //     setNews(data);
  //     setIndex(1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchNews();
    
  });


  // useEffect(() => {
  //   fetchNewsfromSource();
  // }, [source]);

  return (
    <NewsContext.Provider  value={{
      news,
      fetchNews,
    }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
