    let unirest = require("unirest");
    let APIKEY = "90243e44ef6a625b804e6106fd69cf1b";
    let MashapeKey = "OF2ABOkX3qmshGAsyfRzgPbdhm2fp1Lu5EZjsnCZctojJUg46o"
    let recipeID = 30000 + Math.floor(Math.random() * 1001);

    unirest.get(`https://community-food2fork.p.mashape.com/get?key=${APIKEY}&rId=${recipeID}`)
    .header("X-Mashape-Key", MashapeKey)
    .header("Accept", "application/json")
    .end(function (result) {
    let data = result.body;
    
    let parsed = JSON.parse(data);
    let finalFood = parsed.recipe.title;
    module.exports.finalFood = finalFood;;
    });
