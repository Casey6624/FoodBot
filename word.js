let Dictionary = require("oxford-dictionary-api");

let dict = new Dictionary("12507592", "09a5bf18ca95dcd078b79f0cf343633f")

let words = ["delicious", "yummy", "scrumptious", "delightful"];

let word = "Love";

dict.find(word,function(error,data){ if(error) return console.log(error); 

pulledSynonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms;

objLength = Object.keys(pulledSynonyms).length;

index = Math.floor(Math.random() * objLength);

var key = Object.keys(pulledSynonyms)[index];
value = pulledSynonyms[key]

let finalWord = value.text;

export default finalWord;

});