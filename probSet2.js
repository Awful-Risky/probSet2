//---------------------------------------

// var str="reverse"

// // function firstReverse (string) {
// // 	var array = string.split('')
// // 	newArray = []
// // 	for (i=array.length-1; i>=0; i-=1) {
// // 		newArray.push(array[i]);
// // 	}
// // 	newString = newArray.join('');
// // 	return newString;
// // }

// // testIt = firstReverse(str);
// // console.log(testIt);

//---------------------------------------


var str="swapCASEa"

function swapCase (string) {
	var array = string.split('')
	for (i=0; i<array.length; i++) {
		if (array[i] === array[i].toLowerCase()) {
			array[i] = array[i].toUpperCase();
		}
		else {
			array[i] = array[i].toLowerCase();
		}
	}
	newString = array.join('');
	return newString;
}
testIt = swapCase(str);
console.log(testIt);


//---------------------------------------


