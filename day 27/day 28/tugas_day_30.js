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
        break;
        default:
            potongMemberL2 = 0;
}

// Fix 3: Mengganti operator penugasan (=) menjadi operator perbandingan (===) pada pengecekan voucher
if (kodeVoucherL2 === "") {
    console.log("Voucher tidak dipakai");
} else {
    console.log("Voucher dipakai: " + kodeVoucherL2);
}

let totalAkhirL2 = totalBelanjaL2 - diskonL2 - potonganMemberL2;

let uangBayarL2 = 67000;

// Fix 4: Memperbaiki logika perbandingan pembayaran. Jika, uang bayar pas/sama dengan total akhir, atau lebih besar, statusnya lunas (menggunakan >=)
if (uangBayarL2 >= totalAkhirL2) {
    console.log("Status: Lunas");
} else {
    console.log("Status: Kurang");
}

// Fix 5: Menyesuaikan variabel yang dicetak agar merujuk ke variabel L2 yang benar
console.log(diskonL2, potongMemberL2, totalAkhirL2);

/*
Jawaban Pertanyaan Langkah 2:
1.Ringkasan 5 kesalahan:
 -Salah ururtan kondisi if-else diskon (diperbaiki dengan menyusun dari yang terbesar)
 -Salah penulisan nama variabel 'jenismember' (Kurang huruf besar M) dan kurang 'break'
 -Salah operator pada 'kodeVoucher' = ""' yang tadi assingment (=) diubah jadi perbandingan (===)
 - Salah logika perbandingan `uangBayar > totalAkhir` yang membuat uang pas terbaca kurang (diubah jadi >=).
 - Salah memanggil variabel cetak console log di baris akhir.
2. Kesalahan yang menyebabkan error di console adalah kesalahan penulisan variabel (`jenismember` yang tidak dideklarasikan). Kesalahan lainnya tidak error secara sintaksis, tetapi logikanya salah sehingga hasilnya tidak sesuai.
3. Bedanya `=`, `==`, dan `===`:
  - `=` adalah operator penugasan (assignment) untuk mengisi nilai ke variabel.
  - `==` adalah operator perbandingan nilai (dengan konversi tipe data otomatis).
  - `===` adalah operator perbandingan ketat (memeriksa nilai dan tipe data sekaligus).
*/

// Bikin Kasir Sendiri

// Data Skenario
let kasirNamaPelanggan = "Joko";
let kasirTotalBelanja = 90000;
let kasirHari = "sabtu";
let kasirJenisMember = "silver";
let kasirKodeVoucher = "SENJA10";
let kasirUangBayar = 100000;

// 1 & 2. Diskon Berdasarkan Total Belanja
let kasirDiskon;
if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.1;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// Potongan Member
let kasirPotonganMember;
switch (kasirJenisMember) {
  case "gold":
    kasirPotonganMember = 5000;
    break;
  case "silver":
    kasirPotonganMember = 2000;
    break;
  default:
    kasirPotonganMember = 0;
}

// Promo Hari (menggabungkan case sabtu dan minggu tanpa break)
let kasirPromoHari;
switch (kasirHari) {
  case "jumat":
    kasirPromoHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    kasirPromoHari = 5000;
    break;
  default:
    kasirPromoHari = 0;
}

// Validasi Nama (truthy/falsy)
let statusNama = kasirNamaPelanggan ? `Pelanggan: ${kasirNamaPelanggan}` : "Nama pelanggan belum diisi";

// 6. Voucher (Truthy/Falsy)
let kasirPotonganVoucher = kasirKodeVoucher ? 2000 : 0;
let statusVoucher = kasirKodeVoucher ? `Voucher dipakai: ${kasirKodeVoucher}` : "Voucher tidak dipakai";

// 7. Total akhir
let kasirTotalAkhir = kasirTotalBelanja - kasirDiskon - kasirPotonganMember - kasirPromoHari - kasirPotonganVoucher;

