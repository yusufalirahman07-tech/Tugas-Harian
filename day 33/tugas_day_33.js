// Tugas Day 33: Kasir Warung Dengan Object

// Tebak Dulu, Baru Cek
// Potongan A
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10};

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

/* Tebakan & Hasil Potongan A:
    1.console.log(produk.nama); -> Tebakan: "Kopi Susu" | Hasil: "Kopi Susu"
    2.console.log(produk[kunci]); -> Tebakan: "Kopi Susu" | Hasil: "Kopi Susu"
    3.console.log(produk["harga"]); -> Tebakan: "20000" | Hasil: 20000
    4.console.log(produk.stok); -> Tebakan: undefined | Hasil: undefined
    5.console.log("kategori" in produk); -> Tebakan: true | Hasil: true
    6.console.log("stok" in produk); -> Tebakan: false | Hasil: false
    7.console.log(Object.keys(produk)); -> Tebakan: ['nama', 'harga', 'kategori'] | Hasil: ['nama', 'harga', 'kategori']
    8.console.log(Object.values(produk)); -> Tebakan: ['Kopi Susu', 20000, 'minuman'] | Hasil: ['Kopi Susu', 20000, 'minuman']
*/

// Potongan B
const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa); // Tebakan: 30000 | Hasil: 30000
dompet.cekSaldo(); // Tebakan: "Rina: Rp 30000" | Hasil: "Joko: Rp 30000"
dompet.belanja(10000);
dompet.cekSaldo(); // Tebakan: "Rina: Rp 20000" | Hasil: "Joko: Rp 20000"
console.log(dompet.saldo); // Tebakan: 20000 | Hasil:  20000

// Potongan C
const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai); // Hasil: Senin, Selasa
}

for (let indeks in hari) {
  console.log(indeks); // Hasil: 0, 1 (indeks/key dari array)
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]); // Hasil: nama: Kopi, harga: 18000
}

for (let huruf of "Kopi") {
  console.log(huruf); // Hasil: K, o, p, i
}

/*
Pertanyaan Langkah 1:
1. Apa beda produk.nama dan produk[kunci]? Kenapa produk.stok hasilnya undefined?
   - `produk.nama` menggunakan dot notation (akses properti langsung dengan nama statis), sedangkan `produk[kunci]` menggunakan bracket notation yang memungkinkan akses properti dinamis via variabel string.
   - `produk.stok` menghasilkan `undefined` karena properti `stok` sudah dihapus menggunakan keyword `delete` sebelumnya.
2. Pada Potongan B, kenapa dompet.saldo di akhir bernilai 20000, padahal belanja(10000) tidak disimpan ke variabel? Apa yang dirujuk oleh this?
   - `dompet.saldo` tetap berkurang karena method `belanja` memodifikasi langsung property `this.saldo` di dalam object `dompet`.
   - `this` merujuk pada object pemilik context pemanggil method tersebut, yaitu object `dompet`.
3. Pada Potongan C, kenapa for...in pada array menghasilkan 0 dan 1, bukan "Senin" dan "Selasa"? Kenapa for...of pada object kopi menghasilkan error?
   - `for...in` melakukan iterasi terhadap *keys* (indeks) dari object/array, bukan nilai elemennya.
   - `for...of` hanya bisa digunakan pada objek yang bersifat *iterable* (seperti Array, String, Map, Set). Object biasa tidak memiliki protokol iterator bawaan sehingga memunculkan error `TypeError`.
*/

// Perbaiki 7 Kesalahan
const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,


// Fix 1: Menambahkan keyword 'this' agar merujuk ke property object 
tambahKas(jumlah) {
    this.saldoKas += jumlah;
},

// Fix 2: Menambahkan keyword 'return' agar method mengembalikan nilai sisa saldoKas
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// Fix 3: Key dengan tanda hubung harus diakses menggunkan bracket notation, bukan dot notation
const kontak = { "no-wa": "08123" };
console.log(kontak[no-wa]);

// Fix 4: Menggunakan operator 'delete' alih alih mengisi dengan undefined agar properti benar-benar terhapus dari object
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

// Fix 5: Mengubah 'for...in' menjadi 'for...of' untuk mencetak nilai elemen array satu per satu
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// Fix 6: Mengubah 'for...of' menjadi 'for...in' karena object tidak bisa di-iterasi dengan 'for...of'
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// Fix 7: Memperbaiki nama method 'Object.key' menjadi 'Object.keys'
console.log(Object.keys(info));

