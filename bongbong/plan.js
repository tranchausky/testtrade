
function getListCorlor(){
	//return all list color current
}
var listInTable =[]
function mappingCollorWithTime(){
	//get time
	//get color
	//51
	//46
	//5*2
	var listCollor  =getListCorlor()
	var sub = 52-46
	sub = sub*2
	if(second>30){
		sub = sub+1
	}
	var totalNumberPonint = sub
	
	listInTable = [];
	for(int i=0,i<totalNumberPonint,i++){
		listInTable[i] = listCollor[totalNumberPonint-i]
	}
	
	if(listInTable.length>4){
		//if is down
		var v0=listInTable[0]=='x'?1:-1;
		var v1=listInTable[1]=='x'?1:-1;
		var v2=listInTable[2]=='x'?1:-1;
		var v3=listInTable[3]=='x'?1:-1;
		if(v0+v1+v2+v3 <=0){
			//check point at
		}
	}
}