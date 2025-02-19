var wakeuptime;
var dstime;
var sleeptime;
var noon=12;

function showCurrentTime(){
    var clock=document.getElementById('clock')
    var CurrentTime= new Date();

    var hours= CurrentTime.getHours();
    var minutes=CurrentTime.getMinutes();
    var seconds=CurrentTime.getSeconds();

    var meridan="AM";
    
    if(hours >= noon){
        meridan="PM";
    }

    var clockTime=hours +":" + minutes +":" seconds + " " + meridan;
    clock.innerText=clockTime;
    changeImage();

};

var oneSecond=1000;

setInterval(showCurrentTime,oneSecond);

function changeImage(){
    var time=new Date().getHours;
    console.log(time);

    var image= "ds_clock.png";
    var image=HTML= document.getElementById("timeImage")

    if(time == wakeuptime){
        image="morning.gif";
        console.log("morning");
    }

    else if(time == dstime){
        image="class.gif";

    }

    else if(time == sleeptime){
        image="night.gif"
    }
    imageHTML.src=image;
    console.log(imageHTML.src)
}

function uptadeClock(){
    var wakeUpTimeSelector=document.getElementById('wakeUpTimeSelector');

    wakeuptime=wakeUpTimeSelector.value;

    var dsTimeSelector=document,getElementById('dsTimeSelector');

    dstime=dsTimeSelector.value;

    var sleepTimeSelector=document.getElementById('sleepTimeSelector');

    sleeptime=sleepTimeSelector.value;
}

var saveBUtton=document.getElementsById("saveButton");

saveButton.addEventListener("click, uptadeClock");