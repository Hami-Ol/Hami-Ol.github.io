// sum
const sum = (a, b) => a + b;
// multiply
const mul = (a ,b) => a * b;

//reverse a string 
function reverse(s) {
  return s.split('').reverse().join('');
}

function filterLongwords(str, i) {
	let word = str.filter(s => s.length > i);
  return word;
}

