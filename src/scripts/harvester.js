export const harvestPlants = (plantArray) => {
    let something = []
    for (let plant of plantArray){
        if (plant.type === 'Corn'){
            for (let i = 0; i < plant.output / 2; i++){
                something.push(plant)
            }
            
        } else {
        for (let i = 0; i < plant.output; i++){
        something.push(plant)
        }
    }
    }
    return something
}