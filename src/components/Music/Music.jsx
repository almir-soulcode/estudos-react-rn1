import "./Music.css";

export function Music({ image, title, author }) {
    return (
        <div className="music">
            <img src={image} />
            <h3>{title}</h3>
            <span>{author}</span>
        </div>
    );
}