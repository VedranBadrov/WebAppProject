/* global urlRetrieve, Car Dealership */

// Show in a table the list of Car Dealership in the server
const http = new XMLHttpRequest();
http.open( "GET", urlRetrieve );
http.send();

// Create the table with the list of Car Dealership in the server
http.onreadystatechange = function () {
  var row, cell, table, CarDealership, Cars;

  if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
    table = document.getElementById( "prodTab" );
    CarDealership = JSON.parse( http.responseText );

    Object.keys( CarDealership ).forEach( function ( id ) {
      Cars = CarDealership[ id ];

      // Create row
      row = document.createElement( "tr" );
      
      // Create Make cell
      cell = document.createElement( "td" );
      cell.textContent = Cars.id;
      row.appendChild( cell );

      // Create Make cell
      cell = document.createElement( "td" );
      cell.textContent = Cars.Make;
      row.appendChild( cell );

      // Create Model cell
      cell = document.createElement( "td" );
      cell.textContent = Cars.Model;
      row.appendChild( cell );

      // Create Price cell
      cell = document.createElement( "td" );
      cell.textContent = Cars.Price;
      row.appendChild( cell );
      
     // Create Price cell
      cell = document.createElement( "td" );
      cell.textContent = Cars.Colour;
      row.appendChild( cell );
      
      // Create Price cell
      cell = document.createElement( "td" );
      cell.textContent = Cars.Year;
      row.appendChild( cell );

      // Append
      table.appendChild( row );
    } );
  }
};
