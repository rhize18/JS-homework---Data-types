/* TITLE: 
	Homework No. 1 : Data types
	[Strings, Numbers, Arrays, Objects, Boolean]
*/

// these are strings
var title = "MAPA";
var artist = "SB19";
var genre = "PPop";
var SongInspiration = "Parents";
var SongReleaseDate = new Date ("May 18, 2021 19:00:00");

	console.log(title);
	console.log(artist);
	console.log(genre);
	console.log(SongInspiration);
	console.log(SongReleaseDate);

// this is a number
var paragraph = 15;
var lengthinSec = 261.90;
var lengthinMin = 4.35;

	console.log(paragraph);
	console.log(lengthinSec);
	console.log(lengthinMin);

// this is an array
var membersName = ["Stell", "Justin", "Sejun", "Josh", "Ken"];
var MaPaMeaning = ["Mama","Papa"];

	console.log(membersName);
	console.log(MaPaMeaning);

// this is an Object
var membersPosition = {Sejun:"Leader", Josh:"Lead Rapper", Stell:"Main Vocalist", Ken:"Main Dancer"};

	console.log(membersPosition.Sejun);
	console.log(membersPosition.Josh);
	console.log(membersPosition.Stell);
	console.log(membersPosition.Ken);

// this is a Boolean
var song = Boolean ("MAPA");
	console.log(song);
	
	song = Boolean ("MAPA"/5);
		console.log(song);