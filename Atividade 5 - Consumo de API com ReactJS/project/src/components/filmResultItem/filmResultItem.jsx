import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdImageNotSupported } from "react-icons/md";
import "./filmResultItem.css";
import { setFilmOnLocalStorage, deleteFilmOnLocalStorage } from "../../utils/localstorageHandler.js";

function FilmResultItem({ data, updateFavorites, setIsCompleteFilmInfoModal, setCompleteFilmData }) {
    const [isFavorite, setIsFavorite] = useState(data.isFavorite);

    const toggleFavorite = () => {
        if (isFavorite) {
            deleteFilmOnLocalStorage(data.id);
            updateFavorites();
        } else {
            setFilmOnLocalStorage(data);
            updateFavorites();
        }
        data.isFavorite = !data.isFavorite;
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        setIsFavorite(data.isFavorite);
    }, [data.isFavorite]);

    return (
        <div className="film-item-background">
            {data.poster_path == null ? (
                <MdImageNotSupported className="person-role-no-poster" size={80} />
            ) : (
                <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={data.title}
                />
            )}
            {/* <img className="poster" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.title} /> */}
            <section className="info-background">
                <div className="title-and-year">
                    <p className="title">{data.title}</p>
                    <p className="year">{data.release_date?.slice(0, 4)}</p>
                </div>

                <section className="button-background">
                    <button
                        className="button"
                        onClick={() => {
                            setIsCompleteFilmInfoModal(true);
                            setCompleteFilmData(data);
                        }}
                    >
                        Visualizar
                    </button>

                    <button
                        className="favorite-button"
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? (
                            <MdFavorite className="favorite-icon" />
                        ) : (
                            <MdFavoriteBorder className="favorite-icon" />
                        )}
                    </button>
                </section>
            </section>
        </div>
    );
}

export default FilmResultItem;