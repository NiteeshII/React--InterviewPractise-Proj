import React, { createContext, useContext, useEffect, useState } from "react";
import { pronouns } from "../Components/Data/pronouns";

const TextAnalysingData = createContext();

export const useTextData = () => {
  return useContext(TextAnalysingData);
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    words: 0,
    character: 0,
    sentense: 0,
    paragraphs: 0,
    wordslist: [],
  });

  const [updates, setupdates] = useState({
    pronounCount: 0,
    longestWord: 0,
  });

  const handleChange = (e) => {
    let content = e.target.value;
    let newcontent = content.trim();
    let sentences = content.split(/[.!?]+/).filter(Boolean);
    let paragraphs = content.split(/\r*\n/).filter(Boolean);
    let wordslist = newcontent.split(/\s/).filter(Boolean);

    setState({
      ...state,
      words: wordslist.length,
      character: content.length,
      sentense: sentences.length,
      paragraphs: paragraphs.length,
      wordslist: wordslist,
    });
  };

  const pronounCount = (array, Pronouns) => {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < Pronouns.length; i++) {
      map.set(Pronouns[i], i);
    }

    for (let i = 0; i < array.length; i++) {
      if (map.has(array[i])) {
        count++;
      }
    }

    return count;
  };

  function longest(arr) {
    if (arr.length > 0) {
      let index = arr.reduce((acc, curr, i) => {
        if (curr.length > arr[acc].length) {
          return i;
        }
        return acc;
      }, 0);

      return arr[index];
    }
  }

  useEffect(() => {
    const pronounCnt = pronounCount(state.wordslist, pronouns);
    const longestword = longest(state.wordslist);
    setupdates({
      ...updates,
      longestWord: longestword,
      pronounCount: pronounCnt,
    });
  }, [state]);

  return (
    <TextAnalysingData.Provider value={{ state, handleChange, updates }}>
      {children}
    </TextAnalysingData.Provider>
  );
};

export default ContextProvider;
