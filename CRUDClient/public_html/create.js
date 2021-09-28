// Create product with the information entered in the web page
var addCar = function () {
  const http = new XMLHttpRequest();

  const Car = {
    "id":  document.getElementById( "id" ).value ,
    "Make": document.getElementById( "Make" ).value,
    "Model": document.getElementById( "Model" ).value ,
    "Price": document.getElementById( "Price" ).value ,
    "Colour": document.getElementById( "Colour" ).value,
    "Year": document.getElementById( "Year" ).value 
};

  http.open( "POST", urlCreate );
  http.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
  http.send( JSON.stringify( Car ) );

  http.onreadystatechange = function () {
    if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
      alert( http.responseText );
    }
  };
}