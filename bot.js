const Food = require("./food");
const Word = require("./word");

console.log("Bot starting");

let Twit = require("twit");

let config = require("./config")

var T = new Twit(config);

function newTweet(){
  console.log(Food.finalFood);
  console.log(Word.finalWord);
  let tweet = {
    status: `${Food.finalFood} is ${Word.finalWord}`,
  }
  T.post('statuses/update', tweet, tweeted);
  function tweeted(err, data, response){
    if(err){
      console.log("Ooops something went wrong!" + err);
    }
    console.log("woooo it worked!");
      }
}

setTimeout(newTweet, 5000);



