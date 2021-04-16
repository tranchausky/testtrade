function getLCAL() {
    var list = getDataLo();
    if (list.order < 2) {
        list.timeStatic = Date.now();
        listTime.push(list)
    }
}

function getDataLo() {
    var data = localStorage.getItem("CAN");
    return JSON.parse(data)
}

function clearAndPush() {
    var obj = JSON.stringify(listTime)
    listTime = []

    var strSend = b64EncodeUnicode(obj);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    var linksend = "http://localhost/trade/testtrade/version/v6-log/long_local.php";
    xhttp.open("POST", linksend, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("v=" + strSend);
}

var listTime = [];

loop1()

function loop1() {
    setTimeout(() => {
        getLCAL()
        loop1()
    }, 1000);
}
loop2()

var nowLog = false;

//check log
function startLog() {
    if (nowLog == true) {
        return;
    }
    var d = new Date();
    var n = d.getSeconds();
    if (n > 40) {
        loop2()
        nowLog = true;
    }
    setTimeout(() => {
        startLog()
    }, 1000); //2 minus
}

function loop2() {

    setTimeout(() => {
        clearAndPush()
        loop2()
    }, 2 * 60 * 1000); //2 minus
}