/* 
PERTANYAAN LANGKAH 2:
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing:
   - Kesalahan 1: Variabel `saldoKas` lupa diberi prefix `this.` sehingga tidak dikenali.
   - Kesalahan 2: Method `ambilKas` tidak mengembalikan nilai (`return`).
   - Kesalahan 3: Properti berkarakter khusus (`no-wa`) diakses dengan dot notation padahal harus bracket notation.
   - Kesalahan 4: Properti `kataSandi` dihapus dengan assignment `undefined` alih-alih operator `delete`.
   - Kesalahan 5: Iterasi nilai array menggunakan `for...in` (mengambil indeks) alih-alih `for...of`.
   - Kesalahan 6: Iterasi object menggunakan `for...of` (error tidak iterable) alih-alih `for...in`.
   - Kesalahan 7: Penulisan method `Object.key` keliru, yang benar adalah `Object.keys`.
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
   - Yang menyebabkan error di console: Kesalahan 1 (`saldoKas` is not defined), Kesalahan 3 (SyntaxError karena tanda `-`), Kesalahan 6 (`info is not iterable`), dan Kesalahan 7 (`Object.key is not a function`).
   - Yang tidak error tapi hasilnya salah: Kesalahan 2 (mengembalikan `undefined`), Kesalahan 4 (properti masih muncul dengan nilai `undefined`), dan Kesalahan 5 (mencetak indeks `0, 1, 2` alih-alih nama menu).
3. Kenapa akun.kataSandi = undefined tidak sama dengan delete akun.kataSandi? Tunjukkan bedanya memakai in.
   - Assignment `= undefined` hanya mengubah nilai properti menjadi `undefined`, tetapi propertinya masih ada di dalam object. Sebaliknya, operator `delete` menghapus properti tersebut secara permanen dari object.
   - Contoh: `"kataSandi" in akun` akan bernilai `true` jika menggunakan `= undefined`, dan bernilai `false` jika menggunakan `delete`.
*/

// Bikin Kasir Sendiri
const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Teh Manis", kategori: "minuman", harga: 5000, stok: 15 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 4 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 20000, stok: 8 },
    { nama: "Mie Goreng", kategori: "makanan", harga: 15000, stok: 3 }
  ],
  keranjang: [],

  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        if (item.stok >= jumlah) {
          this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
          item.stok -= jumlah;
          return true;
        }
      }
    }
    return false;
  },

  hitungSubtotal() {
    let subtotal = 0;
    for (let item of this.keranjang) {
      let hargaSatuan = this.cariHarga(item.nama);
      subtotal += hargaSatuan * item.jumlah;
    }
    return subtotal;
  },

  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return 0.15;
    } else if (subtotal >= 50000) {
      return 0.10;
    } else if (subtotal >= 25000) {
      return 0.05;
    }
    return 0;
  },

  cetakStruk() {
    console.log(`=== ${this.nama} - ${this.kota} ===`);
    let subtotal = this.hitungSubtotal();
    let diskonPersen = this.hitungDiskon(subtotal);
    let nilaiDiskon = subtotal * diskonPersen;
    let setelahDiskon = subtotal - nilaiDiskon;
    let pajak = setelahDiskon * 0.11;
    let total = setelahDiskon + pajak;

    let no = 1;
    for (let item of this.keranjang) {
      let hargaSatuan = this.cariHarga(item.nama);
      console.log(`${no}. ${item.nama} x${item.jumlah} - Rp ${hargaSatuan * item.jumlah}`);
      no++;
    }

    console.log(`Subtotal: Rp ${subtotal}`);
    console.log(`Diskon (${diskonPersen * 100}%): Rp ${nilaiDiskon}`);
    console.log(`Pajak (11%): Rp ${pajak}`);
    console.log(`Total: Rp ${total}`);
    console.log("===============================");

    this.saldoKas += total;
    this.keranjang = []; // Reset keranjang setelah cetak struk
  },

  menuMenipis() {
    let listMenipis = [];
    for (let item of this.menu) {
      if (item.stok < 5) {
        listMenipis.push(item.nama);
      }
    }
    return listMenipis;
  }
};

// Properti Dinamis
let propWebsite = "website";
kasirKedai[propWebsite] = "www.kedaisenja.com";
console.log("website" in kasirKedai); // true
console.log(kasirKedai.website);
delete kasirKedai.website;
console.log("website" in kasirKedai); // false

// for...in pada jamOperasional & menu[0] 
for (let kunci in kasirKedai.jamOperasional) {
  console.log(`${kunci}: ${kasirKedai.jamOperasional[kunci]}`);
}
for (let kunci in kasirKedai.menu[0]) {
  console.log(`${kunci}: ${kasirKedai.menu[0][kunci]}`);
}

// --- Object.keys & Object.values ---
console.log(Object.keys(kasirKedai.jamOperasional));
console.log(Object.values(kasirKedai.jamOperasional));

// --- Hitung huruf "a" kecil pada nama kedai ---
let jumlahHurufA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}
console.log(`Jumlah huruf 'a' pada nama kedai: ${jumlahHurufA}`); // 1

// Uji Kasus Gagal 
console.log(kasirKedai.tambahKeKeranjang("Es Teh Jumbo", 2)); // false (menu tidak ada)
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 15));   // false (stok tidak cukup)


