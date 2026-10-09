// Langkah 1: Perbaiki Kode Awal
// Fix: Menggunakan const untuk konstantan global dengan UPPER_SNAKE_CASE

const TARIF_PAJAK = 0.11;
const  namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = "2020";
let statusBuka = true;

// Fix: Menghapus deklarasi ganda variabel website dan memperbaiki var menjadi let
let website = null;
var jumlahProduk = 3;
let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// Fix: Mengubah 'namausaha' menjadi 'namaUsaha'
console.log(namaUsaha);

// Fix: Mengubah 'Console' menjadi 'console'
console.log("Kota:" + kotaUsaha);

// Fix: Mengubah string tahunBerdiri menjadi number agar operasi penjumlahan aritmatika berfungsi benar
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

// fix: Mengubah baris reassignment TARIF_PAJAK karena const tidak boleh diubah nilainya
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK) // Fix: Mengganti 'x' dengan '*'
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-4: " + produk[3]);

// /*
// Catatan Bug
// No | Baris/bagian | Jenis | Penyebab | Perbaikan
// ---|---|---|---|---
// 1  | console.log(namausaha) | Error | JavaScript bersifat case-sensitive, variabel bernama 'namausaha' belum dideklarasikan. | Ubah menjadi 'namaUsaha'.
// 2  | Console.log(...) | Error | Objek bawaan console ditulis dengan huruf kapital 'C', padahal harus huruf kecil 'c'. | Ubah menjadi 'console.log'.
// 3  | let website; let website = null; | Error | Variabel dengan 'let' tidak boleh dideklarasikan ulang dalam scope yang sama. | Hapus salah satu deklarasi duplikat.
// 4  | TARIF_PAJAK = 0.12; | Error | Konstanta yang dideklarasikan dengan 'const' bersifat immutable (tidak bisa diubah nilainya). | Hapus baris perubahan nilai atau ubah ke 'let' jika memang perlu diubah.
// 5  | hargaProduk[0] x ... | Error | Simbol 'x' bukan operator perkalian yang valid di JavaScript. | Ubah operator 'x' menjadi '*'.
// 6  | /* Cetak status usaha | Tidak error tapi salah (Syntax Error/Lolos) | Komentar multiline tidak ditutup dengan '*/', membuat kode di bawahnya ikut terblokir jika ada. | Tambahkan penutup '*/'.
// 7  | tahunBerdiri + 1 ("2020" + 1) | Tidak error tapi salah | Operator '+' dengan string melakukan penggabungan string (concatenation), bukan penjumlahan matematika. | Ubah tipe data string menjadi number menggunakan Number(tahunBerdiri).
// 8  | produk[3] | Tidak error tapi salah | Mengakses indeks array yang melebihi batas elemen yang ada mengembalikan nilai tak terdefinisi. | Pastikan indeks valid atau tambahkan elemen baru.

// JAWABAN PERTANYAAN LANGKAH 1:
// 1. JavaScript bersifat case-sensitive (membedakan huruf besar dan kecil), sehingga 'namausaha' dan 'namaUsaha' dianggap sebagai dua identifier yang sepenuhnya berbeda di dalam memori.
// 2. 'TARIF_PAJAK' dideklarasikan menggunakan 'const' yang artinya nilainya konstan dan tetap selama eksekusi, sedangkan 'statusBuka' dideklarasikan dengan 'let' yang memang dirancang untuk nilai yang bisa diubah (reassigned).
// 3. Karena "2020" adalah tipe data string, operator '+' memicu perilaku string concatenation (penggabungan teks), bukan operasi matematika. Perbaikannya adalah mengonversi string tersebut menjadi number terlebih dahulu menggunakan fungsi Number().
// */

// Langkah 2: Benahi Struktur Data
// 1. Membuat object usaha
const usaha = {
namaUsaha: "Kopi Senja",
pemilik: "Mas Bagas",
kota: "Yogyakarta",
tahunBerdiri: 2020, // Tipe number agar mudah dihitung usianya
statusBerdiri: true,
nomorWhatsApps: "08128576706",
website: null
};

