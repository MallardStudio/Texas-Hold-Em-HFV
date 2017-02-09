var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
setInterval(function() {
  var noPair = document.getElementById("noPair");
  var onePair = document.getElementById("onePair");
  var twoPair = document.getElementById("twoPair");
  var threeOfAKind = document.getElementById("threeOfAKind");
  var straight = document.getElementById("straight");
  var flush = document.getElementById("flush");
  var fullHouse = document.getElementById("fullHouse");
  var fourOfAKind = document.getElementById("fourOfAKind");
  var straightFlush = document.getElementById("straightFlush");
  var royalFlush = document.getElementById("royalFlush");
  var number = document.getElementById("number");
  var random = Math.floor((Math.random() * 100000) + 1);
  if (random < 3.2) {
    royalFlush.innerHTML = +royalFlush.innerHTML + 1;
    j = +j + 0.03;
    document.getElementById("royalFlushBar").style.height = j + "em";
    document.getElementById("royalFlushPer").innerHTML = Math.round((+royalFlush.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 27.9) {
    straightFlush.innerHTML = +straightFlush.innerHTML + 1;
    i = +i + 0.03;
    document.getElementById("straightFlushBar").style.height = i + "em";
    document.getElementById("straightFlushPer").innerHTML = Math.round((+straightFlush.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 168) {
    fourOfAKind.innerHTML = +fourOfAKind.innerHTML + 1;
    h = +h + 0.03;
    document.getElementById("fourOfAKindBar").style.height = h + "em";
    document.getElementById("fourOfAKindPer").innerHTML = Math.round((+fourOfAKind.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 2600) {
    fullHouse.innerHTML = +fullHouse.innerHTML + 1;
    g = +g + 0.03;
    document.getElementById("fullHouseBar").style.height = g + "em";
    document.getElementById("fullHousePer").innerHTML = Math.round((+fullHouse.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 3030) {
    flush.innerHTML = +flush.innerHTML + 1;
    f = +f + 0.03;
    document.getElementById("flushBar").style.height = f + "em";
    document.getElementById("flushPer").innerHTML = Math.round((+flush.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 4620) {
    straight.innerHTML = +straight.innerHTML + 1;
    e = +e + 0.03;
    document.getElementById("straightBar").style.height = e + "em";
    document.getElementById("straightPer").innerHTML = Math.round((+straight.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 4830) {
    threeOfAKind.innerHTML = +threeOfAKind.innerHTML + 1;
    d = +d + 0.03;
    document.getElementById("threeOfAKindBar").style.height = d + "em";
    document.getElementById("threeOfAKindPer").innerHTML = Math.round((+threeOfAKind.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 17400) {
    noPair.innerHTML = +noPair.innerHTML + 1;
    a = +a + 0.03;
    document.getElementById("noPairBar").style.height = a + "em";
    document.getElementById("noPairPer").innerHTML = Math.round((+noPair.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 23500) {
    twoPair.innerHTML = +twoPair.innerHTML + 1;
    c = +c + 0.03;
    document.getElementById("twoPairBar").style.height = c + "em";
    document.getElementById("twoPairPer").innerHTML = Math.round((+twoPair.innerHTML / +number.innerHTML) * 100) + "%";
  }
  if (random < 43800) {
    onePair.innerHTML = +onePair.innerHTML + 1;
    b = +b + 0.03;
    document.getElementById("onePairBar").style.height = b + "em";
    document.getElementById("onePairPer").innerHTML = Math.round((+onePair.innerHTML / +number.innerHTML) * 100) + "%";
  }
  number.innerHTML = +number.innerHTML + 1;
}, 10)
