var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitterKeys = new Twitter({
	consumer_key:         '6ZkjYPISmErFn8nwtOU3Ck7J0',
  	consumer_secret:      'P910f9NlfTX8CLN8udJaiISupuM4VffENcuhvERSWny1FYMy2v',
    access_token:         '926999258477232129-cmJ49Z0a1YTZet7hZ2bAWOYhOyLGdQT',
    access_token_secret:  'xwoHN0JolE0X5tYIdWFGcaQoDcyROUZHYVaSHICdbiIta',

    });

var spotify = new Spotify({

    Client id: 			 'da70605231ce42698f53464b5915b87f',
    Client secret: 		 '9bb28face3c644839f9bc8a005adbe4e',

});

module.exports = {
	twitterKeys : twitterKeys,
	spotify : spotify
}