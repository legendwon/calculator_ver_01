const readline = require('readline-sync');

while(true){

let num1 = readline.question("Enter the first number:(프로그램 종료는 q를 누르시오) ");
var a = Number(num1);

if (num1=='q')
{
  console.log("프로그램 종료");
  return 0;

}
let num2 = readline.question("Enter the second number: ");
let sym = readline.question("Enter the operator (+ or - or * or /)\n (& or | or ^ or << or >>): ");

var b = Number(num2);

let calculator = {
  calculation: function(){
      if (sym === '+') {
      console.log( num1,sym,num2, "=", a + b);
    }
    else if (sym === '-') {
      console.log( num1,sym,num2, "=",a - b);
    } else if (sym === '*') {
      console.log( num1,sym,num2, "=",a * b);
    } else if (sym === '/') {
        console.log( num1,sym,num2, "=",a / b); 
    }
    else if (sym === '/') {
        console.log( num1,sym,num2, "=",a / b); 
    }

    else if (sym === '&') {

      let result1 = a & b;

      console.log(result1); 
  }

else if (sym === '|') {

  let result2 = a | b;
  
  console.log(result2); 
}

else if (sym === '^') {

  let result3 = a ^ b;
  
  console.log(result3); 
}

else if (sym === '<<') {

  let result4 = a << b;
  
  console.log(result4); 
}
else if (sym === '>>') {

  let result5 = a >> b;
  
  console.log(result5); 
}

    
    else {
      console.log("Invalid operator");
  }
  
}
}


calculator.calculation();

}