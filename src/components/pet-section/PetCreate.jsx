import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API_PET_CREATE } from "../../constants/endpoints";
import PetButton from "../custom/PetButton";

const PetCreate = (props) => {
  // TODO: Create state variables for title, description, and imageURL using the useState hook. The initial value for title should be "Awesome Pet", the initial value for description should be "No accidents today!", and the initial value for imageURL should be "https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80".

  const [title, setTitle] = useState("Awesome Pet");
  const [description, setDescription] = useState("No Accidents Today");
  const [imageURL, setImageURL] = useState(
    "https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  );

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Submit Clicked");
      // Headers
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      //  ! Make sure you add a authorization to the headers if you need a token for that route
      myHeaders.append("Authorization", props.token);
      // Request Body
      let body = {
        title: title,
        description: description,
        imageURL: imageURL,
      };

      // Request Options
      let requestOption = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };
      // Send Request
      let response = await fetch(API_PET_CREATE, requestOption);
      // Response Object
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="d-flex neutral-background rounded p-5 flex-column">
        <h2 className="font-primary text-center">Create a Pet Post</h2>
        <Form className="w-100">
          {/* Form Group Title */}
          <FormGroup>
            <Label for="title">Title</Label>

            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="title"
              name="title"
              placeholder="Enter Pet Title"
              type="text"
            />
          </FormGroup>
          {/* Form Group Description */}
          <FormGroup>
            <Label for="description">Description</Label>

            <Input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="description"
              name="description"
              placeholder="Enter Description"
              type="textarea"
            />
          </FormGroup>
          {/* Form Group Image URL */}
          <FormGroup>
            <Label for="title">Image URL</Label>

            <Input
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
              id="imageURL"
              name="imageURL"
              placeholder="Enter Image URL"
              type="text"
            />
          </FormGroup>

          <img
            style={{ width: "100%", margin: "10px", borderRadius: "10px" }}
            src={imageURL}
            alt={title}
          />

          <PetButton onClick={handleSubmit}>Submit</PetButton>
        </Form>
      </div>
    </>
  );
};

export default PetCreate;
