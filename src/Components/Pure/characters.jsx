import React, { useState, useEffect } from "react";
import { URL_CHARACTERS } from "../../URL/urlnames";
import axios from "axios";
import "./../../styles/characters.css";
import { useNavigate } from "react-router-dom";

const FoundCharacters = () => {
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const FetchCharacters = async (response) => {
    await axios(URL_CHARACTERS)
      .then(function (response) {
        const res = response.data.results;
        setCharacters(res);
      })
      .catch(function (error) {
        alert("something error has happened", { error });
      })
      .finally(function (response) {});
  };

  useEffect(() => {
    FetchCharacters();
  }, []);

  let FilteredCharacters = [];
  if (!search) {
    FilteredCharacters = characters;
  } else {
    FilteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <div className="body">
      <input
        className="placeholder1"
        type="text"
        placeholder="character name"
        value={search}
        onChange={handleInputChange}
      />
      <button className="button2" onClick={() => navigate("/")}>
        Logout
      </button>
      <div className="colums-container">
        {FilteredCharacters &&
          FilteredCharacters.map((character) => (
            <div key={character.id}>
              <div className="colums1">
                <img
                  src={character.image}
                  width="100"
                  height="100"
                  alt="Imagine not found"
                />
              
              <div className="description">
                <h2>{character.name}</h2>
                <h3>{character.status}</h3>
                <h3>{character.species}</h3>
              </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoundCharacters;
