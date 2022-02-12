import React, { useState } from "react";
import Bat from "./Bat";

const BatList = () => {
  const [tents, setTents] = useState([
    {
      id: 1,
      name: "Land Rover OEM Deployable Ladder",
      description:
        "The ladder has anodised aluminium steps with black, powder-coated aluminium sides, set in a high-quality, durable plastic with an Anthracite coloured finish frame. For additional durability the top and bottom steps are rubber coated to help improve grip. The maximum weight capacity of the ladder is 330lbs., sufficient for a person carrying equipment to the roof. For 90 and 110. Not applicable for vehicles with V8 engines. Roof rails required for fitment.",
      price: 849.95,
      sku: "VPLER0189",
      dimensions: "24 x 16 x 6",
      material: "Aluminum & Plastics",
      mountPosition: "Left or Right",
      weight: 22,
      img: "https://badasstents.com/wp-content/uploads/2021/08/LR-Defender-Ladder-1.jpg",
      link: "https://badasstents.com/product/land-rover-oem-deployable-ladder/",
    },
    {
      id: 2,
      name: "BA TENTS 2020-22 Land Rover Defender 90/110 Rotopax Ladder Mount Bracket",
      description:
        "The 2020+ Land Rover Defender Rotopax Ladder Mounting Bracket attaches to the back of the ladder using pre-existing holes and includes the large 5052 aluminum bracket, laser cut, bent and then powder coated matte along with all necessary hardware to install.  Requires your own tooling and about an hour of time to remove, install and then reinstall on the vehicle. Watch video in the installation tab to see the process.",
      price: 249.95,
      sku: "1801-0201.R",
      dimensions: "24 x 18 x 1",
      material: "Aluminum",
      mountPosition: "Right",
      weight: 10,
      img: "https://badasstents.com/wp-content/uploads/2021/08/BAtents-defender-rotopax-mount-10RIGHT.jpg",
      link: "https://badasstents.com/product/land-rover-defender-90-110-rotopax-ladder-mount-bracket/",
    },
    {
      id: 3,
      name: "BA Tents Rear Tire Top Platform Complete with Strap",
      description:
        "Looking for a solution to extend your storage capacity on your vehicle and have it easily removable when not needed?  Look no further than this Universal fit top rack and side mount platform kit, sold separately.  BADASS Tents patent pending Universal fit top rack and side mount platform kit is designed to be used on any vehicle with a rear tire mounted on the back from tire size 235 and larger.",
      price: 329.95,
      sku: "N/A",
      dimensions: "26 x 22 x 8",
      material: "Aluminum",
      mountPosition: "Rear",
      weight: 25,
      img: "https://badasstents.com/wp-content/uploads/2021/08/BAtents-top-tire-mount-1.jpg",
      link: "https://badasstents.com/product/ba-tents-rear-tire-top-platform-complete-with-strap/",
    },
  ]);

  return (
    <div>
      <h1>Bad Ass Tents:</h1>
      {tents.map((tent) => (
        <Bat
          key={tent.id}
          name={tent.name}
          description={tent.description}
          price={tent.price}
          sku={tent.sku}
          dimensions={tent.dimensions}
          material={tent.material}
          mountPosition={tent.mountPosition}
          weight={tent.weight}
          img={tent.img}
          link={tent.link}
        />
      ))}
    </div>
  );
};

export default BatList;
