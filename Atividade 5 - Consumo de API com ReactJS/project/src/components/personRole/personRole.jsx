import "./personRole.css";
import { TbFaceIdError } from "react-icons/tb";

function PersonRole({ role, poster, name }) {
    const truncateText = (text, limit = 12) => {
        if (!text)
            return "";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    return (
        <section className="person-role-background">
            <p
                className="person-role-title"
                title={role}
            >
                {truncateText(role)}
            </p>
            <div className="person-role-img-background">
                {poster == null ? (
                    <TbFaceIdError className="person-role-no-poster" size={80} /> 
                ) : (
                    <img
                        className="person-role-img"
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        alt={name}
                    />
                )}
            </div>
            <p
                className="person-role-name"
                title={name}
            >
                {truncateText(name, 14)}
            </p>
        </section>
    );
}

export default PersonRole;