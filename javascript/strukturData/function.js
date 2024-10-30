/**
 * Contoh penggunaan function sederhana
 */
// function contohFunction() {
//   console.log("contoh function sederhana");
// }

// contohFunction();

// // Mengenal Parameter dan argument

// /**
//  * Menampilkan pesan hallo dengan nama yang diberikan
//  *
//  * @param {string} name - Parameter, Nama yang ingin diucapkan
//  */
// function sayHallo(name) {
//   console.log(`Hallo ${name}`);
// }

// sayHallo("Adi"); // "Adi" adalah argument

// /**
//  * Menghitung luas persegi panjang dengan 2 parameter
//  *
//  * @param {number} panjang - Panjang persegi panjang
//  * @param {number} lebar - Lebar persegi panjang
//  * @return {number} Luas persegi panjang
//  */
// function menghitungLuasPersegiPanjang(panjang, lebar) {
//   return panjang * lebar;
// }

// console.log(menghitungLuasPersegiPanjang(10, 5));

// /**
//  * Menghitung luas persegi panjang dengan 1 parameter
//  *
//  * @param {Object} persegiPanjang - Object dengan property panjang dan lebar
//  * @return {number} Luas persegi panjang
//  */
// function menghitungLuasPersegiPanjang2({ panjang, lebar }) {
//   return panjang * lebar;
// }

// console.log(
//   menghitungLuasPersegiPanjang2({
//     panjang: 10,
//     lebar: 5,
//   })
// );

// Mengenal return di function

// function penjumlahan(nilai1, nilai2) {
//   if (typeof nilai1 !== "number" || typeof nilai2 !== "number") {
//     return "Input harus angka";
//   }
//   return nilai1 + nilai2;
// }

// const hasil = penjumlahan("10", "5");
// console.log(hasil);

// visibilitas scope function
/**
 * Jika kita deklarasikan variable di dalam block scope (function, loop, conditional, dll),
 * maka variable tersebut tidak dapat diakses di luar block scope tersebut.
 * Jika kita ingin mengakses variable tersebut di luar block scope, maka kita perlu
 * mengembalikan nilai variable tersebut dengan menggunakan return.
 */
/**
 * Variable merkSmartphone di atas memiliki block scope global
 * yang berarti dapat diakses di mana saja dalam kode.
 * Jika kita ingin mengakses variable yang sama di dalam function,
 * maka kita perlu mengembalikan nilai variable tersebut dengan menggunakan return.
 */
// let merkSmartphone = "Samsung";

// function tampilkanMerkSmartphone() {
//   let merkSmartphone = "Xiaomi";
//   console.log(merkSmartphone);
//   return merkSmartphone;
// }
// const hasil = tampilkanMerkSmartphone();
// console.log(hasil);
// console.log(merkSmartphone);

// // consoth blocing scope
// function tampilkanMerkSmartphone2() {
//   merkSmartphoneIndonesia = "advan";
//   console.log(merkSmartphone);
//   return merkSmartphone;
// }
// console.log(merkSmartphoneIndonesia);

// lexical scope
// function jobdesks(name, job) {
//   const desk = `${name} adalah seorang ${job}`;
//   console.log(desk);
//   function dateDesk() {
//     console.log("orang yang memiliki pekerjaan ", job, " wajib hadir");
//   }
//   dateDesk();
//   return desk;
// }

// jobdesks("Adi", "Programmer");

//Fuction expression
// const contohExpression = function () {
//   console.log("Ini adalah contoh expression");
// };

// contohExpression();

// const perkalian = function (angka1, angka2) {
//   console.log(
//     `Hasil perkalian ${angka1} * ${angka2} adalah ${angka1 * angka2}`
//   );
//   return angka1 * angka2;
// };

// perkalian();

// Function sebagai argument
// function fullname(firstName) {
//   firstName();
// }

// function firtName() {
//   console.log("Supriadi");
// }

// fullname(firtName);

// // function balik
// function balikKata(kata) {
//   return function () {
//     console.log(kata.split("").reverse().join(""));
//   };
// }
// const balik = balikKata("hello");
// balik();

// method function
/**
 * Method adalah function yang berada di dalam object.
 * Method biasanya digunakan untuk mengakses data di dalam object
 * dan mengubah nilai data tersebut.
 * Kita dapat mengakses method dengan menggunakan dot notation
 * Misalnya, kita memiliki object dengan nama "oprasiMatematika"
 * dan method "tambah", maka kita dapat mengakses method tersebut
 * dengan menggunakan dot notation seperti ini: oprasiMatematika.tambah();
 */
// const oprasiMatematika = {
//   tambah: function (angka1, angka2) {
//     return angka1 + angka2;
//   },
//   kurang: function (angka1, angka2) {
//     return angka1 - angka2;
//   },
//   kali: function (angka1, angka2) {
//     return angka1 * angka2;
//   },
//   bagi: function (angka1, angka2) {
//     return angka1 / angka2;
//   },
// };
// console.log(oprasiMatematika);
// console.log(oprasiMatematika.kurang(10, 5));

// this dalam function
// const product = {
//   name: "sepatu",
//   price: 200000,
//   category: "fashion",
//   detailProduct: function () {
//     console.log(
//       "ini adalah detail product ",
//       this.name,
//       " dengan harga",
//       this.price
//     );
//   },
// };

// product.detailProduct();

// Penggunaan try and catch dalam function
function cobaTryCatch(angka) {
  try {
    if (angka === 0) {
      throw "Angka tidak boleh nol";
    }
    console.log(100 / angka);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Terimakasih sudah mencoba program");
  }
}

cobaTryCatch(3);
// cobaTryCatch(2);
