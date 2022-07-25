import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <section className="error-section">
      <h1 className="error-header">Oh no! This page doesn't exist!</h1>
      <h2>Let's go back quickly while we still have time!</h2>
      <h3>Click the button and do it fast!</h3>
      <Link className="home-btn" to="/">
        Home
      </Link>
    </section>
  );
}

export default Error;
