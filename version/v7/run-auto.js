function getInView() {
    var idget = $('.bet-wrapper')
    var text = idget.find('.font-14.mb-0').text()
    var havetime = idget.find('.font-18.mb-0').text()
    havetime = havetime.replace("s", "");
    var rs = {}
    rs.time = parseInt(havetime);
    rs.way = '';
    if (text == 'Hãy đặt lệnh') {
        rs.way = 1; //cann buy
    }
    if (text == 'Chờ Kết quả') {
        rs.way = 0;
    }
    return rs;
}

var timeLoopMain;
function setTimeoutAgain() {


    var timeLoopMain = setTimeout(function() {
        var se = getSecond();
        //clog('run-' + se)

        var info = getInView()
        switch (info.way) {
            case 0:
                tem.status.setPrice = 0;
                tem.status.Build = 0;
                tem.status.setHistory = 0;
                break;
            case 1:

                if (info.time > 20 && info.time <= 25 && tem.status.setHistory == 0) {
                    tem.status.setHistory = 1;
                    clog('run-setHistory');
                    setHistory();
                }
                if (info.time > 15 && info.time <= 20 && tem.status.setPrice == 0) {
                    clog('run- set prices')
                    tem.status.setPrice = 1;
                    var numberSet = getValueSet();
                    setPrice(numberSet);
                }
                if (info.time > 0 && info.time <= 3 && tem.status.Build == 0) {
                    tem.status.Build = 1;
                    clog("Build");
                    build(changeWayV2());
                }
                break;
            default:
                break;
        }

        /*
        if (se == 10 && tem.is_show_first == true) {
            clog('run-setHistory')
            setHistory()
        }
        if (se == 10 && tem.is_show_first == true) {
            //clog('run- set prices')

            var current = getMoney();
            console.log('change money from ' + tem.first + ' to ' + current + ' =' + (current - tem.first))
            if (current - tem.first > tem.maxWin) {

                //is_build = false;
                tem.is_show_first = false;
                tem.time_win = new Date().toLocaleTimeString();
                clog('Win over 50usd from ' + tem.first + ' to ' + current)
                clog("from " + tem.time_old + ' to ' + tem.time_win)
            } else {
                var numberSet = getValueSet();
                setPrice(numberSet);
            }
        }

        if (se == 26 && tem.is_show_first == true) {
            var numberSet = getValueSet();
            setPrice(numberSet);
        }
        if (se == 28 && tem.is_show_first == true) {
            clog("Build");
            //changeWay()
            // build(changeWay())
            build(changeWayV2());
        }
        */
        //if(se ==30){
        //console.log('30')
        //}
        setTimeoutAgain();
    }, 1000);
}
var isWIN = true;
var glb_whatWay = true; //up/down
var tem = {};

tem.timeForBuy = 2;
tem.timeSetPrice = 4;
tem.timeSetHistory = 10;

tem.keyBuy = 1; //key buy
tem.keyCheck = 0; //key check

tem.old = getMoney();
tem.new = 0;
tem.first = getMoney();
tem.is_show_first = true;
tem.time_old = new Date().toLocaleTimeString();
tem.time_win = '';
tem.maxWin = 50;

tem.status = {}
tem.waychoose = '';
tem.isLastWin = '';
//total lost last
tem.numberFalse = 0;
tem.lastPrices = 0;
tem.listRule = null;
tem.listLostSet = null;
tem.account = null;
tem.is_new ='New--';


var configPauseTime = 2; //minus
var configPauseWillLost = 2; //number false and after will resert =0

function reloadIsWin() {
    tem.new = getMoney();
    var status = '';
    if (tem.new > tem.old) {
        status = true;
    }
    if (tem.new < tem.old) {
        status = false;
    }
    tem.old = tem.new;
    return status;
}

function setPrice(conso) {
    conso = conso.toString();
    jQuery("#InputNumber").val(conso);
	tem.lastPrices = conso;
    $(function() {
        $('#InputNumber').keydown();
        $('#InputNumber').keypress();
        $('#InputNumber').keyup();
        $('#InputNumber').blur();
    });
}

function getMoney() {
    var tien = jQuery(".balance b").text();

    tien = tien.replace(/,/g, "");
    tien = parseFloat(tien.substring(1));
    return tien;
}

