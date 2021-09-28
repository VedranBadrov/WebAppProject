/* global urlUpdate */

// Update the product with the content available on the web page
var editCar = function () {
  const http = new XMLHttpRequest();

  const Car = {
    "id": parseInt( document.getElementById( "id" ).value ),
    "Make": document.getElementById( "Make" ).value,
    "Model": document.getElementById( "Model" ).value ,
    "Price": parseInt( document.getElementById( "Price" ).value ),
    "Colour": document.getElementById( "Colour" ).value,
    "Year": document.getElementById( "Year" ).value 
  };

  http.open( "POST", urlUpdate );
  http.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
  http.send( JSON.stringify( Car ) );

  http.onreadystatechange = function () {
    if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
      alert( http.responseText );
    }
  };
};