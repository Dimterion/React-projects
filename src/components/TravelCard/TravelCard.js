import "./travelCard.css";

function TravelCard(props) {
  return (
    <div className="travelCard-container">
      <img
        className="travelCard-image"
        src={props.imageUrl}
        alt={props.title}
      />
      <div>
        <div className="location-container">
          <h3 className="location">
            <i className="fa-solid fa-location-dot"></i>
            {props.location}
          </h3>
          <a className="location-link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="location-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TravelCard;
