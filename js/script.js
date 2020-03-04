// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var giphy = {gif:""};
var JSON = JSON.stringify(giphy);
//window.location = "https://giphy.com/" + JSON;

$("#search-button").click(function () {
    fetch("https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY")
        .then(function () {
            return response.json();
        })
        .then(function () {
            let searchTerm  = giphy.gif;
            $("body").append("<img src =" + searchTerm + "/>");
            console.log("did it work");


        })


});

