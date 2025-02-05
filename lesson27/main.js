function showMessage(){
    alert("This message is inside the function")
}

showMessage();

function sum(number1, number2){
    return number1 +number2;

}

console.log(sum(25,5));


function dsfunction(){
    var localvar = "digital school";
    alert(localvar);

}

dsfunction();


function toCelecius(f){
    return(5/9) * (f-32);

}
console.log("54 fahrenheit is equal to" +toCelecius(54)+"celcius");

var result=toCelecius(54);

console.log("54 fahrenheit is equal to" +toCelecius(54)+"celcius");

function toSeconds(minutes){
    return minutes *60;

}
console.log(toSeconds*(60));


var car= {
    name:"Mercedes",
    color:"white",
    year:2020,
    kilometres:0,
    startengine: function(){
    alert("testtttt"),
},
get getkilometers(){
    return this.kilometres;
}
set  setKilometers(km){
    this.kilometres =km;

}
console.log(car getkilometers);
captureEvents.setKilometers=100;

console.log(car.getkilometers);




function Computer(name , cpu, ram,gpu){
    this.name=name
    this.cpu=cpu;
    this.ram=ram;
    this.gpu=gpu;
}

var computer1= new  Computer("macbook", "mi 8-core", "8gb", "5600m gpu");
var computer2= new Computer("dell", "mi 8-core", "8gb", "5600m gpu" );
var computer2=new Computer( "lenovo", "mi 8-core", "8gb", "5600m gpu")
