const app = require('express')();
const server = require("http").createServer(app);
const cors = require('cors');

const io = require("socket.io")(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }

})

app.use(cors());

const PORT = process.env.PORT || 5000;
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
}
else{
    app.get('/', (req, res)=> res.send('Server is running'));
}





io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, ()=> console.log(`Server is listening on ${PORT}`));