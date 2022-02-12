import React,{useState} from 'react'
import Misc from './Misc'

const Reddy2list = () => {
    const [reddy, setReddy] = useState([
        {
            id:18,
            name:"Lifeline Total Fitnes and Recovery Pack",
            description:"Lifeline, a fitness leader for over 40 years, continuously develops revolutionary training tools that define the benchmark in professional grade products used for bodyweight, progressive variable resistance and functional training.",
            price:400,
            img:"https://images.squarespace-cdn.com/content/v1/5798e947ebbd1af091fb0197/f7d1d10f-0b0e-4b51-8232-1b7d10502ad7/New+Years+FitnessYoga+Giveaway+%2816%29.png?format=500w",
            link:"http://lifelinefitness.com/"
        },
        {
            id:19,
            name:"Yoga Strong Premium Gift Box (MAT, TOWEL, ROLLER, STRAP) + 1 YEAR SUBSCRIPTION TO YOGA STRONG ACTIVE",
            description:"A lot of things to do yoga with!",
            price:170,
            img:"https://images.squarespace-cdn.com/content/v1/5798e947ebbd1af091fb0197/c7fdecf4-83c9-4f26-90a8-9a76343c6307/New+Start+FitnessYoga+Giveaway+%2810%29.png?format=500w",
            link:"https://shopyogastrong.com/pages/bundle"
        },
        {
            id:20,
            name:"CTRL Inflatable Paddleboard",
            description:"The Ashland Yoga 10' inflatable paddle board is perfect for those looking for a new adventure on the water.",
            price:500,
            img:"https://cdn.shopify.com/s/files/1/0087/0203/3978/products/ctrl-ashland-yoga-sup-inflatable-paddle-boar-21_1800x1800.jpg?v=1635826314",
            link:"https://ctrlwake.com/collections/sups/products/ctrl-ashland-yoga-sup-inflatable-paddle-board-sz-10ft"
        },
        {
            id:21,
            name:"3-in-1 Heavy Foam Plyometric Box from Titan Fitness",
            description:" Our 3-in-1 Heavy Foam Plyometric Box is constructed from high-density heavy foam that will hold a weight capacity of 330-pounds and features three different height settings at 20, 24, and 30-inches so you can take your workouts the next level.",
            price:200,
            img:"https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dwbdc157dd/images/hi-res/Fitness/412231_01.jpg?sw=800&sh=800",
            link:"https://www.titan.fitness/endurance/plyo-boxes/foam/3-in-1-heavy-foam-plyometric-box/3IN1PLYO-GROUP.html"
        },
        {
            id:22,
            name:"250$ Giftcard to Blue Spruce",
            description:"Whether it’s for relaxation, recovery or just to refresh, we strive to be a trusted source of CBD.",
            price:250,
            img:"https://images.squarespace-cdn.com/content/v1/5798e947ebbd1af091fb0197/541f64a9-1d6a-4d18-8c4f-7772c229a1bc/New+Start+FitnessYoga+Giveaway+%286%29.png?format=500w",
            link:"https://bluesprucecbd.com/",
            inStock:true
        }
    ])

  return (
    <div>
        {reddy.map((redd) => (
            <Misc name={redd.name} description={redd.description}
            price={redd.price}
            img={redd.img}
            link={redd.link}
            inStock={redd.inStock}/>
        ))}
    </div>
  )
}

export default Reddy2list