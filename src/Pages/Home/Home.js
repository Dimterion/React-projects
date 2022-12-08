import { Link } from "react-router-dom";
import businessCardImg from "../../assets/businessCardImg.png";
import travelJournalImg from "../../assets/travelJournalImg.png";
import memeGeneratorImg from "../../assets/memeGeneratorImg.png";
import tenziesGameImg from "../../assets/tenziesGameImg.png";
import "./home.css";

function Home() {
  return (
    <section>
      <div className="home-header">
        <h1>React projects</h1>
        <h2>
          Here are several React projects I've built while doing React course on{" "}
          <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
            Scrimba
          </a>
          .
        </h2>
        <h3>This site was created with React and React Router.</h3>
        <p>
          You can navigate through the projects on top of each page or using the
          links below on this page.
        </p>
      </div>
      <div className="home-links">
        <Link to="/business-card">
          <img src={businessCardImg} alt="Business Card section cover" />
        </Link>
        <Link to="/travel-journal">
          <img src={travelJournalImg} alt="Travel Journal section cover" />
        </Link>
        <Link to="/meme-generator">
          <img src={memeGeneratorImg} alt="Meme Generator section cover" />
        </Link>
        <Link to="/tenzies-game">
          <img src={tenziesGameImg} alt="Tenzies Game section cover" />
        </Link>
      </div>
    </section>
  );
}

export default Home;
