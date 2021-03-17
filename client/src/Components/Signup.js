import { set } from "mongoose";
import React, {useState} from "react";
import styled from "styled-components";
import "../styles.scss";

import axios from "axios";

function Signup() {

  /*setting up the useState for each input field*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = e => {

    axios.post('http://localhost:5000/api/signup/signupform', {
      name: name,
      email: email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    e.preventDefault();
    setName("");
    setEmail("");

  }

  return (
    <Package.Wrapper className="container-fluid px-0">
      <Package.Row>
        <div className="col-md-12 text-center">
          <h2 className="display-3">Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Form.Group className="mt-5" onSubmit = {onSubmit}>
            <Form.Input onChange={e => setName(e.target.value )} value={name} type="text" placeholder="Name" />
            <Form.Input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="Email Address" />
            <Form.Input type="submit" value="Submit" />
          </Form.Group>
        </div>
      </Package.Row>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.div`
    overflow-x: hidden;
    z-index: 1;
    margin-bottom: 50px;
  `,

  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `
};

const Form = {
  Group: styled.form`
    display: flex;
    flex-wrap: wrap;

    & > input {
      flex: 1 1 2rem;
      margin: 0.5rem;

      &[type="email"] {
        flex: 3 1 4rem;
      }
    }
  `,

  Input: styled.input`
    border: none;
    background: hsl(0, 0%, 93%);
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    &[type="submit"] {
      background: #35dba9;
      color: #ffffff;
      box-shadow: 0 0.75rem 0.5rem -0.5rem #a8e6cd;
    }
  `
};
export default Signup;
