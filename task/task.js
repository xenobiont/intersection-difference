// your code here
function intersection(array1, array2) {
	return array1.filter((el) => array2.includes(el));
}

function difference(array1, array2) {
	const uniqueInArray1 = array1.filter((element) => !array2.includes(element));
	const uniqueInArray2 = array2.filter((element) => !array1.includes(element));

	// return uniqueInArray1.concat(uniqueInArray2);
	return [...uniqueInArray1, ...uniqueInArray2];
}

export { intersection, difference };