// Uji Skenario 1 
// Skenario 1: Kopi Susu x3, Teh Manis x2
kasirKedai.tambahKeKeranjang("Kopi Susu", 3);
kasirKedai.tambaKeKeranjang = kasirKedai.tambahKeKeranjang("Teh Manis", 2);
kasirKedai.cetakStruk();
/* Hasil Skenario 1:
=== Kedai Senja - Yogyakarta ===
1. Kopi Susu x3 - Rp 54000
2. Teh Manis x2 - Rp 10000
Subtotal: Rp 64000
Diskon (10%): Rp 6400
Pajak (11%): Rp 6336
Total: Rp 63936
===============================
*/


// Uji Skenario 2
// Skenario 2: Nasi Goreng x4, Roti Bakar x2
kasirKedai.tambahKeKeranjang("Nasi Goreng", 4);
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);
kasirKedai.cetakStruk();
/* Hasil Skenario 2:
=== Kedai Senja - Yogyakarta ===
1. Nasi Goreng x4 - Rp 80000
2. Roti Bakar x2 - Rp 30000
Subtotal: Rp 110000
Diskon (15%): Rp 16500
Pajak (11%): Rp 10285.5
Total: Rp 103785.5
===============================
*/

// --- Uji Bonus: Menu Menipis setelah Skenario 2 ---
console.log("Menu dengan stok < 5:", kasirKedai.menuMenipis());
// Hasil: [ 'Roti Bakar', 'Mie Goreng' ]
// Kenapa berbeda? Karena stok Roti Bakar berkurang 2 setelah dibeli pada Skenario 2 (dari 4 menjadi 2, sehingga < 5).

/* 
PERTANYAAN LANGKAH 3:
1. Apa beda dot notation dan bracket notation? Beri contoh dari kodemu, dan jelaskan kapan bracket notation wajib dipakai.
   - Dot notation menggunakan tanda titik (`object.property`) dengan nama properti yang statis dan valid sebagaiidentifier. Bracket notation menggunakan tanda kurung siku (`object["property"]`) yang menerima string atau variabel.
   - Contoh dot notation: `kasirKedai.nama`.
   - Contoh bracket notation: `kasirKedai[propWebsite]` atau `kasirKedai.jamOperasional[kunci]`.
   - Wajib pakai bracket notation saat nama properti mengandung spasi/karakter khusus (seperti `"no-wa"`), atau ketika nama properti disimpan di dalam variabel dinamis.
2. Kenapa di dalam method kamu menulis this.saldoKas, bukan saldoKas? Apa yang terjadi jika kata this dihapus?
   - Karena `saldoKas` adalah properti milik object itu sendiri, bukan variabel lokal. Tanpa `this`, JavaScript akan mencari variabel bernama `saldoKas` di scope lokal dan mencatatkan error `ReferenceError: saldoKas is not defined`.
3. Apa beda for...of dan for...in? Tunjuk satu tempat di kodemu yang memakai masing-masing, dan jelaskan kenapa yang satu tidak bisa ditukar dengan yang lain.
   - `for...of` digunakan untuk mengiterasi *nilai* dari objek yang iterable (seperti Array `for (let item of this.menu)`). `for...in` digunakan untuk mengiterasi *kunci/indeks* dari sebuah object (seperti `for (let kunci in kasirKedai.jamOperasional)`). Keduanya tidak bisa ditukar karena array tidak memiliki properti kunci string secara langsung untuk iterasi `for...in` seperti object, dan object biasa tidak memiliki iterator untuk `for...of`.
4. Kenapa for...of pada kasirKedai (object) menghasilkan error, sedangkan pada string dan array tidak?
   - Karena object biasa di JavaScript tidak menerapkan protokol iterator (`Symbol.iterator`), sedangkan string dan array sudah memilikinya secara bawaan.
5. Apa beda Object.keys dan Object.values? Tunjuk hasilnya dari kodemu.
   - `Object.keys()` mengembalikan array berisi daftar *nama kunci* (properti) dari suatu object (contoh: `['buka', 'tutup']`). `Object.values()` mengembalikan array berisi daftar *nilai* dari properti object tersebut (contoh: `['08:00', '21:00']`).
6. Kenapa cariHarga dan hitungSubtotal harus memakai return, sedangkan cetakStruk boleh tidak? Apa yang terjadi jika hitungSubtotal hanya memakai console.log?
   - `cariHarga` dan `hitungSubtotal` menghasilkan nilai komputasi yang wajib dipakai/diteruskan ke fungsi lain (seperti perhitungan total dan struk). Jika `hitungSubtotal` hanya melakukan `console.log` tanpa `return`, fungsi pemanggil (`cetakStruk`) akan menerima nilai `undefined` dan perhitungan harga total menjadi rusak (`NaN`).
*/

