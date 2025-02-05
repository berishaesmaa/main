var btn_circle=document.getElementById("btnCircle");
var btn_rect=document.getElementyVyId("btnRect");
var btn_rect=document.getElementById("btnTriangle");

var circle=document.getElementById("Circle");
var rect=document.getElementById("rect");
var triangle=document.getElementById("triangle");

btn_circle.onlick=function()
{
    circle.setAttribute("class","shape_circle");

}
btn_rect.onlick=function()
{
    rect.setAttribute("class","shape_rect")
}
btn_triangle.onlick=function()
{
    triangle.setAttribute("class","shape_triangle")
}

circle.onlick=function()
{
    circle.setAttribute("class","hide");
}

rect.onlick=function()
{
    rect.setAttribute("class","hide");
}

triangle.onlick=function()
{
    triangle.setAttribute("class","hide")
}