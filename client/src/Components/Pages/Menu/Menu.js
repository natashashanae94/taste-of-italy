import React from "react";

function Menu() {
  return <div>
     <section className="mains">
      {meals.map((meals, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{meals.name}</h3>
          <Input type="mains" name={name.name} index={index} />
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  </div>;
}

export default Menu;
