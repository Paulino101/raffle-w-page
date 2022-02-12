import React, { useState } from "react";
import Misc from "./Misc";

const Misclist = () => {
  const [misc, setMisc] = useState([
    {
      id: 4,
      name: "500$ giftCard for TCHT online courses",
      description:
        "We love helping anglers catch more fish and find more adventures fly fishing by using our simple, yet comprehensive, online courses and fly fishing strategies",
      price: 500,
      img: "https://images.squarespace-cdn.com/content/v1/5798e947ebbd1af091fb0197/306cbd8d-0d17-4dba-ab86-63647584e4b6/fishing+Giveaway.png?format=500w",
      link: "https://thecatchandthehatch.com/",
    },
    {
      id: 5,
      name: "Pompeii Party Pack",
      description:
        "The Pompeii Party Pack includes: Tabletop Vol-CAN-no with ultra-tough burner and screen, 20psi regulator and hose, 10 Hades Stones, Long lighter, Guy Montag Gloves (One size fits most humans), Over/Under, The Hat, Goodie bag, Sticker, Sense of impending awesomeness.",
      price: 265,
      dimensions: "11 x 5.5 x 7",
      img: "https://images.squarespace-cdn.com/content/v1/5f67f3ea674379687d435acd/1638394986316-JRE3O26SZ3QX1Z5MDCQL/IMG_4548.JPG?format=750w",
      link: "https://fireanytime.com/lavaboxes/p/pompeii-party-pack",
    },
    {
      id: 6,
      name: "Kershaw Leek x CPM154 x CARBON FIBER x STONEWASH",
      description:
        "The famous Kershaw Leek goes upscale with a handsome suit of carbon fiber and upgraded blade steel. The carbon fiber handle also lightens this Leek's weight, making it an extremely comfortable EDC. The razor-sharp blade of high-performance CPM 154 enables it to handle a full range of cutting tasks. The blade is a modified drop-point, so it’s a good slicing knife, while the slim tip gives it piercing capability and the ability to do detailed work.",
      price: 154.99,
      dimensions: "overallLength: 7in",
      img: "https://kershaw.kaiusa.com/media/catalog/product/cache/7154b1f58cacb6792a17db6659c72687/1/6/1660cf_profile.png",
      link: "https://kershaw.kaiusa.com/leek-cpm154-carbon-fiber-stonewash.html",
    },
    {
      id: 7,
      name: "Kitchen-to-Go 5pc x Cups x Water Bottle x Propane Adapter",
      description:
        "We call the Kitchen-to-Go the K2G for short. The Carry Case that comes with this K2G includes straps to hold a Café or Water Bottle. The bundle comes pre-packed with instructions.",
      price: 220,
      dimensions: "Found on website",
      img: "https://ncampgear.com/wp-content/webpc-passthru.php?src=https://ncampgear.com/wp-content/uploads/2019/02/Blank-640-x-640.png&nocache=1",
      link: "https://ncampgear.com/product/k2g-5pc-stove-prep-adapter-cafe-case/",
    },
    {
      id: 8,
      name: "Ranger Ready Insect Repellent x Gear",
      description:
        "Ranger Ready offers USA-made insect repellents for your skin and clothing. Our mission is to reduce the spread of vector-borne diseases with the use of premium deet-free repellents. Our Picaridin 20% body-worn repellent comes in four scents, including unscented, and will protect you for 12 hours. Our unscented clothing-worn repellent, made with Permethrin 0.5%, protects you for 40 days or 5 washes.",
      price: 250,
      dimensions: "Size: Large",
      img: "https://images.squarespace-cdn.com/content/v1/5798e947ebbd1af091fb0197/5f3c9614-9deb-472c-b0d2-7d517c9c95e8/fishing+Giveaway+%281%29.png?format=500w",
      link: "https://rangerready.com/",
    },
    {
      id: 9,
      name: "Yoke Chuck Box Camp Kitchen",
      description:
        "The Yoke Chuck Box is an all-in-one to store, transport, and organize everything you need for outdoor cooking.",
      price: 350,
      dimensions: "18 x 24.5 x 19",
      img: "https://cdn.shopify.com/s/files/1/0063/0580/8437/products/Chuck-Box-DSC_2338_2048x.jpg?v=1593705530",
      link: "https://yokeoutdoors.com/products/chuck-box-camp-kitchen-with-sink",
    },
    {
      id: 10,
      name: "Dakota Lithium Powerbox 10 x Folding Solar Panel",
      description:
        "This package combines our waterproof, lightweight, and fast charging solar panel with the rugged Powerbox 10 to create a battery that can be recharged in just 3 hours of direct sunlight!",
      price: 499,
      dimensions: "8.5 x 4.25 x 6.75",
      img: "https://dakotalithium.com/wp-content/uploads/2019/09/Solar-Panel-with-Powerbox-10.jpg",
      link: "https://dakotalithium.com/product/infinity-battery-dakota-lithium-power-box-10-folding-solar-panel/",
    },
    {
      id: 11,
      name: "MORF Collection of Removable Headlamps",
      description:
        "The MORF™ series of removable LED headlamps by Police Security Flashlights, a leading manufacturer of flashlights and headlamps are new, game-changing, patented products. Unlike ordinary headlamps, it’s a 3-in-1 removable headlamp. When the front of the headlamp is removed, it becomes a flashlight that contains a magnet, for versatility, all while the base of the headlamp stays lit, leaving two light sources.",
      price: 175,
      img: "https://images.squarespace-cdn.com/content/v1/5798e947ebbd1af091fb0197/c179963d-2917-4099-ad7a-49a7114734e3/fishing+Giveaway+%285%29.png?format=500w",
      link: "https://policesecurity.com/collections/morf-removables",
    },
    {
      id: 12,
      name: "Córdoba Orchestra CE Guitar",
      description:
        "The Orchestra CE is one of Cordoba's best-selling crossover guitars. With a solid Canadian cedar top and rosewood back and sides, this model's main feature is its slim neck profile and only 12 frets to the body, which maximizes the amount of resonance and vibration across the soundboard. It's the perfect blend of classic Spanish designs with modern aesthetics—a hand-inlaid wooden rosette, elegant mahogany binding and a high-gloss polyurethane finish. Ready to plug in and play, the Orchestra CE comes equipped with the Fishman Presys Blend preamp.",
      price: 900,
      img: "https://media.guitarcenter.com/is/image/MMGS7/L48605000001000-00-720x720.jpg",
      link: "https://www.guitarcenter.com/Cordoba/Fusion-Orchestra-CE-Crossover-Classical-Acoustic-Electric-Guitar-Natural-1500000265835.gc?cntry=us&source=4SOS0DRBA",
    },
    {
      id: 13,
      name: "22 Long Rifle, 10.5 Parkerized Heavy Barrel, 1:16 Twist, 10 MLOK Rail|Branded Side Charging Upper(Gen 2) w/ 10 rd Magazine",
      description:
        "This BCA AR-15 complete 22 long rifle length upper has a 10.5 heavy barrel with a parkerized finish, and features a 1:16 twist rate. It includes 10 MLOK rail, and a side charging (Gen 2) handle (patent pending). This upper is branded.This 22 long upper is compatible with any mil-spec AR-15 lower as it includes a CMMG 22 long rifle (AR15) magazine 10 round.",
      price: 259.99,
      inStock: false,
      img: "https://www.bearcreekarsenal.com/media/catalog/product/cache/04c4374053692f834e2bc820c5ae2c18/2/2/22lr-sch-upper-874b-r_1.jpg",
      link: "https://www.bearcreekarsenal.com/calibers/ar-22/ar-22-complete-uppers/22-long-rifle-10-5-parkerized-heavy-barrel-1-16-twist-10-mlok-rail-side-charging-upper.html",
    },
  ]);

  return (
    <div>
      <h1>Miscalleneous:</h1>
      {misc.map((mis) => (
        <Misc
          key={mis.id}
          name={mis.name}
          description={mis.description}
          price={mis.price}
          img={mis.img}
          link={mis.link}
          dimensions={mis.dimensions}
          inStock={mis.inStock}
        />
      ))}
    </div>
  );
};

export default Misclist;
