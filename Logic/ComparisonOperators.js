let a = 10;
let b = 20;

let nama1 = "Supriadi";
let nama2 = "Icha";

console.log(nama1 == nama2); // Memeriksa apakah nilai nama1 sama dengan nama2, menghasilkan false karena "Supriadi" tidak sama dengan "Icha".
console.log(a == b); // Memeriksa apakah nilai a sama dengan b, menghasilkan false karena 10 tidak sama dengan 20.
console.log(a != b); // Memeriksa apakah nilai a tidak sama dengan b, menghasilkan true karena 10 memang tidak sama dengan 20.
console.log(a > b); // Memeriksa apakah nilai a lebih besar dari b, menghasilkan false karena 10 tidak lebih besar dari 20.
console.log(a < b); // Memeriksa apakah nilai a lebih kecil dari b, menghasilkan true karena 10 memang lebih kecil dari 20.
console.log(a >= b); // Memeriksa apakah nilai a lebih besar atau sama dengan b, menghasilkan false karena 10 tidak lebih besar atau sama dengan 20.
console.log(a <= b); // Memeriksa apakah nilai a lebih kecil atau sama dengan b, menghasilkan true karena 10 memang lebih kecil atau sama dengan 20.

let angka1 = 5; // tipe data number
let angka2 = "5"; // tipe data string
let angka3 = 10; // tipe data number lain

// Menggunakan == (sama dengan dua)
console.log(angka1 == angka2); // true, karena nilai "5" (string) dikonversi menjadi 5 (number) sebelum perbandingan

// Menggunakan === (sama dengan tiga)
console.log(angka1 === angka2); // false, karena meskipun nilai sama, tipe data berbeda (number vs string)

// Menggunakan != (tidak sama dengan dua)
console.log(angka1 != angka2); // false, karena setelah konversi tipe, nilai "5" (string) sama dengan 5 (number)
console.log(angka1 != angka3); // true, karena 5 tidak sama dengan 10

// Menggunakan !== (tidak sama dengan tiga)
console.log(angka1 !== angka2); // true, karena meskipun nilai sama, tipe data berbeda (number vs string)
console.log(angka1 !== angka3); // true, karena 5 tidak sama dengan 10 dan tipe data keduanya adalah number
