let fieldPlants = []

export const addPlant = (seedObject) => {
    fieldPlants.push(seedObject)
}

export const usePlants = () => {
    return [...fieldPlants]
}