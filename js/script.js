// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var giphy = {gif:""};
var JSON = JSON.stringify(giphy);
//window.location = "https://giphy.com/" + JSON;

$("#search-button").click(function () {
    var searchT = ("#search-term").val()
    var newUrl=`https://api.giphy.com/v1/gifs/search?q=${searchT}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
    fetch(newUrl)
    .then(function () {
            return response.json();
        })
        .then(function () {
            //let searchTerm  = giphy.gif;
            let pic_url = data[0].show.image.medium;
            $('body').append('<img src =' + searchTerm + pic_url + '/>');
            let src = " ";

        })


});

