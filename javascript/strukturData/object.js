// Contoh penggunaan object
const person = {
  // Property pertama
  firstName: "John",
  // Property kedua
  lastName: "Doe",
  // Property ketiga
  age: 50,
  // Property keempat
  eyeColor: "blue",
};

// Menampilkan isi object
console.log(person);

// Mengakses property pertama dengan menggunakan dot notation
console.log(person.firstName);

// Mengakses property kedua dengan menggunakan bracket notation
console.log(person["lastName"]);

const barang = {
  namaBarang: "Tas",
  hargaBarang: 100000,
  jumlahBarang: 10,
  warnaBarang: ["Merah", "Hijau", "Kuning"],
  detailBarang: {
    merek: "Adidas",
    ukuran: "L",
  },
};

// Mengakses object barang dengan menggunakan dot notation
console.log(barang.namaBarang);
console.log(barang.detailBarang.merek);
console.log(barang.detailBarang);

// Mengakses object barang dengan menggunakan bracket notation
console.log(barang["namaBarang"]);
console.log(barang["detailBarang"]["merek"]);

// Mengupdate property merek di dalam object detailBarang
barang.detailBarang.merek = "Vans";

console.log(barang.detailBarang.merek);

// Menambahkan warna baru ke dalam array warnaBarang
barang.warnaBarang.push("Biru");

console.log(barang.warnaBarang);

// Menambahkan property tanggalProduction yang baru ke object barang
barang.tanggalProduction = "2020-01-01";
console.log(barang);

// Array yang menampung beberpa object
const products = [
  {
    id: 1,
    name: "Tas",
    price: 100000,
    quantity: 10,
    colors: ["Merah", "Hijau", "Kuning"],
    details: {
      brand: "Adidas",
      size: "L",
    },
  },
  {
    id: 2,
    name: "Sepatu",
    price: 200000,
    quantity: 5,
    colors: ["Putih", "Hitam", "Coklat"],
    details: {
      brand: "Vans",
      size: "M",
    },
  },
];

// Contoh pemanggilan property dan method dari object
console.log(products[0].name);
console.log(products[1].details.brand);
console.log(products[0].colors[1]);
console.log(products[1].quantity);
