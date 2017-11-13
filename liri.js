var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var key = require("./keys.js");
var client = new Twitter(key);

// For twitter get
// var twitterKeys = require("keys.js");
var params = {screen_name: 'm2nucamp'};

var op = process.argv[2];

var input = process.argv[3];

var tweets;

if (op === "my-tweets") {
	myTweets();
} else if (op === "spotify-this-song"){
	spot(input);
} else if (op === "movie-this") {
	req();
} else if (op === "do-what-it-says"){
	doIt();
} 



 // Used to gather last 20 tweets
function myTweets() {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var max = 20;
    for (i=0; i<tweets.length; i++) {
      console.log(tweets[i].text);
      if (i> max) { 
        break;
      }
    }
  } else if (error) {
    console.log(error);
    }
  });
}


function spot (input) {
  spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
        // Upon error, call spotErr function
        spotErr();
    } else if (!err) {
      console.log("Song: " + input);
      console.log("Artist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
      console.log("Preview Link: " + JSON.stringify(data.tracks.items[0].album.artists[0].external_urls.spotify, null, 2));
      console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));
    }
  });
}

// Function called if error. Defaults to song 'The Sing' by ace of base 
function spotErr() {
  spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
    if ( err ) {
      console.log('Error occurred: ' + err);
    } else if (!err) {
      console.log("Song: The Sign");
      console.log("Artist: Ace the Base");
      console.log("Preview Link: https://open.spotify.com/album/0nQFgMfnmWrcWDOQqIgJL7");
      console.log("Album: Greatest Hits");
    }
  });

}
