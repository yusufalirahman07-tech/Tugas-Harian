// Tugas Day 32: Kasir Warung dengan Array dan Function

// Tebak Dulu, Baru Cek
// Potongan A
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice (1, 3);

// Tebakan:
// 1. terakhirDibuang: "Jus"
// 2. pertamaDibuang: "Air"
// 3. menu: ["Kopi", "Roti", "Susu"] (setelah "Teh" di indeks 1 dihapus)
// 4. irisan ["Roti", "Susu"]
// 5. indexOf ("Susu"): 2
// 6. indexOf ("Nasi"): -1
// 7. includes ("Kopi"): true
// 8. menu[menu.length -1]: "Susu"

console.log(terakhirDibuang); // Hasil Asli: Jus
console.log(pertamaDibuang); // Hasil Asli: Air
console.log(menu);          // Hasil Asli: ['Kopi', 'Roti', 'Susu']
console.log(irisan);       // Hasil Asli: ['Roti', 'Susu']
console.log(menu.indexOf("Susu")); // Hasil Asli: 2
console.log(menu.indexOf("Nasi")); // Hasil Asli: -1
console.log(menu.includes("Kopi")); // Hasil Asli: true
console.log(menu[menu.length -1]); // Hasil Asli: Susu

// Potongan B
function tambah(a, b) {
   return a + b; 
}

function cetakTambah(a, b) {
    console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);

// Tebakan:
// console.log(x): 5 (karena function mengemblikan nilai 5 lewat return)
// console.log(y): undefined (karena function cetakTambah tidak memiliki return, sehingga hanya mencetak ke console tapi mengembalikan undefined ke variabel y)

console.log(x); // Hasil Asli: 5
console.log(y); // Hasil Asli: undefined

// Potongan C
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;

// Tebakan:
// 1. hitungDiskonPersen(50000, 20): 40000
// 2. hitumgDiskonPersen(50000): 45000 (karena persen pakai nilai default 10)
// 3. cekAngka(-5): "negatif" (baris console.log setelah return tidak akan pernah tercetak karena return menghentikan fungsi)
// 4. cekAngka(5): "bukan negatif"

console.log(hitungDiskonPersen(50000, 20)); // Hasil Asli: 40000
console.log(hitungDiskonPersen(50000));    // Hasil Asli: 45000

function cekAngka(n) {
    if (n < 0) {
        return "negatif";
        console.log("Baris ini muncul atau tidak?"); // Tidak muncul (unreachable code)
    }
    return "bukan negatif"
}

console.log(cekAngka(-5)); // Hasil Asli: negatif
console.log(cekAngka(5)); // Hasil Asli: bukan negatif

/*
Pertanyaan Langkah 1:
1. menu dan irisan berbeda dengan sloce() mengambil potongan array tanpa mengubah array asli, sedangkan splice() memotong dan menghapus elemen langsung dari array asli. Method yang mengubah array asli (mutating) contohnya push, unshift, pop, shift, dan splice. Yang tidak mengubah array asli (non-mtating) contohnya slice, indexOf, dan includes
2. 'tambah' menggunakan 'return' sehingga menghasilkan nilai yang bisa disimpan ke variabel (x), sedangkan 'cetakTambah' hanya menampilkan ke console tanpa mengembalikan nilai sehingga variabel 'y' bernilai 'undefined'
3. hitungDiskonPersen(50000) menghasilkan angka karena parameter 'persen' sudah diberi nilai default 10 di awal. Baris console.log di dalam cekAngka tidak tercetak karena terletak setelah kata kunci 'return' yang mana fungsi langsung berhenti dan keluar begitu 'return' dieksekusi'
*/

// Perbaiki 7 Kesalahan
let daftarBelanja = ["Kopi", "Teh", "Roti"];

// 1. Fix: unshift menambahkandi awal, seharusnya push untuk menambhakan di akhir
daftarBelanja.push("Susu");

// 2. Fix: slice tidak mengubah array asli dan slah parameter, seharusnya pakai splice(1, 1) untuk menghapus "Teh" di indeks 1
daftarBelanja.splice(1, 1);

// 3. Fix: indexOf mengembalikan angka indeks (-1 jika tidak ada), seharusnya pakai includes("Roti") untuk menghasilkan boolean (true/false)
let adaRoti = daftarBelanja.includes("Roti");

