const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// contoh foreach function
// function cetakAngka(angka) {
//   console.log(angka);
// }

// angka.forEach(cetakAngka);

// angka.forEach(function (angka) {
//   try {
//     if (angka % 2 === 0) {
//       console.log(angka);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

const daftarProducts = [
  { name: "Apel", price: 10000 },
  { name: "Jeruk", price: 20000 },
  { name: "Semangka", price: 30000 },
  { name: "Mangga", price: 40000 },
  { name: "Pepaya", price: 50000 },
  { name: "Pisang", price: 60000 },
  { name: "Melon", price: 70000 },
  { name: "Nanas", price: 80000 },
];

daftarProducts.forEach(function (product) {
  console.log(product.name);
});
