const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]; // defined array

function getAngkaTerbesarKedua(dataAngka) {
	const mengurutkan = dataAngka.sort((a, b) => a - b);
	return mengurutkan[dataAngka.length - 2];
}

console.log(getAngkaTerbesarKedua(dataAngka)); // output : 8
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua(1));

//done
