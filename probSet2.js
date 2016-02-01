//---------------------------------------

var str="reverse"

function firstReverse (string) {
	array = string.split('')
	newArray = []
	for (i=array.length-1; i>=0; i-=1) {
		newArray.push(array[i]);
	}
	newString = newArray.join('');
	return newString;
}

testIt = firstReverse(str);
console.log(testIt);

//---------------------------------------


