import React, { useState, useEffect } from "react";

import { Col, Container, Row } from "reactstrap";
import PetCreate from "./PetCreate";
import PetFeed from "./PetFeed";
import { API_PET_VIEW_ALL } from "../../constants/endpoints";

const MainIndex = (props) => {
  // TODO: Create a state variable for petFeedItems using the useState hook initialze the state variable to an empty array
  const [petFeedItems, setPetFeedItems] = useState([]);

  // TODO: Create a function called fetchPetFeed that will make a fetch request to get all the petFeedItems

  async function fetchPetFeed() {
    // Headers
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //  ! Make sure you add a authorization to the headers if you need a token for that route
    myHeaders.append("Authorization", props.token);

    // Request Options
    let requestOption = {
      method: "GET",
      headers: myHeaders,
    };

    // Send Request
    let response = await fetch(API_PET_VIEW_ALL, requestOption);
    // Response Object
    let data = await response.json();
    console.log(data.pets);
    setPetFeedItems(data.pets)
  }

  // TODO: Create a useEffect hook that will call the fetchPetFeed function when the component mounts

  useEffect(() => {
    fetchPetFeed();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <h3>Hello from MainIndex</h3>
          {/* TODO: Create a Col with md="4" and wrap the PetCreate Component */}
          <Col md="4">
            <PetCreate token={props.token} />
          </Col>

          {/* TODO: Create a Col with a md="8" and wrap the PetFeed Around it*/}
          <Col md="8">
            <PetFeed petFeedItems={petFeedItems}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainIndex;
