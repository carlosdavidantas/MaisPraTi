import "../reset.css";
import "./Home.css";
import { VscSearch } from "react-icons/vsc";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from "react";
import { getMovies } from "../../services/tmdbAPI.js";
import FilmItem from "../../components/filmItem/filmItem.jsx";

function Home() {
  const [searchContent, setSearchContent] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchPageNumber, setSearchPageNumber] = useState([0, 0]);
  const [pagesContent, setPagesContent] = useState([]);

  async function fetchMovies(page = 1) {
    const response = await getMovies(searchContent, page);
    setSearchPageNumber([response.page, response.total_pages]);

    const results = response.results.sort((a, b) =>
      b.release_date.localeCompare(a.release_date)
    );

    setPagesContent([...pagesContent, response]);
    setMovies(results);
  }

  return (
    <section className="home-background">
      <section className="search-section">
        <h1>Buscador de filmes</h1>
        <div className="search-input-background">
          <input
            className="search-input"
            value={searchContent}
            onChange={event => setSearchContent(event.target.value)}
            onKeyDown={
              event => {
                if (event.key === "Enter" && searchContent.trim() != "") {
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
          {movies.map(movie => (
            <li key={movie.id}>
              <FilmItem
                title={movie.title}
                year={movie.release_date?.slice(0, 4)}
                poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                onDetails={() => {/* ação ao clicar */ }}
              />
            </li>
          ))}
        </ul>
        <section className="search-pages-background">
          <div className="search-page-field">
            <button
              className="page-button"
              onClick={() => {
                if (searchPageNumber[0] > 1) {
                  if (pagesContent[searchPageNumber[0] - 1] !== undefined) {
                    setSearchPageNumber([searchPageNumber[0] - 1, searchPageNumber[1]]);
                    setMovies(pagesContent[searchPageNumber[0] - 2].results);
                  } else {
                    fetchMovies(searchPageNumber[0] - 1);
                  }
                }
              }}
            >
              <GrFormPrevious className="page-icon" />
            </button>

            <p className="search-page-number">{searchPageNumber[0]} / {searchPageNumber[1]}</p>

            <button
              className="page-button"
              onClick={() => {
                if (searchPageNumber[0] < searchPageNumber[1]) // true
                  if (pagesContent[searchPageNumber[0]] !== undefined) {
                    setSearchPageNumber([searchPageNumber[0] + 1, searchPageNumber[1]]);
                    setMovies(pagesContent[searchPageNumber[0]].results);
                  } else {
                    fetchMovies(searchPageNumber[0] + 1);
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
        <ul className="favorites" />
      </section>
    </section>
  );
}

export default Home
