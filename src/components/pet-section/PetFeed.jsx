import PetCard from "./PetCard";

const PetFeed = (props) => {
  return (
    <>
      <h3>Hello from PetFeed</h3>
      {props.petFeedItems?.map((petFeedItem, index) => (
        <PetCard key={index} petFeedItem={petFeedItem}/>
      ))}
    </>
  );
};

export default PetFeed;
