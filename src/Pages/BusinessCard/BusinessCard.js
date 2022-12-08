import avatar from "../../assets/avatar.png";
import twitterIcon from "../../assets/twitter-icon.png";
import gitHubIcon from "../../assets/github-icon.png";
import "./businessCard.css";

function BusinessCard() {
  return (
    <section className="businessCard-section">
      <img className="profile-image" src={avatar} alt="Avatar" />
      <div className="profile-header">
        <h1 className="profile-title">Dmitrii</h1>
        <h2 className="profile-subtitle">Front-End Developer</h2>
        <a
          className="profile-link"
          href="https://dimterion.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          dimterion.github.io
        </a>
        <a
          className="profile-contact-btn"
          href="https://www.linkedin.com/in/dmitrii-p/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
      <div>
        <h3 className="profile-text-title">About</h3>
        <p className="profile-text">
          I'm a front-end developer interested in learning new technologies by
          applying them to the projects I work on. I also like writing about my
          experience. You can check my Twitter and GitHub pages by visiting the
          links at the bottom.
        </p>
        <h3 className="profile-text-title">Interests</h3>
        <p className="profile-text">
          Blogs, writing (technical writing / stories). Video games. Reading.
          Random walks. Podcasts & music. PC building & hardware.
        </p>
      </div>
      <div className="profile-footer">
        <a
          href="https://twitter.com/Dimterion"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/Dimterion" target="_blank" rel="noreferrer">
          <img src={gitHubIcon} alt="GitHub icon" />
        </a>
      </div>
    </section>
  );
}

export default BusinessCard;
