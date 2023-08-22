import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const perPage = 10;
    const ENDPOINT = "https://api.thecatapi.com/v1/images/";
    const URL = `${ENDPOINT}search?limit=${perPage}&page=${currentPage}${breed}`;
    fetch(URL)
      .then((response) => response.json())
      .then((newFollowers) => setData(newFollowers));
  }, [breed]);

  useEffect(() => {
    const perPage = 10;
    const ENDPOINT = "https://api.thecatapi.com/v1/images/";
    const URL = `${ENDPOINT}search?limit=${perPage}&pages=${currentPage}&order=DESC`;
    fetch(URL)
      .then((response) => response.json())
      .then((newFollowers) =>
        setData((prevFollowers) => [...prevFollowers, ...newFollowers])
      );
  }, [currentPage]);

  return (
    <AuthContext.Provider
      value={{
        breed,
        setBreed,
        data,
        setData,
        currentPage,
        setCurrentPage,
        name,
        setName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
