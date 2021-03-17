import React from "react";
import Mains from "../../Mains";
import Extras from "../../Extras";
import {mains,sides, drinks} from "./data";

function Menu(

) {
  return(
    <div>
      <div className="menu">
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
      </div>
    </div>
  );
}

export default Menu;