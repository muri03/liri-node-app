var key = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require('fs');

// var client = newTwitter();
var op = process.argv[2];
var input = process.argv[3];

var spotify = new Spotify({
    id: key.key.id,
    secret: key.key.secret
});

var newTwitter = new Twitter({
  consumer_key:key.client.consumer_secret,
    consumer_secret: key.client.consumer_secret,
    access_token: key.client.consumer_secret,
    access_token_secret: key.client.consumer_secret,

    });



// For twitter get
// var twitterKeys = require("keys.js");
var params = {screen_name: 'm2nucamp'};

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
	newTwitter.get('statuses/user_timeline', params, function(error, tweets, response) {
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

// Function called if error. Defaults to song 'The Sign' by ace of base 
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
// Function for movie information


function req() {
 var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece";
  request(queryUrl, function(error, response, body) {
  if (!error) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country of Production: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
  } else if (error) {
        // If error, call function err();
        err();
    }
  });
}

// Function called if error occurs in req() function. Defaults to Mr.Nobody
function err () {
  var queryUrl = "http://www.omdbapi.com/?t=t=Mr.Nobody&y=&plot=short&apikey=40e9cece";
  request(queryUrl, function(error, response, body) {
    if(!error) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country of Production: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
  }
  
  });

}


function doIt () {
  fs.readFile("random.txt", "utf8", function(error, data) {
    // console.log(data);
    var dataArr = data.split(",");
    // console.log(dataArr[1]);
    spot(dataArr[1]);
  });
}