// 2. Membuat array berisi minimal 4 object produk (menambahkan "Pisang Goreng")
const daftarProduk = [
    { nama: "Kopi Susu", harga: 18000},
    {nama: "Es Teh Manis", harga: 7500},
    {nama: "Roti Bakar", harga: 15000},
    {nama: "Pisang Goreng", harga: 10000}
];

// 3. Cetak ke console menggunakan notasi titik, kurung siku, dan indeks
console.log("Nama Usaha (notasi titik): " + usaha.namaUsaha);
console.log("Kota (notasi kurung siku): " + usaha["kota"]);
console.log("Produk Pertama: " + daftarProduk[0].nama);
console.log("Produk terakhir: " + daftarProduk[daftarProduk.length - 1].nama);

// */
// Jawaban Pertanyaan Langkah 2:
// 1. Nomor WhatsApp diawali dengan angka '0' (misal "081..."). Jika disimpan sebagai number, angka '0' di depan akan otomatis dihilangkan oleh sistem karena dalam matematika angka 0 di depan tidak bernilai, padahal format nomor telepon harus mempertahankan angka tersebut.
// 2. 'null' secara sengaja merepresentasikan "nilai kosong" atau "belum ada", sedangkan 'undefined' berarti sebuah variabel telah dideklarasikan tetapi belum pernah diinisialisasi dengan nilai apa pun. Menggunakan 'null' menunjukkan bahwa properti 'website' memang disengaja ada namun belum memiliki isi.
// 3. 'daftarProduk[4]' bernilai 'undefined' karena array berbasis indeks 0, sehingga untuk 4 elemen indeks yang valid adalah 0 sampai 3. Mengakses indeks 4 sama dengan mencari elemen di luar kapasitas saat ini.
// // 

// Langkah 3: Perhitungan dan Tampilan
const TAHUN_SEKARANG = 2026;
const usiaUsaha = TAHUN_SEKARANG - usaha.tahunBerdiri;

// Menghitung harga termurah dan termahal dari array object
const hargaList = daftarProduk.map(produkItem => produkItem.harga * (1 + TARIF_PAJAK))
const hargaTermurahFinal = Math.min(...hargaList);
const hargaTermahalFinal = Math.min(...hargaList);

// Menampilkan kartu usaha rapi menggunakan template literal
console.log(`
===== KARTU USAHA =====
Nama Usaha  : ${usaha.namaUsaha}
Pemilik     : ${usaha.pemilik}
Kota        : ${usaha.kota}
Usia Usaha  : ${usiaUsaha} tahun
Status      : ${usaha.statusBuka ? "Buka" : "Tutup"}
Website     : ${usaha.website === null ? "belum ada" : usaha.website}

Daftar Produk (harga + PPN 11%):
1. ${daftarProduk[0].nama.padEnd(14, ' ')} : Rp ${daftarProduk[0].harga * (1 + TARIF_PAJAK)}
2. ${daftarProduk[1].nama.padEnd(14, ' ')} : Rp ${daftarProduk[1].harga * (1 + TARIF_PAJAK)}
3. ${daftarProduk[2].nama.padEnd(14, ' ')} : Rp ${daftarProduk[2].harga * (1 + TARIF_PAJAK)}
4. ${daftarProduk[3].nama.padEnd(14, ' ')} : Rp ${daftarProduk[3].harga * (1 + TARIF_PAJAK)}

Termurah : Rp ${hargaTermurahFinal}
Termahal : Rp ${hargaTermahalFinal}
=======================
`);


