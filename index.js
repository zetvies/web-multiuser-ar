var path = require('path');
var express = require('express');
var app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let PORT=process.env.PORT||3000;

var htmlPath = path.join(__dirname, 'html');
app.use(express.static(htmlPath));

server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})


let userList = [];
let buildingState = {
  A: {
    vacant: true,
    building: null,
    owner: "",
  },
  B: {
    vacant: true,
    building: null,
    owner: "",
  },
  C: {
    vacant: true,
    building: null,
    owner: "",
  },
  D: {
    vacant: true,
    building: null,
    owner: "",
  },
  E: {
    vacant: true,
    building: null,
    owner: "",
  },
  F: {
    vacant: true,
    building: null,
    owner: "",
  },
};

io.sockets.on("connection", function (socket) {
  //   console.log(srvSockets);

  socket.userData = {};

  socket.emit("online", userList.length);
  socket.on("requestJoin", function (data) {
    socket.username = data;

    let userInfo = {
      id: socket.id,
      username: socket.username,
    };
    
    socket.emit("acceptJoin", userInfo);
  });

  socket.on("actionBuild", function (data) {
    buildingState[data.land] = data.data;
    io.emit("buildingState", buildingState);
  });

  socket.on("init", function (data) {
    // console.log(`socket.init ${data.model}`);
    socket.model = data.model;
    socket.colour = data.colour;
    socket.userData.x = data.x;
    socket.userData.y = data.y;
    socket.userData.z = data.z;
    socket.userData.heading = data.h;
    socket.userData.pb = data.pb;

    let userInfo = {
      id: socket.id,
      username: socket.username,
      model: socket.model,
      colour: socket.colour,
    };

    userList.push(userInfo);
    io.emit("online", userList.length);
    io.emit("userList", userList);
    socket.emit("buildingState", buildingState);
  });

  socket.on("update", function (data) {
    socket.userData.x = data.x;
    socket.userData.y = data.y;
    socket.userData.z = data.z;
    socket.userData.heading = data.h;
    socket.userData.pb = data.pb;
  });

  socket.on("disconnect", function () {
    var removeIndex = userList.map((item) => item.id).indexOf(socket.id);
    ~removeIndex && userList.splice(removeIndex, 1);

    io.emit("userList", userList);
    io.emit("online", userList.length);
  });
});

setInterval(function () {
  const nsp = io.of("/");
  let pack = [];

  var srvSockets = io.sockets.sockets;

  srvSockets.forEach((child) => {
    if (child.model !== undefined) {
      pack.push({
        id: child.id,
        x: child.userData.x,
        y: child.userData.y,
        z: child.userData.z,
        heading: child.userData.heading,
        pb: child.userData.pb,
      });
    }
  });

  if (pack.length > 1) io.emit("remoteData", pack);
}, 40);
