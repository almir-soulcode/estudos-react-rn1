import imageMusic1 from "../../assets/images/1.png";
import imageMusic2 from "../../assets/images/2.png";
import imageMusic3 from "../../assets/images/3.png";
import "./Musics.css";

export function Musics() {
    return (
        // fragment
        <>
            <div className="music">
                <img src={imageMusic1} />
                <h3>5GB</h3>
                <span>Node e Modules</span>
            </div>
            <div className="music">
                <img src={imageMusic2} />
                <h3>Oi React</h3>
                <span>Zé HTML e CSS</span>
            </div>
            <div className="music">
                <img src={imageMusic3} />
                <h3>LetiCSSia</h3>
                <span>Zé Almir</span>
            </div>
        </>
    );
}