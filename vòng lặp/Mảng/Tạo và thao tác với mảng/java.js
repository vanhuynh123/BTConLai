let mang=Array();
let x=0;
let e = "<hr/>";
function add(){
 mang[x]=document.getElementById("txtValue").value;
 alert("Element:"+mang[x]+"Added at index" +x);
 x++;
 document.getElementById("txtValue").value=" ";
}   
function show(){
    for(let i=0;i<mang.length;i++)
    {
        e += "Element " + i + " = " + mang[i] + "<br/>";
    }
    document.getElementById("kq").innerHTML = e;
}