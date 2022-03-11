function checkEmail(email) {
	var ketentuanEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		ketentuanKhusus = /[@]/;

	if (ketentuanEmail.test(email) && ketentuanKhusus.test(email)) {
		console.log("valid");
	} else {
		console.log("invalid");
	}
	return checkEmail;
}

console.log(checkEmail("apranata@binar.co.id")); // valid
console.log(checkEmail("apranata@binar.com")); // valid
console.log(checkEmail("apranata@binar")); //invlalid
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3222)));
console.log(checkEmail());

//donexw
