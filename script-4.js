function isValidPassword(email) {
	let KetentuanPassword = /^[\s\S]{8,}$/,
		upper = /[A-Z]/,
		lower = /[a-z]/,
		number = /[0-9]/;

	if (KetentuanPassword.test(email) && upper.test(email) && lower.test(email) && number.test(email)) {
		return true;
	}
	return false;
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());

//done

// oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s19.html //
