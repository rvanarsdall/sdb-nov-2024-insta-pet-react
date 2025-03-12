import "./PetButton.css";
const PetButton = (props) => {
  return (
    <div className="pet-button" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default PetButton;
