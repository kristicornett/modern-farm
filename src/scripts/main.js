//console.log("Welcome to the main module")
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant } from './field.js'
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { createCorn } from "./seeds/corn.js"
import { catalog } from "./catalog.js"
import { createPlan } from "./plan.js"
import { harvestPlants } from "./harvester.js"
let yearlyPlan = createPlan()

//console.log(yearlyPlan);
//const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)
//addPlant(asparagusSeed);
//plantSeeds(yearlyPlan)
//et plantBag = usePlants()
//console.log(plantBag);


/*export const createCorn = () => {
    return [{type: 'Corn', 
      height: 180,
      output: 6},
     {type: 'Corn',
      height: 180,
      output: 6}]
} */

//let kernel = createCorn()
//for (let corn of kernel){
    //addPlant(corn)
//}
//console.log(kernel);
//let corn = kernel.pop()
//console.log(kernel);
//corn = kernel.pop()
//let items = catalog(printThisFucker)
plantSeeds(yearlyPlan)
let fuckThis = usePlants()
//console.log(yearlyPlan);
//console.log(fuckThis);

let printThisFucker = harvestPlants(fuckThis);
console.log(printThisFucker);

const parentHTMLElement = document.querySelector('#main_tag')
parentHTMLElement.innerHTML = catalog(printThisFucker)
