var nutritionFacts = require("nutrition-facts");

// import NutritionFacts from 'nutrition-facts'

const NutritionFacts = nutritionFacts.default;

console.log(NutritionFacts);
const NF = new NutritionFacts(process.env.eMDJ1XJo1camtfmQFM3UqTeaohALZQyJWd781uqs);


NF.searchFoods({
    q: 'apple',
    ds: 'Standard Reference'
}).then(results => {

    // Returns search results
    let mySelectedItem = results.list.item[0]

    // Items are returned as a FoodItem instance
    // allowing you to call 'getNutrition' directly on the instance.
    mySelectedItem.getNutrition()
        .then(nutritionReport => {
            console.log(nutritionReport)
        }).catch(err => {
            console.log(err)
        })

}).catch(err => {
    console.log(err)
})
