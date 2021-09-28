// Delete the product
var deleteCar = function () {
  const http = new XMLHttpRequest();

  var car = {
    "id": document.getElementById( "id" ).value
  };

  http.open( "POST", urlDelete );
  http.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
  http.send( JSON.stringify( car ) );

  http.onreadystatechange = function () {
    if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
      alert( http.responseText );
    }
  };
}