var v_button=document.getElementById("btn1")
var v_button=document.getElementById("btn2")
var v_txt=document.getElementById("txt1")

v_button.onlick=function()
{
    v_txt.style.color="red";
    v_txt.style.backgroundColor="lightgrey";
    v_txt.style.fontSize="100px";
    v_txt.style.padding="20px"
}

v_txt.onmouseover=function()
{
    v_txt.style.cssTxt= "color: red; background-color: lightblue; text-align: center; font-size:100px; padding:20px;"
}

v_button.onlick=function()
{
    v_txt.setAttribute("class", "test")
}
 
v_button2.onlick=function()
{
    v_txt.setAttribute("class", "test2")
}
