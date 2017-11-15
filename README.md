#LIRI Bot

Overview

* This repository contains LIRI (Language Interpretation and Recognition Interface). IT will be a command line node app that takes in parameters and gives you back data.


##Objective 
*To utilize multiple Node Packages to retrieve data from Twitter, Spotify and OMDB APIs. 
	*Twitter - This will show my last 20 tweets and when they were created at in your terminal/bash window.
		*(Terminal) $node liri.js my-tweets
	*Spotify - This will show the Artist, song's name, link, and album about the song in your terminal/bash window. If error occurs, it defaults to " The Sign by Ace the Base".
		*(Terminal) $node liri.js spotify-this-song '<song name here>'.
	*Request to grab data from OMDB API - This show the title of the movie and other relevant information about the movie selected. If error occurs, it defaults to "Mr. Nobody".
		*(Terminal) $node liri.js movie-this '<movie name here>'.

##NPM Package
*Twitter ver 1.7.1"
*Node-spotify-api ver 1.0.7
*Request ver 2.83.0
*Require ver2.4.20


##License 
*NONE

