import avatar from "../../assets/avatar.png";
import twitterIcon from "../../assets/twitter-icon.png";
import gitHubIcon from "../../assets/github-icon.png";
import "./businessCard.css";

function BusinessCard() {
  return (
    <section className="businessCard-section">
      <img className="profile-image" src={avatar} alt="Avatar" />
      <div>
        <h1 className="profile-title">Dmitrii</h1>
        <h2 className="profile-subtitle">Frontend Developer</h2>
        <a className="profile-link" href="https://dimterion.github.io/">
          dimterion.github.io (Work in progress)
        </a>
      </div>
      <div className="profile-contact-btn">
        LinkedIn<br></br>(To be added later)
      </div>
      <div>
        <h3 className="profile-text-title">About</h3>
        <p className="profile-text">
          I'm a frontend developer interested in learning new technologies by
          applying them to the projects I work on. I also like writing about my
          experience. You can check my Twitter and GitHub pages by visiting the
          links at the bottom.
        </p>
        <h3 className="profile-text-title">Interests</h3>
        <p className="profile-text">
          Blogs, writing stories. Video games. Reading. Movie goer. Random walks
          while listening to podcasts or music.
        </p>
      </div>
      <div className="profile-footer">
        <a href="https://twitter.com/Dimterion">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/Dimterion">
          <img src={gitHubIcon} alt="GitHub icon" />
        </a>
      </div>
    </section>
  );
}

export default BusinessCard;
