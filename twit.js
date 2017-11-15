var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'js0cUeJgRARnmMjrl5VUfVE5a',
  consumer_secret: 'G5KSYQzOvLGPiTerXS8Lym2WGswBzkAZxW2uQqux0qVDIlcuiD',
  access_token_key: '926999258477232129-cmJ49Z0a1YTZet7hZ2bAWOYhOyLGdQT',
  access_token_secret: 'xwoHN0JolE0X5tYIdWFGcaQoDcyROUZHYVaSHICdbiIta'
});
 
var params = {screen_name: 'm2nucamp'};
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
