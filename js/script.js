// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

//var giphy = {gif:""};
//var JSON = JSON.stringify(giphy);
//window.location = "https://giphy.com/" + JSON;

$("#search-button").click(function() {
    var searchT = $("#search-term").val()
    var newUrl=`https://api.giphy.com/v1/gifs/search?q=${searchT}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
    fetch(newUrl)
    .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let pic_url = data.data[0].images.downsized_large.url;
            console.log(pic_url);
            $('body').append('<img src =' + pic_url + '/>');
            

        })



});

