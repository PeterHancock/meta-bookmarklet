var bookmarket = encodeURIComponent(document.body.innerText);
var name = (function(splitPath){ 
    return splitPath[splitPath.length - 1].replace(/\.js$/, '');
}(document.location.pathname.split('/')));
document.write('<strong>Drag bookmarklet to your toolbar:</strong> ');
document.write('<a href="javascript:(function(){' + bookmarket + '}());">'+ name + '</a>');
