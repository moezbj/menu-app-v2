import car1 from "../assets/cars/rolls.jpg";
import car2 from "../assets/cars/urus.jpg";
import car3 from "../assets/cars/urus_yellow.jpg";

import car360_1 from "../assets/cars/rolls360.jpg";
import car360_2 from "../assets/cars/urus360.jpg";
import car360_3 from "../assets/cars/urus_yellow360.jpg";

const Pizza = [
  {
    category: "Rolls",
    name: "Rolls royce",
    description: "$$$",
    img: car1,
    secondModel: car360_1,
  },
  {
    category: "Lamborghini",
    name: "Lamborghini Orange",
    description: "$**",
    img: car2,
    secondModel: car360_2,
  },
  {
    category: "Lamborghini",
    name: "Lamborghini Yellow",
    description: "$****",
    img: car3,
    secondModel: car360_3,
  },
];
const menu = [...Pizza];
export { menu };
