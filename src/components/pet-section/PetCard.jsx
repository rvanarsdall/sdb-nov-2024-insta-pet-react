import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { API_PET_DELETE } from "../../constants/endpoints";

const PetCard = (props) => {
  return (
    <>
      <Card
      className="mb-3"
        style={{
          width: "100%",
        }}
      >
        {props.petFeedItem?.imageURL && (
          <img alt="Sample" src={props.petFeedItem?.imageURL} />
        )}
        <CardBody>
          <CardTitle tag="h5">{props.petFeedItem.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Posted By: {props.petFeedItem?.ownerId?.firstname}
          </CardSubtitle>
          <CardText>{props.petFeedItem.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default PetCard;
