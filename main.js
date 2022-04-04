const http = require("http");

http.createServer((req, res) => {
	console.log("Request url: " + req.url);
	
	let data = "";
	
	req.on("data", chunk => {
		data += chunk;
	})
	
	req.on("end", () => {
		res.writeHead(200);
		res.write("ok");
		res.end();
		
		let parsed = JSON.parse(data);
		if (parsed.r == 0 && parsed.g == 0 && parsed.b == 0 && parsed.a == 255) {
		}
	})
}).listen(9009);