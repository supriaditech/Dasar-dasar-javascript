const hari = prompt(
  "Masukkan nama hari (senin/selasa/rabu/kamis/jumat/sabtu/minggu): "
);

switch (hari) {
  case "senin":
    console.log("Hari ini adalah hari Senin");
    break;
  case "selasa":
    console.log("Hari ini adalah hari Selasa");
    break;
  case "rabu":
    console.log("Hari ini adalah hari Rabu");
    break;
  case "kamis":
    console.log("Hari ini adalah hari Kamis");
    break;
  case "jumat":
    console.log("Hari ini adalah hari Jumat");
    break;
  case "sabtu":
    console.log("Hari ini adalah hari Sabtu");
    break;
  case "minggu":
    console.log("Hari ini adalah hari Minggu");
    break;
  default:
    console.log("Hari tidak dikenal");
    break;
}
