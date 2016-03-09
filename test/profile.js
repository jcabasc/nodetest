var https = require("https");
var http = require("http");


function getProfile(username){

    var url = "https://teamtreehouse.com/" + username + ".json";
    function printError(error){
        console.log(error.message);
    }

    function printMessage(username, badgeCount, points) {
        var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
        console.log(message);
    }

    var request = https.get(url, function(response){

        var body = "";
        var profile = {};
        response.on("data", function(chunk){
            body += chunk;
        });

        response.on("end", function(){
            if (response.statusCode === 200){
                profile = JSON.parse(body);
                printMessage(username, profile.badges.length, profile.points.JavaScript);
            }else{
                printError({message: "There was an error getting the profile info for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
            }
        });
    });
    request.on("error", printError);
}

module.exports.get = getProfile;
