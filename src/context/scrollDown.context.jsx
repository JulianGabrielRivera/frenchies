import { useEffect, useState, createContext, useRef } from "react";

const ScrollContext = createContext();

const ScrollDownProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const navClick = (e) => {
    console.log("hi");

    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, navClick }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollDownProvider };
