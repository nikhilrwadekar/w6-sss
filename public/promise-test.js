// // Create an application to bake a (virtual) pie.

let type = "apple";

const prepareIngredients = (type) => {

    // A promise represents the eventual completion of an asynchronous function and the value returned by that function.
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let ingredients = [type, 'flour', 'sugar', 'eggs', 'baking powder'];
            console.log(`Ingredients prepared! ${ingredients}`);

            // Resolve by passing the ingredients down the chain..
            resolve(ingredients);
        }, 2000)
    });
}

const bakePie = (ingredients) => {

    // A promise represents the eventual completion of an asynchronous function and the value returned by that function.
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (ingredients.length != 0)
                resolve(`Baked pie with ${ingredients}!`);
            else
                reject(`Cannot bake pie with 0 ingredients`)


        }, 3000)
    });
}


// Implement bakePie(ingredients). It should create an error and reject when ingredients is empty. If ingredients is not empty, it should resolve with a pie that is basically just a string: For example 'apple pie'

prepareIngredients(type) //This promise "resolves" with ingredients
    .then(ingredients => bakePie(ingredients)) //Promise resolves with pie
    .then(statusMessage => { console.log(statusMessage) })
    .catch((error) => {
        console.log(error);
    })
