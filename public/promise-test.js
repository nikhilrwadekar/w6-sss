// // Create an application to bake a (virtual) pie.

// // Type for the pie.
// let type = 'apple';
// let ingredients = [];

// // Prepare Ingredients Function..
// const prepareIngredients = () => {
//     // Preparing ingredients takes time... after 2 seconds 

//     // Set timeout for 2 seconds.. but it lets other code run the async way
//     setTimeout(() => {
//         ingredients = [type, 'flour', 'sugar', 'eggs', 'baking powder'];

//         console.log(`ingredients prepare for the ${type} pie:
//         ${ingredients}`)
//     }, 2000);

// }

// // Bake Pie Function..
// const bakePie = () => {

//     if (ingredients.length != 0) {

//         console.log(`Putting the pie in the oven..`);
//         setTimeout(() => {
//             console.log(`It's finally ready! Enjoy your ${type} pie!`);
//         }, 3000);
//     }
//     else {
//         console.log(`Can't bake the pie - no ingredients have been prepared!`);
//     }

// }

// console.log("Starting the pie..");
// prepareIngredients();
// bakePie();

let type = "apple";

prepareIngredients(type) //This promise "resolves" with ingredients
    .then(ingredients => bakePie(ingredients)) //Promise resolves with pie
    .then(pie => { console.log(`The ${pie} is delicious!`) })
    .catch((error) => {
        console.log(error);
    })
