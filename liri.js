var inquirer = require("inquirer");
inquirer.prompt([{
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
    .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });


    var Twit = require('twit');

var config = require('./keys');

var T = new Twit(config);

var params = {
        q: 'm2nucamp',
        count: 20
    }

    T.get('search/tweets', params, gotData);

    function gotData(err, data, response) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++){
        console.log('\n > ' + tweets[i].created_at + ': ' + tweets[i].text);
    }
    };