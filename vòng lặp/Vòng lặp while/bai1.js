let num;
let sum=0;
while(num!= -1){
 num=+prompt("Nhập số:");
 document.write(num);
 document.write("<br/>");
 sum=sum+num;
}

document.write("Tổng là "+sum);