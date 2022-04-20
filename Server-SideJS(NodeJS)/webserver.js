// This is a standalone js file for node

let http = require('http');
let fileSys = require('fs');

let wServer = http.createServer( 
	(req,res) => {res.writeHead(200, { 'context-type' : 'text/html'})

    fileSys.createReadStream('refresher.html').pipe(res)
})

wServer.listen(process.env.PORT || 8080)
