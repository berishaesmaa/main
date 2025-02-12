       function displaymessage(){
        let hour =new Date().getHours();
        let message;
    }
    if(hour < 12){
    message ="Good Morning!";
 } else if(hour < 18){
    message ="Good Afternon";
 }
 else {
    message ="Good Evening"
 }

 document.getElementById(message).innerHTML=message;
 displaymessage()
 