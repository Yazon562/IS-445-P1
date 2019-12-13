//function

function calcPrimeNumber()

{

//reading numbers from input fields

var beginNum = parseInt(document.numbers.firstNum.value);

var endNum = parseInt(document.numbers.secondNum.value);

  

//array to hold prime numbers

var primeNumbs = new Array();

var ctr = beginNum;

//loop to store primer numbers in array

while(ctr<=endNum)

{

if(isPrime(ctr)==true)

{

primeNumbs[primeNumbs.length] = ctr;

}

ctr = ctr+1;

}

//if no length is zero, then no prime numbers

if (primeNumbs.length == 0)

{

document.getElementById('output_content').innerHTML = "Invalid input, please try again.";

}else

{   

//else print prime number count and prime numbers in the range

var count="<h2>There are this many prime numbers:</h2>";

var html = "<h2>Prime Numbers</h2>";

for(i=0;i<primeNumbs.length;i++)

{

html += primeNumbs[i] + "<br/>";

}

document.getElementById('prime_count').innerHTML = count+"<b>"+primeNumbs.length+"</b>";

document.getElementById('output_content').innerHTML ="<b>"+html+"</b>";

}

}

//function to check the whether the number is primer or not

function isPrime(num)

{

var flag = true;

//loop to check prime number or not

for(var i=2; i<=Math.ceil(num/2); i++)

{

if((num%i)==0)

{

flag = false;

break;

}

}

return flag; //return true or false

}

