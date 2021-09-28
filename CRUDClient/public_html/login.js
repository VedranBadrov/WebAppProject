// Create product with the information entered in the web page
var Login = function () {
  const http = new XMLHttpRequest();

  const login = {
      "id": document.getElementById( "id" ).value,
    "user": document.getElementById( "user" ).value,
    "pass": document.getElementById( "pass" ).value 
  };

  http.open( "POST", urlLogin );
  http.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
  http.send( JSON.stringify( login ) );

  http.onreadystatechange = function () {
    if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
      alert( http.responseText );
    }
  };
};

var Logout = function () {
  const http = new XMLHttpRequest();

  http.open( "POST", urlLogout );
  http.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
  http.send( JSON.stringify(  ) );

  http.onreadystatechange = function () {
    if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
      alert( http.responseText );
    }
  };
};
