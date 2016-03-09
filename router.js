function homeRoute(request, response){
    if(request.url === "/"){
        //show search
        response.write("HEADER\n");
        response.write("SEARCH\n");
        response.write("footer\n");
    }
}

function userRoute(request, response){
    var username = request.url.replace('/','');
    if(username.length > 0){
        response.write("edgar es mi amigo, no confies");
        response.write(request.url);
    }
}

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;
