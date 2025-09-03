import { useState, useEffect } from "react";

import { VscSearch } from "react-icons/vsc";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import { getMovies } from "../../services/tmdbAPI.js";
import { getJsonFilmsOnLocalStorage } from "../../utils/localstorageHandler.js";

import FilmResultItem from "../../components/filmResultItem/filmResultItem.jsx";
import FilmFavoriteItem from "../../components/filmFavoriteItem/filmFavoriteItem.jsx";
import ShowCompleteFilmModal from "../../components/showCompleteFilmModal/showCompleteFilmModal.jsx";

import "../reset.css";
import "./Home.css";


function Home() {
  const [userQuery, setuserQuery] = useState("");
  const [userQuerySearchResults, setUserQuerySearchResults] = useState([]);
  const [pages, setPages] = useState([0, 0]);
  const [pagesContent, setPagesContent] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const [isCompleteFilmInfoModal, setIsCompleteFilmInfoModal] = useState(false);
  const [completeFilmData, setCompleteFilmData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  function updateSeachResults(newResultsState) {
    setUserQuerySearchResults(newResultsState);
  }

  function updateFavorites() {
    const jsonFavMovies = getJsonFilmsOnLocalStorage();
    const favMovies = jsonFavMovies ? JSON.parse(jsonFavMovies) : [];
    setFavorites(favMovies);
    setUserQuerySearchResults(userQuerySearchResults);
  }

  async function fetchMovies(page = 1) {
    setIsLoading(true);
    const response = await getMovies(userQuery, page);
    setPages([response.page, response.total_pages]);

    const results = response.results.sort((a, b) =>
      b.release_date.localeCompare(a.release_date)
    );

    results.forEach(movie => movie.isFavorite = false);

    const moviesWithFavorite = [...results];

    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < favorites.length; j++) {
        if (results[i].id == favorites[j].id) {
          moviesWithFavorite[i].isFavorite = true;
        }
      }
    }

    if(page == 1) {
      setPagesContent([response]);
    } else {
      setPagesContent([...pagesContent, response]);
    }
    
    setUserQuerySearchResults(moviesWithFavorite);
    setIsLoading(false);
  }

  useEffect(() => {
    updateFavorites();
  }, []);

  return (
    <section className="home-background">
      {isCompleteFilmInfoModal && (
        <ShowCompleteFilmModal
          data={completeFilmData}
          setIsCompleteFilmInfoModal={setIsCompleteFilmInfoModal}
        />
      )}

      <section className="search-section">
        <h1>Buscador de filmes</h1>
        <div className="search-input-background">
          <input
            className="search-input"
            value={userQuery}
            onChange={event => setuserQuery(event.target.value)}
            onKeyDown={
              event => {
                if (event.key === "Enter" && userQuery.trim() != "") {
                  fetchMovies();
                }
              }
            }
          />
          <button
            className="search-button"
            onClick={fetchMovies}
          >
            <VscSearch />
          </button>
        </div>

        <ul className="search-results">
          {isLoading ? (
            <li className="loading">
              <div className="spinner"></div>
            </li>
          ) : (
            userQuerySearchResults.map(movie => (
              <li key={movie.id}>
                <FilmResultItem
                  data={movie}
                  updateFavorites={updateFavorites}
                  setIsCompleteFilmInfoModal={setIsCompleteFilmInfoModal}
                  setCompleteFilmData={setCompleteFilmData}
                />
              </li>
            ))
          )}
        </ul>
        <section className="search-pages-background">
          <div className="search-page-field">
            <button
              className="page-button"
              onClick={() => {
                if (pages[0] > 1) {
                  if (pagesContent[pages[0] - 1] !== undefined) {
                    setPages([pages[0] - 1, pages[1]]);
                    setUserQuerySearchResults(pagesContent[pages[0] - 2].results);
                  } else {
                    fetchMovies(pages[0] - 1);
                  }
                }
              }}
            >
              <GrFormPrevious className="page-icon" />
            </button>

            <p className="search-page-number">{pages[0]} / {pages[1]}</p>

            <button
              className="page-button"
              onClick={() => {
                if (pages[0] < pages[1]) // true
                  if (pagesContent[pages[0]] !== undefined) {
                    setPages([pages[0] + 1, pages[1]]);
                    setUserQuerySearchResults(pagesContent[pages[0]].results);
                  } else {
                    fetchMovies(pages[0] + 1);
                  }

              }}
            >
              <GrFormNext className="page-icon" />
            </button>
          </div>

        </section>
      </section>

      <section className="favorites-section">
        <h1>Favoritos</h1>
        <ul className="favorites">
          {favorites.map(favMovie => (
            <li key={favMovie.id}>
              <FilmFavoriteItem
                data={favMovie}
                userQuerySearchResults={userQuerySearchResults}
                updateFavorites={updateFavorites}
                updateSeachResults={updateSeachResults}
                setIsCompleteFilmInfoModal={setIsCompleteFilmInfoModal}
                setCompleteFilmData={setCompleteFilmData}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Home
