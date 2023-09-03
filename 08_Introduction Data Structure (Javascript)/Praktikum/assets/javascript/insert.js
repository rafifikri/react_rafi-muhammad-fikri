//Insert 1
var array = ["Anggur", "Belimbing", "Ceri", "Durian", "Erbis"]
array.push("Frambos");
console.log(array);

//insert 2
var array = ["Anggur", "Belimbing", "Ceri", "Durian", "Erbis"]
array.splice(2, 0, "Frambos"); //2 untuk menentukan letak dimana akan di masukan, 0 itu jika tidak ingin ada data yang dihapus
console.log(array);