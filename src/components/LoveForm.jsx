import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const LoveForm = ({ addCouple }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCouple(fname, lname);
    setFname("");
    setLname("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-around">
          <FormGroup className="col-5 text-center">
            <Label>Enter Your Name</Label>
            <Input
              type="text"
              placeholder="your name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup className="col-5 text-center">
            <Label>Enter Your Crush's name</Label>
            <Input
              type="text"
              placeholder="crush's name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            ></Input>
          </FormGroup>
        </div>
        <div className="text-center mt-3">
          <Button type="submit" className="btn-danger">
            Add Couple
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoveForm;
