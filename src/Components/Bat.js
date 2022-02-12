import React from "react";

const Bat = ({
  name,
  description,
  price,
  sku,
  dimensions,
  material,
  mountPosition,
  weight,
  img,
  link,
}) => {
  return (
    <div className="batContainer">
      <img src={img} alt={description} />
      <h3>{name}</h3>
      <h4 className="originalPrice">Original Price: ${price}</h4>
      <h4>My price: ${Math.round(price - price * 0.2).toFixed(2)}</h4>
      <p>{description}</p>
      <ul>
        <li>
          <strong className="bold">SKU:</strong> {sku}
        </li>
        <li>
          <strong>DIMENSIONS:</strong> {dimensions} in
        </li>
        <li>
          <strong>MATERIAL:</strong> {material}
        </li>
        <li>
          <strong>MOUNT POSITION:</strong> {mountPosition}
        </li>
        <li>
          <strong>WEIGHT:</strong> {weight} lbs
        </li>
      </ul>
      <aside>
        <strong>ORIGINAL LINK TO ITEM:</strong>{" "}
        <a href={link} target="_blank">
          Click Me
        </a>
      </aside>
    </div>
  );
};

export default Bat;
