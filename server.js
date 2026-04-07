const express = require("express");
const http =	require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		orgin: "*",		
	},
});

const PORT = 3000;
let incidents = [];

//Test route
/*app.get("/", (req, res) => {
	res.send("server is running");
});*/

app.get("/", (req, res) =>{
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/incident", (req, res) =>{
	const {title, severity } =  req.body;

	const newIncident = {
		id : Date.now(),
		title,
		severity,
		time: new Date(),
	};
	console.log(newIncident);
	incidents.push(newIncident);
	console.log(incidents);
	io.emit("new_incident", newIncident);

	res.json({message : "Incident created", data: newIncident });
})

io.on("connection", (socket) => {
	console.log("user connected:", socket.id);

	socket.on("disconnect", () => {
		console.log("user disconnected: ", socket.id);
	});
});

//start server
server.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
