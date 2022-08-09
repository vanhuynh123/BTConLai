let mang=Array(1,5,6,9,3,10);
let input = prompt("Enter a number");
for(let i=0;i<mang.length;i++)
{
    if(mang[i]==input)
    {
        document.write("Phần tử "+input+"  nằm ở vị trí "+i);
    }
    
}