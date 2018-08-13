let Dictionary = require("oxford-dictionary-api");

var finalWord;
let dict = new Dictionary("12507592", "09a5bf18ca95dcd078b79f0cf343633f")

// will have to check these adjectives to see if they're covered by the API
let adjectives = ["delicious", "scrumptious", "delightful", "amazing"];

let wordIndex = Math.floor(Math.random() * adjectives.length);

let word = adjectives[wordIndex];

dict.find(word,function(error,data){ if(error) return console.log(error); 

let pulledSynonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms;

let objLength = Object.keys(pulledSynonyms).length;

let objIndex = Math.floor(Math.random() * objLength);

var key = Object.keys(pulledSynonyms)[objIndex];
value = pulledSynonyms[key];

finalWord = value.text;
module.exports.finalWord = finalWord;
});