// 8. Status pembayaran
let selisihBayar = kasirUangBayar - kasirTotalAkhir;
let statusPembayaran;
if (kasirUangBayar > kasirTotalAkhir) {
  statusPembayaran = `Lunas (Kembalian: Rp ${selisihBayar})`;
} else if (kasirUangBayar === kasirTotalAkhir) {
  statusPembayaran = "Lunas (uang pas)";
} else {
  statusPembayaran = `Kurang (Kekurangan: Rp ${Math.abs(selisihBayar)})`;
}

// Cetak Hasil dengan Template Literal
console.log(`=== STRUK PEMBAYARAN WARUNG ===`);
console.log(statusNama);
console.log(`Total Belanja: Rp ${kasirTotalBelanja}`);
console.log(`Diskon Belanja: Rp ${kasirDiskon}`);
console.log(`Potongan Member: Rp ${kasirPotonganMember}`);
console.log(`Promo Hari (${kasirHari}): Rp ${kasirPromoHari}`);
console.log(statusVoucher);
console.log(`Total Akhir: Rp ${kasirTotalAkhir}`);
console.log(`Uang Bayar: Rp ${kasirUangBayar}`);
console.log(`Status Pembayaran: ${statusPembayaran}`);

/*
   UJI 3 SKENARIO DI KOMENTAR:

   // Skenario 1: nama "Rina", belanja 90000, hari "sabtu", member "silver", voucher "SENJA10", bayar 100000
   // Hasil:
   Pelanggan: Rina
   Total Belanja: Rp 90000
   Diskon Belanja: Rp 9000
   Potongan Member: Rp 2000
   Promo Hari (sabtu): Rp 5000
   Voucher dipakai: SENJA10
   Total Akhir: Rp 72000
   Uang Bayar: Rp 100000
   Status Pembayaran: Lunas (Kembalian: Rp 28000)

   // Skenario 2: nama "", belanja 120000, hari "jumat", member "gold", voucher "", bayar 90000
   // Hasil:
   Nama pelanggan belum diisi
   Total Belanja: Rp 120000
   Diskon Belanja: Rp 18000
   Potongan Member: Rp 5000
   Promo Hari (jumat): Rp 3000
   Voucher tidak dipakai
   Total Akhir: Rp 94000
   Uang Bayar: Rp 90000
   Status Pembayaran: Kurang (Kekurangan: Rp 4000)

   // Skenario 3: nama "Budi", belanja 20000, hari "rabu", member "umum", voucher "HEMAT", bayar 15000
   // Hasil:
   Pelanggan: Budi
   Total Belanja: Rp 20000
   Diskon Belanja: Rp 0
   Potongan Member: Rp 0
   Promo Hari (rabu): Rp 0
   Voucher dipakai: HEMAT
   Total Akhir: Rp 18000
   Uang Bayar: Rp 18000
   Status Pembayaran: Lunas (uang pas)
*/


/*
   JAWABAN PERTANYAAN LANGKAH 3:
   1. Kenapa urutan else if dimulai dari angka terbesar? Karena JavaScript mengevaluasi percabangan dari atas ke bawah. Jika dimulai dari angka kecil (misal >= 25000), belanja 120000 akan langsung masuk ke kondisi pertama dan menghentikan pengecekan, sehingga diskon tertingginya tidak tercapai.
   2. Kenapa promo hari lebih cocok memakai switch? Karena switch lebih bersih dan mudah dibaca ketika kita mencocokkan satu variabel dengan banyak nilai pasti (seperti nama-nama hari).
   3. Di mana sengaja tidak menulis break? Pada case "sabtu" dalam promo hari, karena ingin agar case "sabtu" langsung meneruskan kode ke blok "minggu" dengan hasil potongan promo yang sama tanpa harus menulis kode dua kali (fall-through).
   4. Sebutkan 3 nilai yang membuat `if (namaPelanggan)` bernilai false: String kosong `""`, angka `0`, dan nilai `null` (atau `undefined`).
   5. Jika jumlah beli bernilai `-1`, apa hasil `if (jumlahBeli)` dan `if (jumlahBeli > 0)`? 
      - `if (jumlahBeli)` bernilai `true` karena angka `-1` termasuk nilai Truthy (angka selain 0).
      - `if (jumlahBeli > 0)` bernilai `false` karena hasil perbandingan `-1 > 0` adalah salah.
*/








