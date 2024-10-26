console.log("menajalankan program");

if (1 + 1 == 2) {
  console.log("benar");
} else {
  console.log("salah");
}

console.log("Lanjut program selanjutnya ...");

let angka = Math.random();
console.log(angka);

if (angka >= 0.5) {
  console.log("angka lebih besar dari 0.5");
} else {
  console.log("angka kurang dari 0.5");
}

// if bersarang

const password = prompt("buat password");

if (password.length < 8) {
  console.log("password terlalu pendek");
} else if (password.length > 12) {
  console.log("password terlalu panjang");
} else {
  if (password.indexOf(" ") === -1) {
    console.log("password benar");
  } else {
    console.log("password tidak boleh mengandung spasi");
  }
}
