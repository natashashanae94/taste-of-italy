import React, { useState } from "react";
import styled from "styled-components";
import "../styles.scss";

import axios from "axios";

function HeroSection({
  img,
  imgStart,
  alt,
  topLine,
  heading,
  subheading,
  description
}) {

/*Setting up useState for each input field.*/
  const [name, setName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [date, setDate] = useState("");
  const [time,setTime] = useState("");

 const onSubmit = e => {

     axios.post('http://localhost:5000/api/users/reservation', {
        name: name,
        numberOfGuests: numberOfGuests,
        date: date,
        time: time
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      e.preventDefault();
      setName("");
      setNumberOfGuests("");
      setDate("");
      setTime("");
 }

  return (
    <Package.Wrapper
      className="container-fluid px-0"
      style={{ backgroundColor: "#a8e6cd" }}
    >
      <div className="row">
        <Package.Box1 className="col-md-6" alt={alt}></Package.Box1>
        <Package.Box2 className="col-md-6" alt={alt}>
          <Package.Box2Content>
            <h2 className="mt-5" style={{ fontStyle: "italic" }}>
              {topLine}
            </h2>
            <h1 className="display-3">{heading}</h1>
            <p> {description} </p>

            <form className="mt-5" onSubmit = {onSubmit} >
              <h3 className="mb-4">Reservations</h3>
              <div class="form-group">
                <Form.Input onChange={ e => setName(e.target.value) } value={name} type="text" placeholder="Full Name" />
              </div>

              <div class="form-row">
                <div class="form-group col-md-4">
                  <Form.Input
                    onChange={ e => setNumberOfGuests(e.target.value) }
                    value={numberOfGuests}
                    type="text"
                    class="form-control"
                    placeholder="# of Guests"
                  />
                </div>
                <div class="form-group col-md-4">
                  <Form.Input
                    onChange={ e => setDate(e.target.value) }
                    value={date}
                    type="date"
                    class="form-control"
                    placeholder="Date"
                  />
                </div>

                <div class="form-group col-md-4">
                  <Form.Input onChange={ e => setTime(e.target.value) } value={time} type="time" class="form-control" />
                </div>
              </div>
              <Form.Button type="submit" placeholder="Submit" />
            </form>
          </Package.Box2Content>
        </Package.Box2>
      </div>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.main`
    overflow-x: hidden;
    z-index: 1;
  `,

  Box1: styled.div`
    background-image: url("images/steak-and-salad.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    min-height: 550px;

    @media only screen and (max-width: 40em) {
      order: 2;
      min-height: 300px;
    }
  `,

  Box2: styled.div`
    @media only screen and (max-width: 40em) {
      padding: 50px;
    }
  `,

  Box2Content: styled.div`
    @media only screen and (min-width: 40em) {
      order: 1;
      padding: 50px 115px 0px 50px;
    }
  `
};

const Form = {
  Input: styled.input`
    display: block;
    width: 100%;
    border: none;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
  `,

  Button: styled.input`
    border: none;
    background: hsl(0, 0%, 93%);
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    background: #35dba9;
    color: #ffffff;
    box-shadow: 0 0.75rem 0.5rem -0.5rem #a8e6cd;
  `
};
export default HeroSection;