/*
JAWABAN PERTANYAAN LANGKAH 3:
1. Sebagian besar variabel di langkah ini menggunakan 'const' karena nilainya tidak perlu diubah lagi setelah inisialisasi (seperti TAHUN_SEKARANG, usiaUsaha, dan daftar harga final). Ini menjaga keamanan data dari perubahan yang tidak disengaja.
2. Perhitungan manual produk pertama (Kopi Susu Rp 18.000): 
   PPN = 18.000 * 0.11 = 1.980. Total = 18.000 + 1.980 = 19.800. Hasil program mencetak nilai yang sama persis.
3. Tidak, hasil perhitungan yang sudah tercetak di console tidak akan berubah otomatis karena nilai tersebut sudah dievaluasi menjadi string/angka statis saat perintah console.log dijalankan. JavaScript tidak memiliki reactive binding otomatis tanpa framework tambahan.
*/

// Langkah 4: Detektif Tipe Data
// Tebakan: "number"
console.log(typeof "42"); // Hasil asli: "number"

// Tebakan: "string"
console.log(typeof "42"); // Hasil asli: "string"

// Tebakan: "boolean"
console.log(typeof true); // Hasil asli: "boolean"

// Tebakan: "undefined"
console.log(typeof undefined); // Hasil asli: "undefined"

// Tebakan: "object"
console.log(typeof null); // Hasil asli: "object"

// Tebakan: "object"
console.log(typeof  [1, 2, 3]); // Hasil asli: "object"

// Tebakan: "53" (string gabungan)
console.log("5" + 3); // Hasil asli: "53"

// Tebakan: "15" (number hasil koersi tipe data)
console.log("5" + 3); // Hasil asli: 15

// Tebakan: NaN (Not a Number)
console.log("abc" * 2); // Hasil asli: NaN

// Tebakan: Infinity
console.log(10 / 0); // Hasil asli: Infinity

// Tebakan: "object"
console.log(typeof usaha.website); // Hasil asli: 'object' (karena nalia null bertipe object di js)

/*
JAWABAN PERTANYAAN LANGKAH 4:
1. Seluruh tebakan berhasil diprediksi dengan benar karena memahami aturan tipe data primitif dan perilaku type coercion (konversi tipe otomatis) di JavaScript.
2. Secara teknis, `null` BUKANlah sebuah object. Ini adalah bug historis di implementasi awal mesin JavaScript (V8/SpiderMonkey) di mana nilai `null` direpresentasikan dengan penanda bit type binary object (000). Karena sudah menjadi standar lama, perilaku ini dipertahankan demi kompatibilitas web.
3. Pada `"5" + 3`, operator `+` memicu string concatenation karena salah satu operand adalah string, sehingga angka `3` diubah menjadi teks `"3"`. Sebaliknya, operator `*` pada `"5" * 3` hanya berfungsi untuk operasi matematika, sehingga JavaScript melakukan type coercion otomatis dengan mengubah string `"5"` menjadi number `5`.
*/

// Langkah 5: Modifikasi dadakan

// 1. Menambahkan satu produk baru ke daftar produk
daftarProduk.push({ nama: "Jajanan Pasar", harga: 5000 });

// 2. Menambahkan properti baru ke object usaha
usaha.instagram = "@kopisenja.yk";

// 3. Perhitungan baru: Total seluruh harga produk sebelum pajak
let totalHargaProduk = 0;
for (let i = 0; i < daftarProduk.length; i++) {
  totalHargaProduk += daftarProduk.harga;
}
console.log(`Total akumulasi harga semua produk: Rp ${totalHargaProduk}`);


/*
JAWABAN PERTANYAAN LANGKAH 5:
1. Bagian yang harus diubah adalah bagian logika rendering cetakan daftar produk (karena jumlah produk bertambah menjadi 4, indeks tambahan perlu diakomodasi), sedangkan struktur data utama dan konstanta pajak tidak perlu diubah karena bersifat fleksibel.
2. Contoh Statement: `let totalHargaProduk = 0;` dan `usaha.instagram = "@kopisenja.yk";` (instruksi yang melakukan aksi).
   Contoh Expression: `usaha.tahunBerdiri` dan `daftarProduk.length` (potongan kode yang dievaluasi untuk menghasilkan sebuah nilai).
*/


