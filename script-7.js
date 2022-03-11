const dataPenjualanPakAldi = [
	{
		namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
		hargaSatuan: 760000,
		kategori: "Sepatu Sport",
		totalTerjual: 90,
	},
	{
		namaProduct: "Sepatu Warrior Tristan Black Brown High",
		hargaSatuan: 960000,
		kategori: "Sepatu Sneaker",
		totalTerjual: 37,
	},
	{
		namaProduct: "Sepatu Warrior Tristan Maroon High ",
		kategori: "Sepatu Sneaker",
		hargaSatuan: 360000,
		totalTerjual: 90,
	},
	{
		namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
		hargaSatuan: 120000,
		kategori: "Sepatu Sneaker",
		totalTerjual: 90,
	},
];

const hitungTotalPenjualan = dataPenjualanPakAldi.reduce((dataEstafet, item) => {
	const hargaTotal = dataEstafet + item.totalTerjual;

	return hargaTotal;
}, 0);

console.log(hitungTotalPenjualan);

// https://sebhastian.com/javascript-sum-array-objects/
// https://www.google.com/search?q=javascript+calculate+total+value+from+array+of+objects&client=safari&rls=en&sxsrf=APq-WBtYu2GjxBmX-mjBBKcFHehFkneE1w%3A1646726371083&ei=4wwnYvvWBJzVz7sPufGXoAQ&oq=javascript+calculate+total+value+from+array+of+ob&gs_lcp=Cgdnd3Mtd2l6EAMYADIICCEQFhAdEB4yCAghEBYQHRAeMggIIRAWEB0QHjoHCAAQRxCwAzoGCAAQFhAeSgQIQRgASgQIRhgAUJwFWMoeYLMlaAFwAXgAgAGMAYgBghCSAQQwLjE3mAEAoAEByAEIwAEB&sclient=gws-wiz
