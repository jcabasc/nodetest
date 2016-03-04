var https = require("https")
var username = "jcabasc";
var url = "https://teamtreehouse.com/" + username + ".json";

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
        profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript)
    });
});

request.on("error", function(error){
    console.log("error:");
    console.error(error.message);
});
