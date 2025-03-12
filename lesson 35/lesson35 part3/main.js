function search(){
    var input,filter,ul,li,a,i,txtvalue;
    input = document.getElementById("myinput")
    filter= input.ariaValueMax.toUpperCase();
    ul= document.getElementById("mylist");
    li= ul.getElementsByTagName("li")
    for(i=0;i<li.length;i++){
        a=li[i];
        txtvalue=a.textContent;
        if(textvalue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display="block";
        }else{
            li[i].style.display="none";
        }
    }
}