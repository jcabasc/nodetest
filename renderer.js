var fs = require('fs');
function replaceValues(values, content){
   for (var key in values){
       content = content.replace('{{' + key + '}}',values[key]);
   }
   return content;
}
function view(templateName, values, response){
    //read from template file
    var content = fs.readFileSync('views/' + templateName + '.html', 'utf8');
    // insert values into content
    content = replaceValues(values, content)
    // write out the response
    response.write(content);
}

module.exports.view = view;
