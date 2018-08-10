console.log("Bot starting");

let Twit = require("twit");

let config = require("./config")

var T = new Twit(config);

let tweet = {
  status: 'hello world!',
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if(err){
    console.log("Ooops something went wrong!" + err);
  }
  console.log("woooo it worked!");
}
