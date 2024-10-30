// Pengguanan For
// - for digunakan untuk melakukan perulangan dengan jumlah yang spesifik
// - for terdiri dari 3 bagian, yaitu:
//   1. inisialisasi (let i = 0)
//   2. kondisi (i < 5)
//   3. perubahan nilai (i++)
// for (let i = 0; i < 100; i++) {
//   console.log("Ini adlaah contoh penggunan for untuk looping");
//   console.log(i);
// }

// contoh lain penggunaan for
// for (let i = 0; i < 100; i += 3) {
//   console.log("Ini adlaah contoh penggunan for untuk looping");
//   console.log(i);
// }

// contoh lain menggunan for
// for (let i = 20; i >= 0; i--) {
//   console.log("Ini adlaah contoh penggunan for untuk looping");
//   console.log(i);
// }

// infiniti loop
// for (let i = 0; i >=0; i++) {
//   console.log("Ini adlaah contoh penggunan for untuk looping");
//   console.log(i);
// }

// perulangan menggunakan array
const warna = ["Merah", "Hijau", "Kuning"];

// for (let i = 0; i < warna.length; i++) {
//   console.log(i, warna[i]);
// }

// for (let i = warna.length - 1; i >= 0; i--) {
//   console.log(i, warna[i]);
// }

// contoh penggunaan nested loop
// for (let i = 0; i < 3; i++) {
//   console.log(i + 1, "Ini adalah nomor", i + 1);
//   for (let j = 0; j < warna.length; j++) {
//     console.log(j + 1, warna[j]);
//   }
// }

// contoh lain penggunaan nested loop yang lebih sederhana
// for (let i = 1; i <= 3; i++) {
//   console.log(`Ini adalah looping ke-${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`  Looping ke-${j}`);
//   }
// }

// contoh penggunaan nested loop dengan array
// const dataPeserta = [
//   ["Ahmad", "Budi", "Caca"],
//   ["Dedi", "Eka", "Feri"],
//   ["Gita", "Hana", "Ika"],
// ];

// for (let i = 0; i < dataPeserta.length; i++) {
//   const dataPesertaPerBaris = dataPeserta[i];
//   console.log("Ini adalah data peserta baris ke", i + 1);
//   for (let j = 0; j < dataPesertaPerBaris.length; j++) {
//     console.log("Data peserta no", j + 1, ".", dataPesertaPerBaris[j]);
//   }
// }

// Looping mengguanakan while
// let number = 0;
// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// const password = "12345adibeast";

// let formInputPassword = prompt("Masukkan password: ");

// while (formInputPassword !== password) {
//   alert("Password salah");
//   formInputPassword = prompt("Masukkan password: ");
// }

// Penggunaan break pada looping

// const kataRahasia = "kata rahasia";

// while (true) {
//   let input = prompt("Masukkan kata kunci yang benar :");
//   if (input === kataRahasia) {
//     break;
//   }
// }

// alert("Selamat kamu telah menemukan kuncinya");

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// Game Tebak Angka dengan Looping

// let AngkaMax = parseInt(prompt("Masukkan angka maksimal"));

// while (AngkaMax < 1) {
//   AngkaMax = parseInt(prompt("Masukkan angka maksimal"));
// }

// let angka = Math.floor(Math.random() * AngkaMax);
// console.log(`Angka yang harus di tebak adalah ${angka}`);
// while (true) {
//   let input = parseInt(prompt("Tebak angka "));
//   if (input === angka) {
//     alert("Selamat, kamu benar!");
//     break;
//   } else if (input > angka) {
//     alert("Angka yang kamu tebak terlalu tinggi. Silakan coba lagi!");
//   } else if (input < angka) {
//     alert("Angka yang kamu tebak terlalu rendah. Silakan coba lagi!");
//   }
// }

// looping dengan menggunakan for of
// const names = ["Ahmad", "Budi", "Caca", "Dedi"];

// for (const name of names) {
//   console.log(name);
// }

// // looping array bersaranag menggunakan for of
// const etalaseProduct = [
//   ["Apel", "Jeruk", "Semangka"],
//   ["Mangga", "Pepaya", "Pisang"],
//   ["Melon", "Semangka", "Nanas"],
// ];

// for (let products of etalaseProduct) {
//   for (let product of products) {
//     console.log(product);
//   }
// }

// looping object menggunakan for in

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

for (const key in person) {
  console.log(key, ":", person[key]);
}
