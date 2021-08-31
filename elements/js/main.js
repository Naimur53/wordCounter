var para = " qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiopqwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuioqwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuioqwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiopqwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiopqwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yuiop qwert yui";
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