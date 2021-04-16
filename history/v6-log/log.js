var timeFrame = {}
timeFrame.mainFrameList = [
	//7,17,27,37,47,57
	7,20,54,37,47,57
];
timeFrame.mainFrameSecond = 40;
timeFrame.logMinus = 0;
timeFrame.isLoopOne = true
timeFrame.log={}
timeFrame.log.one ={
	key: 'one',
	isRun :true,
	timeStart:15000, //15s
	timeReBuild:120000, //1phut 40s
	isWin:false,
	numberLost:0,
}
timeFrame.log.three ={
	key: 'three',
	isRun :true,
	timeStart:75000,
	timeReBuild:120000, //1phut 40s
	isWin:false,
	numberLost:0,
}

var lostValueSet = {
    0: 1,
    1: 2,
    2: 4,
    3: 6
};


function loopOne(){
	if(!timeFrame.isLoopOne){
		return;
	}
	//console.log('run loopOne')
	var t1 = setTimeout(function() {
		
		//var currentDate = new Date()
		var gio = getTimeNow();
		//gio.minuti = currentDate.getMinutes()
		//gio.secondi = currentDate.getSeconds()
		console.log('loop '+gio.secondi)
        var is_in_time_first_time = timeFrame.mainFrameList.includes(gio.minuti);
        if(is_in_time_first_time==true && gio.secondi>40){
			console.log('loop secondi>40')
			timeFrame.isLoopOne = false;
			
			var result = checkGetAt4Point();
			if(result.one ==true){
				console.log('loop one')
				timeFrame.one = true
				//var timeLoop = 15000; //15 second build
				loopElement(timeFrame.log.one,timeFrame.log.one.timeStart)
			}else{
				timeFrame.one = false;
			}
			
			/*
			if(result.three ==true){
				console.log('loop three')
				timeFrame.three = true
				loopElement(timeFrame.log.three,timeFrame.log.three.timeStart)
			}else{
				timeFrame.three = false;
			}
			*/
			
			
		}else{
			loopOne();
		}
		
	}, 1000);
}
function checkGetAt4Point(){
	var rs = {};
	rs.one = false;
	rs.two = false;
	rs.three = false;
	rs.four = false;
	var at1 = 1
	var at2 = 1
	var at3 = 1
	var at4 = 1
	if(at1+at2+at3+at4>=0){
		if(at1 ==1){
			rs.one = true;
		}
		if(at1 ==1){
			rs.two = true;
		}
		if(at1 ==1){
			rs.three = true;
		}
		if(at1 ==1){
			rs.four = true;
		}
	}
	return rs
}
function loopElement(logObject,timeLoop){
	console.log(logObject)
	console.log(getTimeNow())
	var t1 = setTimeout(function() {
		//build
		console.log('run loopElement after:'+timeLoop)
		//var isWin = checkHistory(logObject)
		if(logObject.isWin==false){
			setPrices(logObject)
			builDown(logObject)
			checkHistory(logObject,logObject.key,40000)
			//for next loop
			loopElement(logObject,logObject.timeReBuild)
			
		}
	}, timeLoop);
}


function checkHistory(obj,key,timecheck){
	console.log('for histor')
	console.log(obj,key,timecheck)
	
	
	//set prices
	var t1 = setTimeout(function() {
		console.log('checkHistory at :'+key)
		console.log(getTimeNow())
		//set histoiry for object
	}, timecheck);
	//return false;
}
function setPrices(obj){
	//set prices
	console.log('set price:'+ obj.key)
}
function builDown(obj){
	//click down
	console.log('build:'+ obj.key)
}
function getTimeNow(){
	var timeRe ={}
	var currentDate = new Date()
	timeRe.hours = currentDate.getHours()
	timeRe.minuti = currentDate.getMinutes()
	timeRe.secondi = currentDate.getSeconds()
	return timeRe;
}

loopOne()