import "./tenzieElement.css";

function TenzieElement(props) {
  return (
    <div
      className={props.isHeld ? "tenzieElement tenzieClicked" : "tenzieElement"}
    >
      {props.value}
    </div>
  );
}

export default TenzieElement;
