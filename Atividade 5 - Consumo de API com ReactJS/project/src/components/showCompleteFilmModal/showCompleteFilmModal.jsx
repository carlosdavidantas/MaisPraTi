import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { getCredits } from "../../services/tmdbAPI.js";
import PersonRole from "../personRole/personRole.jsx";
import "./showCompleteFilmModal.css";

function ShowCompleteFilmModal({ data, setIsCompleteFilmInfoModal }) {
    const [castData, setCastData] = useState([]);
    const [productionTeamData, setProductionTeamData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const credits = getCredits(data.id)
        credits.then(result => {
            setCastData(result.cast);
            setProductionTeamData(result.crew);
        });
        setIsLoading(false);
    }, []);

    return (
        <section className="modal-overlay">
            <section className="film-info-modal-background">
                <button
                    className="close-film-button"
                    onClick={() => {
                        setIsCompleteFilmInfoModal(false);
                    }}
                >
                    <IoCloseSharp className="close-film-icon" />
                </button>
                <div className="poster-and-info-background">
                    <div className="complete-film-poster-background">
                        <img className="complete-film-poster" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                    </div>
                    <div className="complete-film-info-background">
                        <h1 className="complete-film-title">{data.title}</h1>
                        <p className="complete-film-synopsis">{data.overview}</p>
                        <div className="complete-film-year-and-popularity-background">
                            <p className="complete-film-infos-text">Ano: {data.release_date?.slice(0, 4)}</p>
                            <p className="complete-film-infos-text" id="vote">Nota: {data.vote_average}</p>
                        </div>
                    </div>
                </div>

                <section className="cast-background">
                    <h2 className="titles-info">Elenco:</h2>
                    <ul className="cast-list">
                        {isLoading ? (
                            <li className="loading">
                                <div className="spinner"></div>
                            </li>
                        ) : (
                            castData.map(person => (
                                <li key={person.id}>
                                    <PersonRole
                                        role={person.character}
                                        poster={person.profile_path}
                                        name={person.name}
                                    />
                                </li>
                            ))
                        )}






                    </ul>
                </section>

                <section className="staff-background">
                    <h3 className="titles-info">Produção:</h3>
                    <ul className="staff-list">
                        {isLoading ? (
                            <li className="loading">
                                <div className="spinner"></div>
                            </li>
                        ) : (
                            productionTeamData.map(person => (
                                <li key={person.credit_id}>
                                    <PersonRole
                                        role={person.job}
                                        poster={person.profile_path}
                                        name={person.name}
                                    />
                                </li>
                            ))
                        )}
                    </ul>
                </section>
            </section>
        </section>
    );
}

export default ShowCompleteFilmModal;