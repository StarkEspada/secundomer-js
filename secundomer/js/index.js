var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var lapSave = document.querySelector(".lap-save");
var reset = document.querySelector(".reset");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var milliseconds = document.querySelector(".milliseconds");
var lapData = document.querySelector(".lap-data");
var resetBackground = document.querySelector(".reset-background");


var timerMilliseconds = 0 + "0";
var timerSeconds = "0" + 0
var timerMinutes = "0" + 0
var countLapData = 0
var dataLap = [];

milliseconds.innerHTML = timerMilliseconds
seconds.innerHTML = timerSeconds 
minutes.innerHTML = timerMinutes 

function changeColor(){
	var element = event.target
	element.style.background = "white";
	function colorChangeReset(){
		element.style.background = "#a6aaa75c"
	}
	setTimeout(colorChangeReset, 300);
}


function millisecondCount(){
	timerMilliseconds++
	if(timerMilliseconds === 60){
		timerMilliseconds = 0;
	} 
	milliseconds.innerHTML = timerMilliseconds
}
function secondsAndMinutesCount(){
	timerSeconds++
	if(timerSeconds === 60){
		timerSeconds = 0;
		timerMinutes++
	}
	seconds.innerHTML = timerSeconds 
	minutes.innerHTML = timerMinutes

	if(minutes.innerHTML <= 9 && minutes.innerHTML != 0){
		minutes.innerHTML = "0" + timerMinutes
	} 
	if(seconds.innerHTML <= 9){
		seconds.innerHTML = "0" + timerSeconds
	}
	console.log(minutes.innerHTML)
	if(minutes.innerHTML == 99){
		location.reload()
	}
}



start.addEventListener("click", function(){
	changeColor()
	var timerMilisecondsId = setInterval(millisecondCount, 15)
	var timerSecondAndMinutesId = setInterval(secondsAndMinutesCount, 1000)

	stop.addEventListener("click", function(){
		clearInterval(timerMilisecondsId)
		clearInterval(timerSecondAndMinutesId)
		changeColor()
	})

	reset.addEventListener("click", function(){
		resetBackground.style.background = "white"
		function resetBackgroundColor(){
			resetBackground.style.background = "#ff002fc7"
		}
		setTimeout(resetBackgroundColor, 300);
		timerMilliseconds = 0;
		timerSeconds = 0
		timerMinutes = "0" + 0
		milliseconds.innerHTML = "0" + 0
		seconds.innerHTML = "0" + 0
		minutes.innerHTML = "0" + 0
		lapData.innerHTML = ""
		clearInterval(timerMilisecondsId)
		clearInterval(timerSecondAndMinutesId)
		dataLap = []
	})
})	
lapSave.addEventListener("click", function(){
	countLapData++
	dataLap = []
	console.log(dataLap.length)
	changeColor()
	var intervalTime = minutes.innerHTML + ":" + seconds.innerHTML + ":" + milliseconds.innerHTML
	dataLap.push(intervalTime)
	console.log(dataLap)
	for(var i = 0; i < dataLap.length; i++){
		var boxDataLap = document.createElement("div")
		boxDataLap.classList.add("interval-timer")
		lapData.appendChild(boxDataLap)
		boxDataLap.innerHTML = dataLap[i]
	}
	if(countLapData === 13){
		lapData.innerHTML = ""
		countLapData = 0
	}
})
