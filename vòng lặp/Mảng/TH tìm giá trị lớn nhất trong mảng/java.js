let mang = Array(5,3,7,9,11,23,4);
let max= mang[0];
for(let i=0;i<mang.length;i++)
{
    if(max<=mang[i])
    {
        max=mang[i];
    }
}
document.write("Phần tử lớn nhất là:"+max);