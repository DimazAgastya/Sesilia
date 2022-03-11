function getSplitName(personName) {
	var names = personName.split(" "); // untuk memberikan spasi pada nama
	console.log("firstname=" + names[0]); // nama pada urutan indeks 0
	console.log("lastName=" + names[1]); // nama pada urutan indeks 1
	console.log("middleName=" + names[2]); // // nama pada urutan indeks 2

	return getSplitName;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName(" Dwi Kuncoro "));
console.log(getSplitName(" Aurora "));
console.log(getSplitName(" Aurora "));
console.log(getSplitName(" "));
