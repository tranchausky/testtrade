function setTimeoutAgain() {
    var t = setTimeout(function () {
        var se = getSecond();
        //clog('run-'+se)

        if(se ==22){
            //clog('run-setHistory')
            setHistory()

        }
       // if(se ==25){
        //clog('run- set prices')
           // var numberSet =getValueSet();
          //  setPrice(numberSet);
        //}
        //var is_build = true;
        if(se ==20 && tem.is_show_first ==true){
            //stop win if get 50 usd
            var current = getMoney();
            console.log('change money from '+tem.first +' to ' +current+' ='+ ( current-tem.first) )
            //if(current - tem.first > 50 ){
                //is_build = false;
                //tem.is_show_first =false;
                tem.time_win = new Date().toLocaleTimeString();
            //    clog('Win over 50usd from '+tem.first +' to '+current)
                clog("from "+ tem.time_old +' to '+tem.time_win) 
            //}
        }

        if (se == 28 && tem.is_show_first ==true) {
            clog("Build");
            //changeWay()
            // build(changeWay())
            build(changeWayV2());
        }
        //if(se ==30){
        //console.log('30')
        //}
        setTimeoutAgain();
    }, 1000);
}
var isWIN = true;
var glb_whatWay = true; //up/down
var tem = {};
tem.old = getMoney();
tem.new = 0;
tem.first = getMoney();
tem.is_show_first = true;
tem.time_old = new Date().toLocaleTimeString();
tem.time_win = '';
tem.total_play = 0;


function reloadIsWin() {
    tem.new = getMoney();
    var status = 'no-change';
    if (tem.new > tem.old) {
        status = true;
    }
    if (tem.new < tem.old) {
        status = false;
    }
    tem.old = tem.new;
    return status;
}
function setPrice(number) {
    jQuery("#InputNumber").val(number).trigger("focus");
    jQuery("#rightContent .btnSuccess").trigger("focus");
}
function getMoney() {
    var tien = jQuery(".balance b").text();

    tien = tien.replace(/,/g, "");
    tien = parseFloat(tien.substring(1));
    return tien;
}
function build(isWay) {
    //var isOff = jQuery('#rightContent .btnSuccess').hasClass('colorDisable')
    //if(isOff == false){
    //    jQuery('#rightContent .btnSuccess').trigger('click')
    //}

    //glb_whatWay check to up/down

    //setPrice()
    //console.log("is win: "+reloadIsWin())


    var moneycurrent = $('#InputNumber').val()
    

    clog("is--isWay:" + isWay);
    switch (isWay) {
        case 'x':
            //up
            clog("buy up");
            jQuery("#rightContent .btnSuccess").trigger("click");
            tem.total_play = parseFloat(tem.total_play) + parseFloat(moneycurrent);
            break;
        case 'd':
            //down
            clog("buy down");
            jQuery("#rightContent .btnDown").trigger("click");
            tem.total_play = parseFloat(tem.total_play) + parseFloat(moneycurrent);
            break;
        default:
            //no action buy
            clog("no buy");
            break;
    }
    console.log('play total money: '+tem.total_play)
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
function test() {
    console.log(colorAt(0));
    console.log(colorAt(1));
    console.log(colorAt(2));
    console.log(colorAt(3));
    console.log(colorAt(4));
}

//status last win/lost
var atLastWin = false;
//total lost last
var numberLastFalse = 0;
//value set auto
var lostValueSet = {
    0: 1,
    1: 2,
    2: 4,
    3: 8,
    4: 16,
    5: 32,
    6: 64
};
//get money back
function getValueSet() {
    var valueSet = 1;
    if (atLastWin != true) {
        valueSet = lostValueSet[numberLastFalse];
    }
    return valueSet;
}

//set value if lost/win
function setHistory() {
    //console.log(se)
    atLastWin = reloadIsWin();
    
    switch (atLastWin){
        case false:
            numberLastFalse++;
            break;
        case true:
            numberLastFalse = 0;
            break;
        default:
            break;
    }
    console.log('last_event:'+ atLastWin)
    //console.log('number lost:'+ numberLastFalse)
    //resert value, alot of lost, back to 0
    if (numberLastFalse == lostValueSet.length - 1) {
        numberLastFalse = 0;
    }
}

function changeWay() {
    var way = null;

    //1-true
    if (colorAt(0) == true && colorAt(1) == false && colorAt(2) == true && colorAt(3) == true && colorAt(4) == true) {
        clog("xdxxx->x");
        return true;
    }

    if (colorAt(0) == false && colorAt(1) == true && colorAt(2) == true && colorAt(3) == true && colorAt(4) == true) {
        clog("dxxxx->x");
        return true;
    }

    if (colorAt(0) == true && colorAt(1) == true && colorAt(2) == true && colorAt(3) == false) {
        clog("xxxd->x");
        return true;
    }
    if (colorAt(0) == true && colorAt(1) == true && colorAt(2) == true && colorAt(3) == true) {
        clog("xxxx->x");
        return true;
    }
    if (colorAt(0) == true && colorAt(1) == true && colorAt(2) == true) {
        clog("xxx->x");
        return true;
    }
    if (colorAt(0) == false && colorAt(1) == true && colorAt(2) == false) {
        clog("dxd->x");
        return true;
    }
    if (colorAt(0) == true && colorAt(1) == true && colorAt(2) == false) {
        clog("xxd->x");
        return true;
    }
    //2 false

    if (colorAt(0) == false && colorAt(1) == true && colorAt(2) == false && colorAt(3) == false && colorAt(4) == false) {
        clog("dxddd->d");
        return false;
    }
    if (colorAt(0) == true && colorAt(1) == false && colorAt(2) == false && colorAt(3) == false && colorAt(4) == false) {
        clog("xdddd->d");
        return false;
    }
    if (colorAt(0) == false && colorAt(1) == false && colorAt(2) == false && colorAt(3) == true) {
        clog("dddx->d");
        return false;
    }
    if (colorAt(0) == false && colorAt(1) == false && colorAt(2) == false && colorAt(3) == false) {
        clog("dddd->d");
        return false;
    }
    if (colorAt(0) == false && colorAt(1) == false && colorAt(2) == false) {
        clog("ddd->d");
        return false;
    }
    if (colorAt(0) == true && colorAt(1) == false && colorAt(2) == true) {
        clog("xdx->d");
        return false;
    }
    if (colorAt(0) == false && colorAt(1) == false && colorAt(2) == true) {
        clog("ddx->d");
        return false;
    }
    return way;
    //glb_whatWay = way
    //return way
}

function changeWayV2() {
var listRule = [
    "d->x",
    "x->d",
    "dddd->d",
    "xxxx->x"
];

listRule = listRule.sort((a,b) => b.length - a.length);

    for (var property in listRule) {
        var rule = listRule[property];
        var arrRule = rule.split("->");
        if (arrRule.length == 2) {
            var listCheck = arrRule[0];
            var way = arrRule[1];
            var colors = getListColor();
            var isCheck = true;
            for (var propertyOne in listCheck) {
                if (colors[propertyOne] == listCheck[propertyOne]) {
                } else {
                    isCheck = false;
                }
            }
            if (isCheck == true) {
                clog(listCheck + "->" + way);
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
    console.log(vl);
}

//check have internet

