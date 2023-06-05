/* import car360_1 from "../assets/cars/rolls360.jpg";
import car1 from "../assets/cars/rolls.jpg"; */

import car360_2 from "../assets/cars/urus360.jpg";
import car2 from "../assets/cars/urus.jpg";

import car360_3 from "../assets/cars/urus_yellow360.jpg";
import car3 from "../assets/cars/urus_yellow.jpg";

import yellow from "../assets/MENU/Yellow.glb";
import orange from "../assets/MENU/orange3.glb";

const Pizza = [
  /* {
    category: "Rolls",
    name: "Rolls royce",
    description: "$$$",
    img: car1,
    modelPath: model,
    secondModel: car360_1,
  }, */
  {
    category: "Lamborghini",
    name: "Lamborghini Orange",
    description: "$**",
    img: car2,
    secondModel: car360_2,
    modelPath: orange,
  },
  {
    category: "Lamborghini",
    name: "Lamborghini Yellow",
    description: "$****",
    img: car3,
    secondModel: car360_3,
    modelPath: yellow,
  },
];
const menu = [...Pizza];
export { menu };