function build(isWay) {
    clog("is--isWay:" + isWay);
    switch (isWay) {
        case 'x':
            //up
            clog("buy up");
            jQuery("#rightContent .btnSuccess").trigger("click");
            break;
        case 'd':
            //down
            clog("buy down");
            jQuery("#rightContent .btnDown").trigger("click");
            break;
        default:
            //no action buy
            clog("no buy");
            break;
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getSecond() {
    var d = new Date();
    //var x = document.getElementById("demo");
    var s = addZero(d.getSeconds());
    //x.innerHTML = s;
    return s;
}

//48,49,50
var clGreen = "#31BAA0";
var clRed = "#FC5F5F";
//true=green, false=red
function colorAt(at) {
    var lenght = $(".highcharts-series-group").eq(0).find("g").eq(0).find("path").length - 1;
    var last = lenght - parseInt(at);
    //var postion = $('.highcharts-series-group').eq(0).find('path').eq(last);
    var postion = $(".highcharts-series-group").eq(0).find("g").eq(0).find("path").eq(last);

    var attr = postion.attr("fill");

    if (attr == clRed) {
        return false;
    }
    return true;
    //return attr;
}

//status last win/lost
var atLastWin = false;

//value set auto
var lostValueSet = {
  	0: 1,
    1: 2,
    2: 4,
    3: 6,
    4: 8,
    5: 10,
    6: 12,
    7: 14,
    8: 16,
    9: 18,
    10: 20
};
//get money back
function getValueSet() {
    var valueSet = 1;
    if (atLastWin != true) {
        if (typeof lostValueSet[tem.numberFalse] !== 'undefined') {
            valueSet = lostValueSet[tem.numberFalse];
        } else {
            tem.numberFalse = 0;
            valueSet = 1;
        }

    }
    return valueSet;
}

//set value if lost/win
function setHistory() {
    //console.log(se)
    atLastWin = reloadIsWin();

	tem.listRule = listRule;
	tem.listLostSet = lostValueSet;
	tem.isLastWin = atLastWin;
	
	tem.account = tem.is_new+$('.d-flex.flex-column.mr-lg-2.mr-2').text();
	tem.configPauseTime = configPauseTime
	tem.configPauseWillLost = configPauseWillLost
	
    switch (atLastWin) {
        case false:
			postLog();
            tem.numberFalse++;
			if(tem.numberFalse > configPauseWillLost){
				//pase and will try call
				tem.numberFalse = 0;
				clearTimeout(timeLoopMain) //stop
				setTimeout(function () { setTimeoutAgain() }, configPauseTime*1000); //wake up main function
			}
            break;
        case true:
			postLog();
            tem.numberFalse = 0;
            break;
        default:
            break;
    }
    
    

    clog('last_event:' + atLastWin)
    clog('number lost:' + tem.numberFalse)
        //resert value, alot of lost, back to 0
    if (tem.numberFalse > parseInt(lostValueSet.length) - 1) {
        tem.numberFalse = 0;
    }
}

var listRule = [
    "xxx->x"
];

function changeWayV2() {

    listRule = listRule.sort((a, b) => b.length - a.length);
    tem.waychoose = '';
    for (var property in listRule) {
        var rule = listRule[property];
        var arrRule = rule.split("->");
        if (arrRule.length == 2) {
            var listCheck = arrRule[0];
            var way = arrRule[1];
            var colors = getListColor();
            var isCheck = true;
            for (var propertyOne in listCheck) {
                if (colors[propertyOne] == listCheck[propertyOne]) {} else {
                    isCheck = false;
                }
            }
            if (isCheck == true) {
                clog(listCheck + "->" + way);
                tem.waychoose = listCheck + "->" + way;
                return way;
            }
        }
    }
    return null
}

function getListColor() {
    var listColor = [];

    var size = $(".highcharts-series-group").eq(0).find("g").eq(0).find("path").length - 1;

    for (var i = size; i >= 0; i--) {
        var postion = $(".highcharts-series-group").eq(0).find("g").eq(0).find("path").eq(i);

        var attr = postion.attr("fill");
        var way = 'x';
        if (attr == clRed) {
            way = 'd';
        }

        listColor.push(way);
    }
    //console.log(listColor)
    return listColor;
}

setTimeoutAgain();

function clog(vl) {
    //console.log(vl);
}



function postLog() {

    var datasend = {}
    datasend.way = tem.waychoose;
    datasend.is_win = tem.isLastWin;
    datasend.version = '';
	datasend.log = tem;
    datasend.user = getCookie("userTime");
    var obj = JSON.stringify(datasend)

    var strSend = b64EncodeUnicode(obj);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML = this.responseText;
        }
    };
	var linksend ="https://chau.link/logs/run.php";
    xhttp.open("POST", linksend, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhttp.send("fname=Henry&lname=Ford");
    xhttp.send("v=" + strSend);
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}


//set cooki
checkCookie()

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("userTime");
  if (user != "") {
  } else {
	  user = Date.now()
      setCookie("userTime", user, 365);
  }
}

//check have internet