// 4. Fix: mengakses elemen terakhir harus dikurangi 1 karena indeks mulai dari 0 ('daftarBelanja.lenght - 1')
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// 5. FIX: arrow function / function biasa tanpa return implisit harus menggunakan kata kunci 'return' agar mengeluarkan nilai
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

// 6. FIX: arrow function dengan kurung kurawal `{}` wajib menggunakan kata kunci 'return' agar mengembalikan nilai, atau kurung kurawalnya dihapus agar menjadi implicit return
const hitungPajak = (subtotal) => {
  return subtotal * 0.11;
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// 7. FIX: hitungTotal dipanggil sebelum dideklarasikan (function expression dengan const tidak bisa di-hoisting). Deklarasi harus diletakkan di atas sebelum pemanggilan.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;
console.log(hitungTotal(80000, 8800));


/*
   PERTANYAAN LANGKAH 2:
   1. 
      - Kesalahan 1: Menggunakan unshift (menambah di depan) padahal diminta menambah di akhir (perbaikan: gunakan push).
      - Kesalahan 2: Menggunakan slice (tidak mengubah array asli) padahal ingin menghapus elemen (perbaikan: gunakan splice).
      - Kesalahan 3: Menyimpan hasil indexOf (angka) padahal yang diminta nilai boolean true/false (perbaikan: gunakan includes).
      - Kesalahan 4: Mengakses array dengan length tanpa dikurangi 1 sehingga hasilnya undefined (perbaikan: kurangi 1).
      - Kesalahan 5: Fungsi hitungDiskon tidak memiliki return (perbaikan: tambahkan return).
      - Kesalahan 6: Arrow function hitungPajak pakai kurung kurawal tapi tanpa return (perbaikan: tambahkan return).
      - Kesalahan 7: Memanggil variabel const hitungTotal sebelum dideklarasikan / hoisting (perbaikan: pindahkan deklarasi ke atas).
   2. Yang menyebabkan error di console adalah kesalahan nomor 7 (memanggil fungsi dengan const sebelum dideklarasikan, memicu ReferenceError). Kesalahan 1 sampai 6 tidak error di console, tetapi hasilnya salah atau undefined karena salah method atau lupa return.
   3. Keduanya menghasilkan undefined karena lupa menuliskan kata kunci `return` di dalam blok kodenya, sehingga fungsi tidak mengembalikan nilai apa pun saat selesai dijalankan.
*/



/* ==========================================================================
   LANGKAH 3: BIKIN KASIR SENDIRI
   ========================================================================== */

const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// Mengelola keranjang dengan array method
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Es Teh");
kasirKeranjang.unshift("Kopi Susu");
kasirKeranjang.pop(); // membatalkan item terakhir
kasirKeranjang.push("Roti Bakar", "Jus Jeruk"); // isi akhir minimal 4 item

// Cek menu dengan includes dan slice untuk paket cepat
console.log("Apakah ada Roti Bakar?", kasirKeranjang.includes("Roti Bakar"));
const paketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket Cepat (3 item pertama):", paketCepat);

// 3. Function Pertama (Function Declaration): kasirCariHarga
function kasirCariHarga(namaMenu) {
  let index = kasirNamaMenu.indexOf(namaMenu);
  if (index !== -1) {
    return kasirHargaMenu[index];
  }
  return 0;
}

// 4. Function Kedua (Function Expression): kasirHitungSubtotal
const kasirHitungSubtotal = function(keranjang) {
  let subtotal = 0;
  for (let i = 0; i < keranjang.length; i++) {
    subtotal += kasirCariHarga(keranjang[i]);
  }
  return subtotal;
};

// 5. Function Ketiga (Arrow Function dengan kurung kurawal & return): kasirHitungDiskon
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};

// 6. Function Keempat (Arrow Function ringkas satu baris dengan nilai default): kasirHitungPajak
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// 7. Function Kelima: kasirCetakStruk
function kasirCetakStruk(keranjang, subtotal, diskon, pajak) {
  console.log("=== STRUK PEMBELANJAAN WARUNG ===");
  console.log("Daftar Item:");
  for (let i = 0; i < keranjang.length; i++) {
    console.log(`${i + 1}. ${keranjang[i]} - Rp${kasirCariHarga(keranjang[i])}`);
  }
  console.log("--------------------------------");
  console.log(`Subtotal : Rp${subtotal}`);
  console.log(`Diskon   : Rp${diskon}`);
  console.log(`Pajak    : Rp${pajak}`);
  let totalAkhir = (subtotal - diskon) + pajak;
  console.log(`Total    : Rp${totalAkhir}`);
  console.log("================================\n");
}

