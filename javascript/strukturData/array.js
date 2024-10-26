//array judulLaguFavorit berisi 3 data, yaitu string "Main serong", "London", dan "Cari Rasa"
let judulLaguFavorit = ["Main serong", "London", "Cari Rasa"];
console.log(judulLaguFavorit);

//mengakses data dalam array
console.log(judulLaguFavorit[0]); //mengakses data pertama
console.log(judulLaguFavorit[1]); //mengakses data kedua
console.log(judulLaguFavorit[2]); //mengakses data ketiga

//menghitung panjang array
console.log(judulLaguFavorit.length);

//menghitung tipe data array
console.log(typeof judulLaguFavorit);

//mengakses data yang tidak ada di array (akan menghasilkan undefined)
console.log(judulLaguFavorit[5]); //mengakses data yang tidak ada di array

//mengganti nilai
judulLaguFavorit[2] = "Racun Dunia";

console.log(judulLaguFavorit);

judulLaguFavorit[10] = "Berangkat";

console.log(judulLaguFavorit);

// contoh penggunaan method push() untuk menambahkan data di akhir array
judulLaguFavorit.push("Gila-gilaan ");

console.log(judulLaguFavorit);

//contoh penggunaan method pop() untuk menghapus data terakhir di array
let terakhir = judulLaguFavorit.pop();
console.log(terakhir); //mengakses data yang dihapus
console.log(judulLaguFavorit);

//contoh penggunaan method unshift() untuk menambahkan data di awal array
judulLaguFavorit.unshift("Kangen", "Penyakit Cinta");

console.log(judulLaguFavorit);

//contoh penggunaan method shift() untuk menghapus data pertama di array
let pertama = judulLaguFavorit.shift();

console.log(pertama); //mengakses data yang dihapus
console.log(judulLaguFavorit);

//contoh penggunaan method splice() untuk menghapus data di tengah array
let tengah = judulLaguFavorit.splice(2, 2);
console.log(tengah); //mengakses data yang dihapus
console.log(judulLaguFavorit);

//contoh penggunaan method slice() untuk mengcopy data di tengah array
let copyTengah = judulLaguFavorit.slice(2, 4);
console.log(copyTengah); //mengakses data yang dicopy
console.log(judulLaguFavorit);

//contoh penggunaan method indexOf() untuk mencari data di array
let index = judulLaguFavorit.indexOf("Berangkat");
console.log(index); //mengakses index dari data yang dicari
console.log(judulLaguFavorit);

//contoh penggunaan method includes() untuk mencari data di array
let ada = judulLaguFavorit.includes("Berangkat");
console.log(ada); //mengakses boolean dari data yang dicari
console.log(judulLaguFavorit);

//contoh penggunaan method find() untuk mencari data di array dengan menggunakan callback
const cari = judulLaguFavorit.find((judulLagu) => judulLagu === "Berangkat");
console.log(cari); //mengakses data yang dicari
console.log(judulLaguFavorit);

//contoh penggunaan method findIndex() untuk mencari index dari data di array dengan menggunakan callback
const indexCari = judulLaguFavorit.findIndex(
  (judulLagu) => judulLagu === "Berangkat"
);
console.log(indexCari); //mengakses index dari data yang dicari
console.log(judulLaguFavorit);

//contoh penggunaan method concat() untuk menggabungkan array dengan array lain
const laguLain = ["Cinta", "Benci"];
const gabungan = judulLaguFavorit.concat(laguLain);

console.log(gabungan); //mengakses data yang digabungkan

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(angka);

// Meskipun menggunakan const, nilai array dapat di tambah dan di ubah
// karena const hanya mengikat nama variabel, bukan nilai yang diikat
angka.push(11);

console.log(angka);

const board = [
  ["o", null, "x"],
  ["o", null, "x"],
  ["o", "x", "o"],
];

console.log(board[1][2]); // mengakses data pada board[0][1];

console.log(board[0][0]); // mengakses data pada board[0][0];
