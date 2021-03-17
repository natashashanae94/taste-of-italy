import React from "react";
import Mains from "../../Mains";
import Extras from "../../Extras";
import styled from "styled-components";
import {mains,sides, drinks} from "./data";

function Menu() {
  return(
    <PageBody.Container>
      <MenuBody.Wrapper className="menu">
        <Mains type="Main Course" meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
      </MenuBody.Wrapper>
    </PageBody.Container>
  );
}

export default Menu;

const PageBody = {
  Container: styled.div`
    background-color: #a8e6cd;
    width: 100%;
    height: auto;
    padding: 10rem 0rem 5rem 0rem;
  `
}

const MenuBody = {
  Wrapper: styled.div`
    background-color: #fffff;
    padding: 5rem;
    margin: 0 auto;
    max-width: 50%;
    background-color:#ffffff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

    @media (min-width: 660px) {
      display: grid;
      grid-gap: 4rem;
      grid-template-columns: 1fr 1fr;
    } 

    @media (max-width: 40rem) {
      max-width: 100%;
    }
  `
}

