import React from "react";
import styled from "styled-components";
import "../styles.scss";

function Plates() {
  return (
    <Package.Wrapper className="container-fluid px-0">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center m-5 display-4">Popular Menu</h2>
        </div>
      </div>
      <Package.Row className="row">
        <div className="bowl col-md-3">
          <img src="images/ramen.png" alt="ramen" width="100%" />
          <div className="text-center">
            <p>Lorem ipsum dolor</p>
            <Price.Tag>$25</Price.Tag>
          </div>
        </div>
        <div className="bowl col-md-3">
          <img src="images/kabob.png" alt="kabob" width="100%" />
          <div className="text-center">
            <p>Lorem ipsum dolor</p>
            <Price.Tag>$25</Price.Tag>
          </div>
        </div>
        <div className="bowl col-md-3">
          <img src="images/salad.png" alt="salad" width="100%" />
          <div className="text-center">
            <p>Lorem ipsum dolor</p>
            <Price.Tag>$25</Price.Tag>
          </div>
        </div>
        <div className="bowl col-md-3">
          <img src="images/ramen.png" alt="ramen" width="100%" />
          <Price.Display className="text-center">
            <p>Lorem ipsum dolor</p>
            <Price.Tag>$25</Price.Tag>
          </Price.Display>
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
    background-color: #ffffff;
  `,

  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `
};

const Price = {
  Display: styled.div`
    height: 150px;
  `,

  Tag: styled.div`
    font-family: "Playfair Display", serif;
    font-size: 50px;
    color: #37bc96;
  `
};

export default Plates;