// --- Uji Skenario 1 ---
// Skenario 1: keranjang berisi ["Kopi Susu", "Es Teh", "Roti Bakar"]
kasirKeranjang = ["Kopi Susu", "Es Teh", "Roti Bakar"];
let subtotal1 = kasirHitungSubtotal(kasirKeranjang);
let diskon1 = kasirHitungDiskon(subtotal1);
let pajak1 = kasirHitungPajak(subtotal1 - diskon1);
kasirCetakStruk(kasirKeranjang, subtotal1, diskon1, pajak1);

/*
// Hasil Skenario 1:
// Subtotal: Rp40500
// Diskon  : Rp2025 (5%)
// Pajak   : Rp4232.25
// Total   : Rp42707.25
*/

// --- Uji Skenario 2 ---
// Skenario 2: keranjang berisi ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Jus Jeruk"]
kasirKeranjang = ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Jus Jeruk"];
let subtotal2 = kasirHitungSubtotal(kasirKeranjang);
let diskon2 = kasirHitungDiskon(subtotal2);
let pajak2 = kasirHitungPajak(subtotal2 - diskon2);
kasirCetakStruk(kasirKeranjang, subtotal2, diskon2, pajak2);

/*
// Hasil Skenario 2:
// Subtotal: Rp74000
// Diskon  : Rp7400 (10%)
// Pajak   : Rp7326
// Total   : Rp73926
*/


/*
   PERTANYAAN LANGKAH 3:
   1. Contoh method yang dipakai adalah push(). Method ini mengubah array aslinya (mutating). 
      Contoh pembuktian:
      let testArr = ["A"];
      console.log(testArr); // ["A"]
      testArr.push("B");
      console.log(testArr); // ["A", "B"] (array asli berubah)
   2. splice() digunakan untuk memotong dan sekaligus menghapus atau mengganti elemen dari array asli (mengubah array asli), sedangkan slice() digunakan untuk menyalin sebagian elemen array ke array baru tanpa mengubah array aslinya.
      Contoh: kasirKeranjang.slice(0, 3) mengambil 3 elemen pertama tanpa merusak keranjang asli, sedangkan kasirKeranjang.splice(1, 1) menghapus elemen pada indeks 1 dari keranjang asli.
   3. kasirCariHarga memakai return agar nilai harga yang dicari dikembalikan dan bisa dipakai langsung oleh fungsi lain (seperti kasirHitungSubtotal). Jika diganti console.log, nilai yang dikembalikan fungsi adalah undefined, sehingga kasirHitungSubtotal akan menjumlahkan undefined dan menghasilkan NaN (Not a Number).
   4. Parameter adalah variabel penampung yang ditulis saat pendefinisian fungsi (contoh: `namaMenu` dalam `function kasirCariHarga(namaMenu)`), sedangkan argumen adalah nilai nyata yang dikirimkan saat fungsi dipanggil (contoh: `"Kopi Susu"` dalam `kasirCariHarga("Kopi Susu")`).
   5. kasirHitungPajak boleh dipanggil dengan satu argumen karena parameter kedua (`tarif`) sudah diberi nilai default (`0.11`). Jika dipanggil dengan satu argumen, fungsi otomatis memakai nilai default tersebut. Jika dipanggil dengan dua argumen, nilai default akan ditimpa oleh argumen kedua.
   6. Jika memanggil kasirHitungSubtotal (yang dibuat dengan const) sebelum didefinisikan, akan terjadi ReferenceError karena function expression dengan `const` tidak mengalami hoisting. Berbeda dengan kasirCariHarga (function declaration), ia bisa dipanggil sebelum baris pendefinisiannya karena JavaScript melakukan hoisting pada deklarasi fungsi.
      Contoh uji coba hoisting:
      // console.log(kasirHitungSubtotal([])); // Error: Cannot access 'kasirHitungSubtotal' before initialization
      // console.log(kasirCariHarga("Kopi"));     // Berjalan normal karena di-hoist
*/














