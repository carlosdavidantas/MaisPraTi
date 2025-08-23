import "../reset.css";
import "./Home.css";
import { VscSearch } from "react-icons/vsc";

function Home() {
  return (
    <section class="background">
      <section class="search-section">
        <h1>Buscador de filmes</h1>
        <div class="search-input-background">
          <input class="search-input" />
          <button class="search-button"><VscSearch/></button>
        </div>

        <ul class="search-results" />
      </section>

      <section class="favorites-section">
        <h1>Favoritos</h1>
        <ul class="favorites"/>
      </section>
    </section>
  );
}

export default Home
