import "./tenzieElement.css";

function TenzieElement(props) {
  return (
    <div
      className={props.isHeld ? "tenzieElement tenzieClicked" : "tenzieElement"}
      onClick={props.holdTenzie}
    >
      {props.value}
    </div>
  );
}

export default TenzieElement;
