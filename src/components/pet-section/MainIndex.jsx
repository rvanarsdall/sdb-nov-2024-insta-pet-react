import React, { useState, useEffect } from "react";

import { Col, Container, Row } from "reactstrap";
import PetCreate from "./PetCreate";

const MainIndex = (props) => {
  // TODO: Create a state variable for petFeedItems using the useState hook initialze the state variable to an empty array

  // TODO: Create a function called fetchPetFeed that will make a fetch request to get all the petFeedItems

  // TODO: Create a useEffect hook that will call the fetchPetFeed function when the component mounts

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
        </Row>
      </Container>
    </>
  );
};

export default MainIndex;
