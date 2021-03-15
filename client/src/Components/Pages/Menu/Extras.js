import React from "react";

function Extras({type, items}) {
    return(
        <section className="extras">
            <h2 className="extra-heading">{type}</h2>
            {items.map((item, index) => (
                <article className="menu-item" key={index}>
                    <div className="extras-name">{item.name}
                    <Input type={type} name={item.name} index={index} />
                    <strong className="extras-price">${item.price}</strong></div>
                </article>
            ))}
        </section>
    );
}

export default Extras;