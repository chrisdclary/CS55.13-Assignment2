let myhttp = require("http");

let myserver = myhttp.createServer(

  function( request, response ) {
    
    console.log( request.url );
    
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.end( "Hello World!\n" );
    
  }
);

myserver.listen( 8080, "0.0.0.0" );

console.log( "Server is running" );