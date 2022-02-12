import React from 'react'

const Bbq = ({ name, description, price, img, link}) => {
  return (
    <div className="miscContainer">
      <img src={img} alt={description} />
      <h3>{name}</h3>
      <h4 className="originalPrice">Original Price: ${ price }</h4>
      <h4>My Price: ${Math.round(price - price * 0.2).toFixed(2)}</h4>
      <p>{description}</p>
      <ul>
        <li><strong>Link To Item:</strong> <a href={link} target="_blank">
          Click Me
        </a></li>
      </ul>
    </div>
  )
}

export default Bbq