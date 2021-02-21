function setTimeoutAgain() {

    var t = setTimeout(function() {

        var se = getSecond()
            //console.log('run-'+se)

        if (se == 4) {
            setHistory()
            changeWay()
        }

        if (se == 7) {
            var numberSet = getValueSet()
            setPrice(numberSet)
        }
        if (se == 8) {
            //console.log(se)
            build()
        }
        if (se == 30) {
            //console.log('30')
        }
        setTimeoutAgain()
    }, 1000);
}
var isWIN = true;
var glb_whatWay = true; //up/down
var tem = {};
tem.old = getMoney();
tem.new = 0;

function reloadIsWin() {
    tem.new = getMoney()
    var status = false
    if (tem.new > tem.old) {
        status = true
    }
    tem.old = tem.new
    return status
}

function setPrice(number) {
    conso = conso.toString();
    jQuery("#InputNumber").val(conso);
    $(function() {
        $('#InputNumber').keydown();
        $('#InputNumber').keypress();
        $('#InputNumber').keyup();
        $('#InputNumber').blur();
    });
}

function getMoney() {
    var tien = jQuery('.balance b').text()

    tien = tien.replace(/,/g, '')
    tien = parseFloat(tien.substring(1));
    return tien
}

function build() {
    var isOff = jQuery('#rightContent .btnSuccess').hasClass('colorDisable')
    if (isOff == false) {
        jQuery('#rightContent .btnSuccess').trigger('click')
    }

    //glb_whatWay check to up/down

    setPrice()
        //console.log("is win: "+reloadIsWin())
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
    return s
}

//48,49,50
var clGreen = '#31BAA0'
var clRed = '#FC5F5F'
    //true=green, false=red
function colorAt(at) {
    var postion = $('.highcharts-series-group').eq(0).find('path').eq(at)
    var attr = postion.attr('fill')

    if (attr == clRed) {
        false
    }
    return true;
    //return attr;
}

//status last win/lost
var atLastWin = false
    //total lost last
var numberLastFalse = 0
    //value set auto
var lostValueSet = [
        0: 1,
        1: 2,
        3: 4,
        4: 8,
        5: 16,
        6: 32,
        7: 64,
        8: 128,
    ]
    //get money back
function getValueSet() {
    var valueSet = 1;
    if (atLastWin == false) {
        valueSet = lostValueSet[numberLastFalse])
}
return valueSet
}

//set value if lost/win
function setHistory() {
    //console.log(se)
    atLastWin = reloadIsWin()
    if (atLastWin == false) {
        numberLastFalse++
    } else {
        numberLastFalse = 0
    }
    //resert value, alot of lost, back to 0
    if (numberLastFalse == lostValueSet.length - 1) {
        numberLastFalse = 0
    }
}

function changeWay() {
    var way = true;
    if (colorAt(0) == false && colorAt(1) == false && colorAt(2) == false) {
        way = false;
    }
    if (colorAt(0) == false && colorAt(1) == false) {
        way = true;
    }
    glb_whatWay = way
}

setTimeoutAgain()

//check have internet