export const catalog = (harvestedFood) => {
    let htmlString = '<section class= "plants_grid">'
    for (let food of harvestedFood){
        htmlString += `<div class="grid_item">${food.type}</div>`
    }
    htmlString += '</section>'

    return htmlString
}
