import React, { useState } from "react";
import Bbq from "./Bbq";

const BbqGList = () => {
  const [bbq, setBbq] = useState([
    {
      id: 14,
      name: "BBQ Dragon Fan",
      description:
        "The BBQ Dragon fan starts charcoal faster than a chimney without using lighter fluid. It controls the heat of grills and smokers, starts fireplaces and campfires, and does it all hands-free. Adjustable speed fan. 4 AA battery powered. Gooseneck for perfect positioning. Clip like NO OTHER. Works in the Chimney of Insanity, too!",
      price: 59.99,
      img: "https://bbqdragon-quickfix1.netdna-ssl.com/wp-content/uploads/2018/04/BBQ-Dragon-3-845x630.jpg",
      link: "https://bbqdragon.com/product/bbq-dragon-fan/",
    },
    {
      id: 15,
      name: "Chainmail Grill Brush",
      description:
        "BBQ dragons new chain mail brush can be tossed in the dishwasher to clean. The chain mail lasts for years without wearing out, and the silicone interior is easy to clean and reuse over and over.",
      price: 39.99,
      img: "https://bbqdragon-quickfix1.netdna-ssl.com/wp-content/uploads/2021/05/2021-03-22-12.14.04-scaled.jpg",
      link: "https://bbqdragon.com/product/chainmail-grill-brush/",
    },
    {
      id: 16,
      name: "Chimney of Insanity",
      description:
        "The Chimney of Insanity is an advanced charcoal chimney that is faster and easier to use than old-style chimneys.  Inside this innovative chimney is a 90 DEGREE ELBOW that sticks out one side. This SIDE HOLE allows you insert fuel or lighter material without lifting the chimney. Plus, the vent actually creates a TURBO EFFECT, which lights the charcoal faster.",
      price: 34.99,
      img: "https://bbqdragon-quickfix1.netdna-ssl.com/wp-content/uploads/2014/03/3.jpg",
      link: "https://bbqdragon.com/product/chimney-of-insanity-charcoal-chimney/",
    },
  ]);

  return(
      <div>
          <h1>BBQ Dragon:</h1>
          {bbq.map((bb) => (
              <Bbq key={bb.id} name={bb.name} description={bb.description} price={bb.price} img={bb.img} link={bb.link}/>
          ))}
      </div>
  );
};

export default BbqGList;
