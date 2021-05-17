var para = " ";
var sp = para.split(""); 
var result ,count=0;
for(var i=0; i<sp.length; i++){
 result = sp[i]; 
 if(result == " "){
     count--; 
 }
 else{
     count++; 
 }
} 
console.log("The amount of Word is",count);