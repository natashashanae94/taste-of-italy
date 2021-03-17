import React from "react";

function Extras({
    type,
    items
}) {
    return(
        <section className="extras">
            <h2 className="extras-heading">{type}</h2>
            {items.map((item, index) => (
                <article className="menu-item" key={index}>
                <div className="extras-name">{item.name}</div>
                <strong className="extras-price">${item.price}</strong>
                </article>
            ))}
        </section>
    );
}

export default Extras;