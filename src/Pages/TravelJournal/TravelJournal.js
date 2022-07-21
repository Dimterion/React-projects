import "./travelJournal.css";
import earthIcon from "../../assets/earth-icon.png";
import { travelData } from "../../assets/travelData";
import TravelCard from "../../components/TravelCard/TravelCard";

function TravelJournal() {
  const travelCards = travelData.map((data) => {
    return <TravelCard key={data.id} {...data} />;
  });

  return (
    <section className="travelJournal-section">
      <div className="journal-header">
        <img className="earth-icon" src={earthIcon} alt="Earth icon" />
        <h1 className="journal-title">Travel Journal (France)</h1>
      </div>
      <div className="cards-container">{travelCards}</div>
    </section>
  );
}

export default TravelJournal;
