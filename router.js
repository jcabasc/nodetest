var renderer = require('./renderer');
var Profile = require('./profile');
var queryString = require('querystring');
function homeRoute(request, response){
    if(request.url === "/"){
        if (request.method.toLowerCase() === 'get'){
        //show search
        renderer.view('header',{},response);
        renderer.view('search',{},response);
        renderer.view('footer',{},response);
        response.end();
        }else{
            request.on('data', function(data){
                var query = queryString.parse(data.toString());
                response.writeHead(302, { 'Location': '/' + query.username });
                response.end();
            });
        }
    }
}

function userRoute(request, response){
    var username = request.url.replace('/','');
    var values = {}
    if(username.length > 0){
        var studentProfile = new Profile(username);
        studentProfile.on('end', function(data){
            values = {
                avatarUrl: data.gravatar_url,
                username: data.profile_name,
                badgesCount: data.badges.length,
                javascriptPoints: data.points.JavaScript
            }
            renderer.view('header',{}, response);
            renderer.view('profile',values, response);
            renderer.view('footer',{}, response);
            response.end();
        });

        studentProfile.on("error", function(error){
            renderer.view('header',{}, response);
            renderer.view('error',{errorMessage: error.message}, response);
            renderer.view('footer',{}, response);
            response.end();
        });

    }

}

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;
