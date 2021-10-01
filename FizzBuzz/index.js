
function countUp() {

  document.getElementById('monitor').innerHTML++;

  const num = document.getElementById('monitor').innerHTML;

  if(num % 15 == 0) {
    document.getElementById('display').innerHTML = 'FizzBuzz';
  } else if (num % 5 == 0) {
    document.getElementById('display').innerHTML = 'Buzz';
  } else if(num % 3 == 0) {
    document.getElementById('display').innerHTML = 'Fizz';
  } else {
    
  }

}



