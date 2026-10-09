// ==========================================
// LANGKAH 1: Tebak Dulu, Baru Cek
// ==========================================

// Tebakan: 13
// Hasil asli: 13 ✔
console.log(7 + 3 * 2);

// Tebakan: 20
// Hasil asli: 20 ✔
console.log((7 + 3) * 2);

// Tebakan: 2
// Hasil asli: 2 ✔
console.log(17 % 5);

// Tebakan: 8
// Hasil asli: 8 ✔
console.log(2 ** 3);

// Tebakan: true
// Hasil asli: true ✔
console.log(5 == "5");

// Tebakan: false
// Hasil asli: false ✔
console.log(5 === "5");

// Tebakan: false
// Hasil asli: false ✔
console.log(true && false);

// Tebakan: true
// Hasil asli: true ✔
console.log(true || false);

// Tebakan: false
// Hasil asli: false ✔
console.log(!true);

// Tebakan: false
// Hasil asli: false ✔
console.log(10 > 5 && 3 > 8);

/*
PERTANYAAN LANGKAH 1:
1. Untuk tebakan yang meleset: Semua tebakan di atas sudah benar. Bagian yang paling menguji ketelitian adalah perbedaan `==` dan `===` karena JavaScript melakukan konversi tipe data otomatis (type coercion) pada operator perbandingan longgar.
2. Kenapa `7 + 3 * 2` hasilnya `13`, bukan `20`?
   - Karena perkalian (`*`) memiliki prioritas yang lebih tinggi daripada penjumlahan (`+`), sehingga operasi `3 * 2` dikerjakan terlebih dahulu menjadi `6`, lalu baru ditambahkan `7` menjadi `13`.
3. Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false`?
   - Operator `==` melakukan konversi tipe data otomatis sebelum membandingkan nilainya, sedangkan `===` (strict equality) memeriksa nilai dan tipe data secara bersamaan tanpa konversi, sehingga number dan string dianggap berbeda.
*/


// ==========================================
// LANGKAH 2: Perbaiki 4 Kesalahan
// ==========================================

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
// FIX 1: Ubah uangDiterima dari string ke number agar konsisten tipe datanya
let uangDiterima = 51000;

// FIX 2: Perbaiki perhitungan total pesanan untuk 2 kopi dan 2 teh menggunakan tanda kurung
let totalPesanan = (hargaKopi * 2) + (hargaTeh * 2);

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = uangDiterima === totalPesanan;

// FIX 3: Simpan hasil penambahan ke variabel jumlahMember menggunakan operator penugasan `+=`
jumlahMember += 1;

// FIX 4: Ubah operator logika dari `&&` (DAN) menjadi `||` (ATAU) sesuai syarat diskon
let dapatDiskon = sudahMember || totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon); 
// Output: 51000 true 6 true

/*
PERTANYAAN LANGKAH 2:
1. Empat kesalahan dan perbaikannya:
   - `uangDiterima` awalnya berupa string (`"51000"`), diperbaiki menjadi tipe number.
   - `totalPesanan` kurang dalam perkalian jumlah pesanan, diperbaiki dengan mengalikan masing-masing item dengan 2.
   - `jumlahMember + 1` tidak menugaskan kembali nilainya, diperbaiki dengan menggunakan operator penugasan `+=`.
   - `dapatDiskon` menggunakan operator `&&`, diperbaiki menjadi `||` (ATAU).
2. Jika mengganti `==` menjadi `===` pada `uangPas`, hasilnya `false` jika `uangDiterima` berupa string, karena `===` mendeteksi perbedaan tipe data (string vs number). Supaya hasilnya `true`, `uangDiterima` harus bernilai number.
3. Apa beda `&&` dan `||`?
   - `&&` (AND) menghasilkan `true` hanya jika **semua** kondisi bernilai benar.
   - `||` (OR) menghasilkan `true` jika **salah satu atau kedua** kondisi bernilai benar. Contoh pada `dapatDiskon`, karena `sudahMember` bernilai `true`, penggunaan `||` membuat seluruh ekspresi langsung bernilai `true`.
*/


// ==========================================
// LANGKAH 3: Bikin Kasir Sendiri
// ==========================================

const NAMA_BARANG = "Roti Bakar Keju";
const HARGA_SATUAN = 15000;
const TARIF_PAJAK = 0.11;

let jumlahBeli = 3;
let uangDibayar = 65000;

// Menghitung subtotal dengan tanda kurung untuk kejelasan
let subtotal = HARGA_SATUAN * jumlahBeli;

// Operator penugasan ringkas 1: menambahkan biaya layanan tetap sebesar 2000
let totalBayar = subtotal;
totalBayar += 2000;

// Menghitung pajak berdasarkan subtotal
let pajak = subtotal * TARIF_PAJAK;

// Operator penugasan ringkas 2: menambahkan pajak ke total bayar
totalBayar += pajak;

// Menghitung kembalian
let kembalian = uangDibayar - totalBayar;

// Mengecek apakah jumlah beli genap menggunakan operator modulus
let jumlahGenap = jumlahBeli % 2 === 0;

// 3 Variabel Boolean dari perbandingan & logika
let uangCukup = uangDibayar >= totalBayar;
let gratisKantong = (subtotal >= 40000) || (jumlahBeli >= 3);
let perluKembalian = uangDibayar > totalBayar;

// // Menampilkan output yang rapi
// console.log("=== STRUK PEMBAYARAN WARUNG ===");
// console.log("Barang        : " + NAMA_BARANG);
// console.log("Jumlah        : " + jumlahBeli);
// console.log("Subtotal      : " + subtotal);
// console.log("Pajak (11%)   : " + pajak);
// console.log("Total bayar   : " + totalBayar);
// console.log("Uang dibayar  : " + uangDibayar);
// console.log("Kembalian     : " + kembalian);
// console.log("Uang cukup?   : " + uangCukup);
// console.log("Jumlah genap? : " + jumlahGenap);
// console.log("Bonus kantong?: " + gratisKantong);

/*
PERTANYAAN LANGKAH 3:
1. Variabel Boolean `uangCukup`:
   - Artinya: Memastikan apakah uang yang dibayarkan oleh pembeli lebih besar dari atau sama dengan total tagihan pembayaran.
   - Hasilnya saat ini adalah `true` karena jumlah uang yang dibayarkan mencukupi total tagihan.
2. Mengganti `&&` menjadi `||` pada `gratisKantong`:
   - Jika sebelumnya menggunakan `&&` (kedua syarat harus benar), mengubahnya menjadi `||` membuat syarat menjadi lebih longgar (cukup salah satu terpenuhi). Sebelum dan sesudah bisa bernilai sama jika kedua kondisi bernilai benar, tetapi akan berbeda jika salah satu kondisi tidak terpenuhi.
3. Contoh penggunaan tanda kurung `()` yang mengubah hasil perhitungan:
   - Contoh: `HARGA_SATUAN * (jumlahBeli + 1)` akan menghasilkan perhitungan yang berbeda dibandingkan `HARGA_SATUAN * jumlahBeli + 1`, karena tanda kurung mendahulukan operasi penjumlahan jumlah barang sebelum dikalikan harga satuan.
*/