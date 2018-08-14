let Dictionary = require("oxford-dictionary-api");

function getWord() {
    let dict = new Dictionary("12507592", "09a5bf18ca95dcd078b79f0cf343633f")
    // Gets a random Prefix
    let prefixes = ["Holy Moly,", "Jesus Christ,", "Get out of town,", "Shut the front door!", "Aghhh,", "Wowser Roonie,", "You won't believe that", "", ""];
    let prefixIndex = Math.floor(Math.random() * prefixes.length);
    let prefix = prefixes[prefixIndex];
    //Gets a random adjecvtive
    let adjectives = ["delicious", "scrumptious", "delightful", "amazing"];
    let wordIndex = Math.floor(Math.random() * adjectives.length);
    let word = adjectives[wordIndex];

    dict.find(word, function (error, data) {
        if (error) return console.log(error);

        let pulledSynonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms;

        let objLength = Object.keys(pulledSynonyms).length;

        let objIndex = Math.floor(Math.random() * objLength);

        var key = Object.keys(pulledSynonyms)[objIndex];
        value = pulledSynonyms[key];

        let finalWord = value.text;
        module.exports.finalWord = finalWord;
        module.exports.prefix = prefix;
    });
}
getWord();
module.exports.getWord = getWord;