import { Form, FormGroup, Input, Label } from "reactstrap";
import PetButton from "../../custom/PetButton";

const SignUp = (props) => {
  // TODO: Create state variables for first name, last name, email, and password using the useState hook. The initial value for first name should be "John", the initial value for last name should be "Doe", the initial value for email should be "

  // TODO: Create a function called handleSubmit that will console.log("Click Worked")

  // TODO: Add the state variables to the input fields for first name, last name, email, and password to create a dual binding

  // TODO: Create the function responsible for adding the new user to the database
  
  return (
    <>
      <div
        className="d-flex justify-content-center mt-5"
        style={{ height: "50vh" }}
      >
        <div
          className="secondary-background p-5 rounded"
          style={{ width: "450px", height: "530px" }}
        >
          <h2 className="text-center font-primary bold">SIGN UP FORM</h2>
          {/* Form Goes Here */}
          <Form>
            {/* Form Group for First Name */}
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
              />
            </FormGroup>
            {/* Form Group End First Name */}

            {/* Form Group for Last Name */}
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
              />
            </FormGroup>
            {/* Form Group End Last Name */}

            {/* Form Group for Email */}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </FormGroup>
            {/* Form Group End Email */}
            {/* Form Group for Password */}
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </FormGroup>
            {/* Form Group End Password */}

            {/* Button Here */}
            <PetButton onClick={() => console.log("Click Worked")}>
              SIGN UP
            </PetButton>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
