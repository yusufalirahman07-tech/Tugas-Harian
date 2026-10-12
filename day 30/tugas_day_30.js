// Kasir Warung dengan percabangan
// Tebak dulu, baru cek

/* Tebakan Potongan A:
if (0) -> Tebakan: Tidak masuk (falsey)| Hasil asli: tidak tercetak apa-apa
if ("0") -> Tebakan: Masuk (string berisi karakter dianggap truthy) | Hasil asli: 2 (masuk)
if ("")  -> Tebakan: Tidak masuk (string kosong adalah falsey) | Hasil asli: Tidak tercetak apa-apa
if ([]) -> Tebakan: Masuk (array kosong dalam js adalah objek/truthy) | Hasil asli: 4 (masuk)
if (null) -> Tebakan: Tidak masuk (null adalah falsy) | Hasil asli: Tidak tercetak apa-apa
if (-1) -> Tebakan: Masuk (angka selain 0 adalah truthy) | Hasil asli: 6 (masuk)
*/

// Kode Potongan A:
if (0){ console.log("1: masuk"); }
if ("0") { console.log("2: masuk");}
if ("") {console.log("3: masuk"); }
if ([]) {console.log("4: masuk"); }
if (null) {console.log("5: masuk");}
if (-1) {console.log("6: masuk");}

/* Tebakan Potongan B:
-Tebakan: Tercetak "Diskon 5%"
-Hasil Asli: "Diskon 5%"
*/

// Kode Potongan B:
let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

/*Tebakan Potongan C:
-Tebakan: Tercetak "Promo Akhir Pekan" dan "Promo Keluarga" secara bersamaan
-Hasil Asli: Tercetak dua baris ("Promo Akhir Pekan" dan "Promo Keluarga") karena tidak ada 'break' di case 'sabtu'
*/

// Kode Potongan C:
let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

/*
Jawaban Pertanyaan di Langkah 1:
1.Pada Potongan A, kenapa `"0"` dan `[]` tetap masuk ke dalam `if`, padahal terlihat seperti kosong?
Jawab: Karena, dalam JavaScript, string yang ada isinya (walaupun isinya karakter "0") dam array (tipe data object) dikategorikan sebagai nilai truthy

2.Pada Potongan B, `belanja` bernilai 120000 tetapi hasilnya bukan "Diskon 15%". Kenapa? Bagaimana cara memperbaikinya?
Jawab: Karena, pengecekan kondisi dari atas ke bawah. Angka 1200000 sudah memenuhi syarat pertama (>= 25000), sehingga blok kode langsung dieksekusi dan di-skip ke bawah. Cara memperbaikinya adalah menyusun kondisi dari nilaiterbesar ke terkecil (>= 100000)

3.Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar hanya satu baris yang tercetak?
Jawab: Karena, setelah case "sabtu" cocok, kode terus mengesekusi ke bawah hingga menemukan 'break' di akhir case 'minggu' .Yang harus ditambahkan adalah perintah 'break;' di dalam case "sabtu"
*/

// Perbaiki 5 kesalahan
let totalBelanjaL2 = 8000;
let jenisMemberL2 = "gold";
let kodeVoucherL2 = "";
let diskonL2;
let potongMemberL2;

// Fix: Urutan kondisi if-else if dibalik dari nilai terbesar ke terkecil agar diskon sesuai aturan
if (totalBelanja2 >= 100000) {
    diskonL2 = totalBelanjaL2 * 0.15;
} else if (totalBelanjaL2 >= 50000) {
   diskonL2 = totalBelanjaL2 * 0.1;
} else if (totalBelanjaL2 >= 25000) {
    diskonL2 = totalBelanjaL2 * 0.05;
} else {
    diskonL2 = 0;
}

// Fix 2: Menulis variabel dengan huruf kapital yang benar (jenismember -> jenisMember) dan menambahka break di case "gold"
switch (jenisMemberL2) {
    case "gold":
        potongMemberL2 = 5000;
        break; // Ditambahkan break
    case "silver":
        potongMemberL2 = 2000;
        
}




