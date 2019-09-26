  ///Ask for jquery
  if (typeof jQuery == 'undefined') {
console.log("Jquery not available");
}
else{
console.log('Jquery Ver:' + jQuery.fn.jquery);
  
  $.get("https://ipinfo.io/json", function (response) {
    //here you get details in response.
//     console.log(response);
    
}, "jsonp");
//    if(window.console )
//    {    
//      console.clear();  
//    }
  
//   $.getJSON('https://ipinfo.io/json', function(data) {
// //   console.log(JSON.stringify(data, null, 2));
// });
  
}
