var input = process.argv[3];
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'da70605231ce42698f53464b5915b87f',
  secret: '9bb28face3c644839f9bc8a005adbe4e'
});

spotify.search({ type: 'track', query: input}, function(err, data) {
    if (err) {
        // Upon error, call spotErr function
       spotifyErr()
    } else if (!err) {
      console.log("Song: " + input);
      console.log("Artist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
      console.log("Preview Link: " + JSON.stringify(data.tracks.items[0].album.artists[0].external_urls.spotify, null, 2));
      console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));
    }
  });

function spotifyErr() {
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