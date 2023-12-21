var path = require("path");
var express = require("express");
var app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let PORT = process.env.PORT || 3000;

var htmlPath = path.join(__dirname, "html");
app.use(express.static(htmlPath));

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

let userList = [];
let history = [
  {
    date: "21/12/2023",
    data: [
      {
        username: "no:rue",
        motif: 1,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703174079518,
      },
      {
        username: "no:rue",
        motif: 1,
        size: "100",
        x: -0.8553607680238517,
        z: -0.38001968061087826,
        timeStamp: 1703174085463,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: -0.2780542689219578,
        z: -0.2716479496690124,
        timeStamp: 1703174097635,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 0.38509864200166016,
        z: -0.9362207918825488,
        timeStamp: 1703174102429,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 0.38509864200166016,
        z: -0.9362207918825488,
        timeStamp: 1703174102739,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 0.38509864200166016,
        z: -0.9362207918825488,
        timeStamp: 1703174103261,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 0.38509864200166016,
        z: -0.9362207918825488,
        timeStamp: 1703174103473,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 0.38509864200166016,
        z: -0.9362207918825488,
        timeStamp: 1703174103666,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 0.9070667908524913,
        z: -0.4421422041190087,
        timeStamp: 1703174106427,
      },
      {
        username: "no:rue",
        motif: 4,
        size: "60",
        x: 1.25,
        z: -0.44749698241414354,
        timeStamp: 1703174109415,
      },
      {
        username: "no:rue",
        motif: 6,
        size: "90",
        x: 0.7056739675292422,
        z: -0.47386463352994435,
        timeStamp: 1703174117558,
      },
      {
        username: "no:rue",
        motif: 5,
        size: "20",
        x: 0.4633667994850053,
        z: 0.6565331543230825,
        timeStamp: 1703174126084,
      },
      {
        username: "no:rue",
        motif: 5,
        size: "50",
        x: -0.1016007428938783,
        z: 0.6554207940636964,
        timeStamp: 1703174133172,
      },
      {
        username: "no:rue",
        motif: 5,
        size: "50",
        x: -0.5332482394986346,
        z: 1.25,
        timeStamp: 1703174137478,
      },
      {
        username: "no:rue",
        motif: 6,
        size: "90",
        x: -0.10222356738957683,
        z: 0.9350844825684699,
        timeStamp: 1703174146011,
      },
      {
        username: "no:rue",
        motif: 7,
        size: "90",
        x: 0.6921440697325599,
        z: 0.7029475719213943,
        timeStamp: 1703174152228,
      },
      {
        username: "no:rue",
        motif: 7,
        size: "90",
        x: -0.12446745056122296,
        z: -1.050909097285443,
        timeStamp: 1703174158379,
      },
      {
        username: "no:rue",
        motif: 2,
        size: "60",
        x: -0.8833045192006711,
        z: -1.033597970942365,
        timeStamp: 1703174167418,
      },
      {
        username: "no:rue",
        motif: 2,
        size: "20",
        x: -0.15113184731727003,
        z: -1.25,
        timeStamp: 1703174176303,
      },
      {
        username: "no:rue",
        motif: 8,
        size: "80",
        x: -1.25,
        z: 0.7970266278684848,
        timeStamp: 1703174210963,
      },
      {
        username: "no:rue",
        motif: 6,
        size: "50",
        x: -1.25,
        z: 0.7970266278684848,
        timeStamp: 1703174216167,
      },
    ],
  },
  {
    date: "21/12/2023",
    data: [
      {
        username: "Arsa",
        motif: 1,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703174543364,
      },
      {
        username: "Pita",
        motif: 6,
        size: "90",
        x: -0.6042685081630617,
        z: -0.5763682553037942,
        timeStamp: 1703174549507,
      },
      {
        username: "Rininta",
        motif: 5,
        size: "100",
        x: -1.25,
        z: 1.25,
        timeStamp: 1703174568105,
      },
      {
        username: "Kae",
        motif: 6,
        size: "90",
        x: -0.5550525030252789,
        z: 0.5464848163342677,
        timeStamp: 1703174576461,
      },
      {
        username: "Pita",
        motif: 6,
        size: "60",
        x: -0.525540773370349,
        z: 0.019848778317255518,
        timeStamp: 1703174582341,
      },
      {
        username: "Pita",
        motif: 2,
        size: "60",
        x: -0.525540773370349,
        z: 0.019848778317255518,
        timeStamp: 1703174587201,
      },
      {
        username: "Pita",
        motif: 2,
        size: "60",
        x: 0.6357331887995975,
        z: -0.6392809003906748,
        timeStamp: 1703174591299,
      },
      {
        username: "Pita",
        motif: 3,
        size: "90",
        x: 0.9411546677958009,
        z: 0.2609246092468106,
        timeStamp: 1703174600726,
      },
      {
        username: "Pita",
        motif: 4,
        size: "60",
        x: 0.9617495716737088,
        z: 1.0394744137847867,
        timeStamp: 1703174607220,
      },
      {
        username: "Pita",
        motif: 7,
        size: "60",
        x: -1.25,
        z: -0.29990306734955546,
        timeStamp: 1703174617473,
      },
      {
        username: "Pita",
        motif: 11,
        size: "100",
        x: -1.1243923919726615,
        z: 0.3947373787434749,
        timeStamp: 1703174626251,
      },
      {
        username: "Pita",
        motif: 7,
        size: "100",
        x: 0.05296642283315277,
        z: 0.41080253817365736,
        timeStamp: 1703174635110,
      },
      {
        username: "Pita",
        motif: 11,
        size: "80",
        x: 0.13555684854567038,
        z: -0.4893194735785187,
        timeStamp: 1703174642580,
      },
      {
        username: "Pita",
        motif: 8,
        size: "60",
        x: 1.25,
        z: -1.1913154672475053,
        timeStamp: 1703174652510,
      },
      {
        username: "Pita",
        motif: 2,
        size: "50",
        x: 1.25,
        z: -1.1913154672475053,
        timeStamp: 1703174657647,
      },
      {
        username: "Pita",
        motif: 8,
        size: "90",
        x: 1.25,
        z: -1.1913154672475053,
        timeStamp: 1703174662884,
      },
      {
        username: "Pita",
        motif: 5,
        size: "30",
        x: 0.3906284034492231,
        z: -1.25,
        timeStamp: 1703174671958,
      },
      {
        username: "Pita",
        motif: 5,
        size: "30",
        x: 0.026208011054461296,
        z: -1.25,
        timeStamp: 1703174674671,
      },
      {
        username: "Pita",
        motif: 1,
        size: "60",
        x: 0.22943434751108813,
        z: -0.9554027447635979,
        timeStamp: 1703174684279,
      },
      {
        username: "Pita",
        motif: 5,
        size: "30",
        x: -1.25,
        z: 0.022990649098936992,
        timeStamp: 1703174697549,
      },
      {
        username: "Pita",
        motif: 4,
        size: "30",
        x: 0.2240856191597727,
        z: 1.25,
        timeStamp: 1703174713797,
      },
    ],
  },
  {
    date: "22/12/2023",
    data: [
      {
        username: "Zetvies",
        motif: 1,
        size: "50",
        x: -1.25,
        z: -1.25,
        timeStamp: 1703179192849,
      },
      {
        username: "Zetvies",
        motif: 1,
        size: "100",
        x: -1.25,
        z: -1.25,
        timeStamp: 1703179196110,
      },
      {
        username: "Zetvies",
        motif: 1,
        size: "100",
        x: -1.25,
        z: 1.25,
        timeStamp: 1703179207527,
      },
      {
        username: "Zetvies",
        motif: 1,
        size: "0",
        x: 1.25,
        z: -0.6320836789943145,
        timeStamp: 1703179259331,
      },
      {
        username: "Zetvies",
        motif: 3,
        size: "100",
        x: 1.25,
        z: -1.25,
        timeStamp: 1703179379902,
      },
      {
        username: "Zetvies",
        motif: 3,
        size: "100",
        x: 1.25,
        z: 1.25,
        timeStamp: 1703179394714,
      },
      {
        username: "Zetvies",
        motif: 4,
        size: "100",
        x: 0.8010459499015552,
        z: 1.1576874469341807,
        timeStamp: 1703179401371,
      },
      {
        username: "Zetvies",
        motif: 2,
        size: "0",
        x: 0.49368986641238427,
        z: 0.8095782887007672,
        timeStamp: 1703179410634,
      },
      {
        username: "Zetvies",
        motif: 2,
        size: "0",
        x: -0.7112517196778377,
        z: 0.8541889274479133,
        timeStamp: 1703179414800,
      },
      {
        username: "Zetvies",
        motif: 3,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703179806974,
      },
      {
        username: "Zetvies",
        motif: 4,
        size: "100",
        x: -0.7829765186797096,
        z: -0.1836926297373701,
        timeStamp: 1703179815308,
      },
      {
        username: "Zetvies",
        motif: 4,
        size: "100",
        x: 0.6501308116596451,
        z: -0.4214108884408554,
        timeStamp: 1703179824507,
      },
      {
        username: "Zetvies",
        motif: 6,
        size: "70",
        x: 0.26259701015045167,
        z: 0.40172680646152603,
        timeStamp: 1703179837476,
      },
      {
        username: "Zetvies",
        motif: 6,
        size: "70",
        x: -0.8961417512530544,
        z: 0.361217741030548,
        timeStamp: 1703179841707,
      },
      {
        username: "Zetvies",
        motif: 7,
        size: "100",
        x: -0.1721289092689585,
        z: -0.8478154202245514,
        timeStamp: 1703179850721,
      },
      {
        username: "Zetvies",
        motif: 6,
        size: "0",
        x: -0.1721289092689585,
        z: -0.8478154202245514,
        timeStamp: 1703179859081,
      },
      {
        username: "Zetvies",
        motif: 1,
        size: "70",
        x: -0.2957400614870105,
        z: 0.40391615178773815,
        timeStamp: 1703179878222,
      },
      {
        username: "Zetvies",
        motif: 7,
        size: "70",
        x: -0.17351395967979028,
        z: 1.25,
        timeStamp: 1703179909393,
      },
      {
        username: "Zetvies",
        motif: 2,
        size: "0",
        x: -0.17351395967979028,
        z: 1.25,
        timeStamp: 1703179916106,
      },
      {
        username: "Zetvies",
        motif: 2,
        size: "0",
        x: 0.28526406395365794,
        z: -1.25,
        timeStamp: 1703179932276,
      },
      {
        username: "Zetvies",
        motif: 4,
        size: "0",
        x: 1.25,
        z: 0.46632503268472736,
        timeStamp: 1703179948717,
      },
    ],
  },
];
let brushes = [];

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

  socket.on("actionAdd", function (data) {
    brushes.push(data);
    if (brushes.length > 20) {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const formattedToday = dd + "/" + mm + "/" + yyyy;
      history.push({ date: formattedToday, data: brushes });
      // console.log(brushes.length, history)
      brushes = [];
      io.emit("resetCanvas", history);
    }
    io.emit("brushesState", brushes);
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
    io.emit("brushesState", brushes);
  });

  socket.on("update", function (data) {
    socket.userData.x = data.x;
    socket.userData.y = data.y;
    socket.userData.z = data.z;
    socket.userData.heading = data.h;
    socket.userData.pb = data.pb;
  });

  socket.on("initLive", function () {
    io.emit("userList", userList);
    io.emit("brushesState", brushes);
  });

  socket.on("initGallery", function () {
    io.emit("history", history);
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

  if (pack.length > 0) io.emit("remoteData", pack);
}, 40);
