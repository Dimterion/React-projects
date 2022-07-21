import trollIcon from "../../assets/troll-face-icon.png";
import "./memeGeneratorHeader.css";

function MemeGeneratorHeader() {
  return (
    <header className="memeGenerator-header">
      <img
        className="memeGenerator-header-image"
        src={trollIcon}
        alt="Troll face"
      />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default MemeGeneratorHeader;
