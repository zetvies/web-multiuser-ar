var path = require("path");
var express = require("express");
var app = express();

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
  console.log("test")
}

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
  {
    date: "23/12/2023",
    data: [
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306797542,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306798782,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306799279,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306799489,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306799723,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306799907,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306800075,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306800260,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306801339,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703306804470,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703306826672,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703306841075,
      },
      {
        username: "Lilianawati ",
        motif: 6,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703306862046,
      },
      {
        username: "Eva",
        motif: 2,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703309110151,
      },
      {
        username: "Eva",
        motif: 2,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703309118671,
      },
      {
        username: "Eva",
        motif: 2,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703309120777,
      },
      {
        username: "Eva",
        motif: 2,
        size: "40",
        x: 0,
        z: 0,
        timeStamp: 1703309121538,
      },
      {
        username: "Eva",
        motif: 8,
        size: "40",
        x: -0.007496766571098228,
        z: -1.25,
        timeStamp: 1703309147321,
      },
      {
        username: "Eva",
        motif: 2,
        size: "40",
        x: 0.3387894417998773,
        z: -1.25,
        timeStamp: 1703309159972,
      },
      {
        username: "Eva",
        motif: 2,
        size: "30",
        x: -0.5044269216076049,
        z: -1.1354365644005524,
        timeStamp: 1703309170484,
      },
      {
        username: "Eva",
        motif: 2,
        size: "30",
        x: -0.16590596529832907,
        z: -1.25,
        timeStamp: 1703309175738,
      },
    ],
  },
  {
    date: "23/12/2023",
    data: [
      {
        username: "Eva",
        motif: 6,
        size: "60",
        x: 0.07470218844120027,
        z: -0.060389443229288964,
        timeStamp: 1703309201699,
      },
      {
        username: "Eva",
        motif: 3,
        size: "40",
        x: 0.1872878002135752,
        z: -0.6152169515944056,
        timeStamp: 1703309216482,
      },
      {
        username: "Eva",
        motif: 3,
        size: "40",
        x: 0.6559925404077056,
        z: 0.004299299264268879,
        timeStamp: 1703309229556,
      },
      {
        username: "Eva",
        motif: 3,
        size: "40",
        x: 0.18125178268950345,
        z: 0.5905217810975817,
        timeStamp: 1703309235601,
      },
      {
        username: "Eva",
        motif: 3,
        size: "40",
        x: -0.34076304560703025,
        z: 0.37337059077241025,
        timeStamp: 1703309239993,
      },
      {
        username: "Eva",
        motif: 3,
        size: "40",
        x: -0.503795654510829,
        z: -0.47805036316505306,
        timeStamp: 1703309245469,
      },
      {
        username: "Eva",
        motif: 2,
        size: "20",
        x: -0.0017847266569539222,
        z: 0.028995640334217317,
        timeStamp: 1703309288644,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310792023,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310801689,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310803627,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310813576,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310814268,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310814977,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310815309,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310815733,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310816230,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310817470,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310824250,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310824987,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310825172,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310825387,
      },
    ],
  },
  {
    date: "23/12/2023",
    data: [
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310825828,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310826034,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310826189,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310826892,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310827618,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310828328,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310829102,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310829987,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310830463,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310830908,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310831168,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310831360,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310834089,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310834322,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310834646,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310835152,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310835821,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310836221,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310836409,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310836626,
      },
      {
        username: "Fira",
        motif: 3,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310837676,
      },
    ],
  },
  {
    date: "23/12/2023",
    data: [
      {
        username: "Fira",
        motif: 6,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310851334,
      },
      {
        username: "Fira",
        motif: 6,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310852467,
      },
      {
        username: "Fira",
        motif: 6,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310853652,
      },
      {
        username: "Fira",
        motif: 6,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310856066,
      },
      {
        username: "Fira",
        motif: 6,
        size: "100",
        x: 0,
        z: 0,
        timeStamp: 1703310857133,
      },
      {
        username: "Vina",
        motif: 2,
        size: "80",
        x: 0.20791856712103132,
        z: -0.36689077593365427,
        timeStamp: 1703312150657,
      },
      {
        username: "Vina",
        motif: 2,
        size: "80",
        x: -0.3233243907945836,
        z: -0.8843163120276901,
        timeStamp: 1703312157840,
      },
      {
        username: "Vina",
        motif: 3,
        size: "80",
        x: -0.8504803736335961,
        z: -0.4340436192622703,
        timeStamp: 1703312171846,
      },
      {
        username: "Vina",
        motif: 3,
        size: "80",
        x: 0.3669458783035181,
        z: -0.8393737438015194,
        timeStamp: 1703312186547,
      },
      {
        username: "Vina",
        motif: 4,
        size: "80",
        x: 1.0765477792724993,
        z: -1.1475973159139907,
        timeStamp: 1703312224522,
      },
      {
        username: "Vina",
        motif: 4,
        size: "80",
        x: 0.7784283285646271,
        z: 0.25337616025614906,
        timeStamp: 1703312244753,
      },
      {
        username: "Vina",
        motif: 5,
        size: "80",
        x: 0.8771460626418519,
        z: -0.13506883197822053,
        timeStamp: 1703312259600,
      },
      {
        username: "Vina",
        motif: 5,
        size: "80",
        x: 0.04524974959266814,
        z: 1.1269203147058,
        timeStamp: 1703312273893,
      },
      {
        username: "Vina",
        motif: 5,
        size: "80",
        x: 0.028535759256443423,
        z: -1.25,
        timeStamp: 1703312290786,
      },
      {
        username: "Vina",
        motif: 5,
        size: "80",
        x: -1.25,
        z: -1.25,
        timeStamp: 1703312298015,
      },
      {
        username: "Vina",
        motif: 7,
        size: "80",
        x: -1.25,
        z: -1.249121229901729,
        timeStamp: 1703312310252,
      },
      {
        username: "Vina",
        motif: 7,
        size: "80",
        x: -1.25,
        z: -0.5587713834534467,
        timeStamp: 1703312319211,
      },
      {
        username: "Vina",
        motif: 7,
        size: "80",
        x: 1.25,
        z: 1.25,
        timeStamp: 1703312352387,
      },
      {
        username: "Vina",
        motif: 7,
        size: "80",
        x: 0.8675732802752345,
        z: 0.8677670854460924,
        timeStamp: 1703312355876,
      },
      {
        username: "Vina",
        motif: 9,
        size: "80",
        x: -0.40709400813405366,
        z: 0.5955724248690626,
        timeStamp: 1703312368800,
      },
      {
        username: "Vina",
        motif: 9,
        size: "80",
        x: -1.0542717690875618,
        z: 0.18952868584890545,
        timeStamp: 1703312376204,
      },
    ],
  },
  {
    date: "23/12/2023",
    data: [
      {
        username: "Andi",
        motif: 2,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703312907022,
      },
      {
        username: "Andi",
        motif: 5,
        size: "50",
        x: -0.6336790025506203,
        z: -1.25,
        timeStamp: 1703312921956,
      },
      {
        username: "Andi",
        motif: 5,
        size: "50",
        x: 0.252534787245848,
        z: -1.028116047209717,
        timeStamp: 1703312928584,
      },
      {
        username: "Andi",
        motif: 5,
        size: "50",
        x: -0.24918234496848227,
        z: -0.9754149028910774,
        timeStamp: 1703312931389,
      },
      {
        username: "Andi",
        motif: 11,
        size: "50",
        x: 0.7076236376426914,
        z: -0.7564113519412495,
        timeStamp: 1703312939239,
      },
      {
        username: "Andi",
        motif: 11,
        size: "50",
        x: 0.7076236376426914,
        z: -0.7564113519412495,
        timeStamp: 1703312940955,
      },
      {
        username: "Andi",
        motif: 11,
        size: "50",
        x: 0.5094880974393396,
        z: 0.396389269305733,
        timeStamp: 1703312944767,
      },
      {
        username: "Andi",
        motif: 11,
        size: "50",
        x: -0.24551931708538224,
        z: 0.8007034496989586,
        timeStamp: 1703312948566,
      },
      {
        username: "Andi",
        motif: 7,
        size: "50",
        x: -0.24551931708538224,
        z: 0.8007034496989586,
        timeStamp: 1703312953183,
      },
      {
        username: "Andi",
        motif: 7,
        size: "50",
        x: -0.4909776942971421,
        z: 1.0001432209257597,
        timeStamp: 1703312955640,
      },
      {
        username: "Andi",
        motif: 7,
        size: "50",
        x: -0.751162785253142,
        z: 0.7369977115919615,
        timeStamp: 1703312958172,
      },
      {
        username: "vidyaa",
        motif: 1,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703313769245,
      },
      {
        username: "vidyaa",
        motif: 1,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703313783879,
      },
      {
        username: "vidyaa",
        motif: 1,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703313785198,
      },
      {
        username: "vidyaa",
        motif: 1,
        size: "50",
        x: 0,
        z: 0,
        timeStamp: 1703313786680,
      },
      {
        username: "vidyaa",
        motif: 7,
        size: "60",
        x: 0,
        z: 0,
        timeStamp: 1703313813199,
      },
      {
        username: "vidyaa",
        motif: 7,
        size: "60",
        x: 0,
        z: 0,
        timeStamp: 1703313816434,
      },
      {
        username: "vidyaa",
        motif: 7,
        size: "60",
        x: 0,
        z: 0,
        timeStamp: 1703313817033,
      },
      {
        username: "vidyaa",
        motif: 7,
        size: "60",
        x: 0,
        z: 0,
        timeStamp: 1703313817297,
      },
      {
        username: "vidyaa",
        motif: 7,
        size: "60",
        x: 0,
        z: 0,
        timeStamp: 1703313818793,
      },
      {
        username: "vidyaa",
        motif: 7,
        size: "60",
        x: 0,
        z: 0,
        timeStamp: 1703313819063,
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
