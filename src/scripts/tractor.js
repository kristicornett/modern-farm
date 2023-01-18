import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
export const plantSeeds = (plantingPlan) => {
    
    
    for (let plan of plantingPlan){
        for (let plantName of plan){
            if (plantName === 'Asparagus') {
                let aSeed = createAsparagus()
                addPlant(aSeed)

            } else if (plantName === 'Corn'){
                let kernel = createCorn()
                for (let corn of kernel){
                addPlant(corn)
                }
            
            } else if (plantName === 'Potato'){
                let aSeed = createPotato()
                addPlant(aSeed)
            } else if (plantName === 'Soybean'){
                let aSeed = createSoybean()
                addPlant(aSeed)
            } else if (plantName === 'Sunflower'){
                let aSeed = createSunflower()
                addPlant(aSeed)
            } else {
                let aSeed = createWheat()
                addPlant(aSeed)
            }
        }
    }
}