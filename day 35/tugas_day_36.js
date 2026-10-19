// tugas day 36: kasir warung dengan scope, hoisting, dan closure
// Tebak dulu, baru cek

// Potongan A
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    // Tebakan: "Dalam"
    // Hasil Asli: "Dalam"
    console.log(nama);
  }

  dalam();
  // Tebakan: "Luar"
  // Hasil Asli: "Luar"
  console.log(nama);
}

luar();
// Tebakan: "Global"
// Hasil Asli: "Global"
console.log(nama);

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

// Tebakan: 85
// Hasil Asli: 85
console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok); // Output: "di dalam blok"
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i); // Output: "putaran 0", "putaran 1"
}

// Percobaan Tambahan (Langkah 1 potongan A):
// console.log(pesanBlok);
// Tebakan: Error ReferenceError karena pesanBlok bersifatblock-scoped
// Hasil Asli/Pesan Error: ReferenceError: pesanBlok is not defined

// console.log(i);
// Tebakan: Error ReferenceError karena i dideklarasikan dengan let dalam for loop (block-scoped)
// Hasil Asli/Pesan Error: ReferenceError: i is not defined

// Potongan B

// Tebakan: "Halo!"
// Hasil Asli
console.log(sapa());

function sapa() {
  return "Halo!";
}

// Tebakan: undefined
// Hasil Asli: undefined
console.log(warna);
var warna = "biru";
// Tebakan: "biru"
// Hasil Asli: "biru"
console.log(warna);

// Percobaan Tambahan (Langkah 1 Potongan B):
// console.log(lokasi); const lokasi = "Sleman"
// Tebakan: Error ReferenceError karena lokasi berada di Temporal Dead Zone (TDZ)
// Hasil Asli/Pesan Error: ReferenceError: Cannot acces 'lokasi' before initialization

// console.log(salam()); const salam = fuction () { return "Hai"; };
// Tebakan: Error ReferenceError karena salam dideklarasikan dengan cont (TDZ)
// Hasil Asli/Pesan Error: ReferenceError: Cannot access 'salam' before initialization

// Potongan C
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

// Tebakan: 1
// Hasil Asli: 1
console.log(penghitungA());

// Tebakan: 2
// Hasil Asli: 2
console.log(penghitungA());

// Tebakan: 3
// Hasil Asli: 3
console.log(penghitungA());

// Tebakan: 1
// Hasil Asli: 1
console.log(penghitungB());

// Tebakan: 4
// Hasil Asli: 4
console.log(penghitungA());

/* --- Jawaban Pertanyaan Langkah 1 ---
1. Tiga console.log(nama) beda hasil karena JavaScript mencari variabel dari scope terkecil ke luar (lexical scoping). hitung(100) bisa akses diskonGlobal karena inner scope punya akses ke outer scope. pesanBlok dan i error di luar blok karena let bersifat block-scoped.
2. sapa() bisa dipanggil karena Hoisting membawa deklarasi fungsi ke atas. warna menghasilkan undefined karena deklarasi var ter-hoist tanpa nilainya. lokasi dan salam error karena variabel let/const berada di Temporal Dead Zone sebelum baris inisialisasinya.
3. penghitungA terus bertambah karena closure mempertahankan akses ke lingkungan variabel hitungan. penghitungB mulai dari 1 lagi karena pemanggilan buatPenghitung() baru membuat eksekusi context dan variabel hitungan baru terpisah.
*/

// Perbaiki 8 Kesalahan
// 1. Cek Stok. Seharusnya tercetak: Stok Aman
const stok = 10;
let pesanStok; // FIX: Pindahkan variabel pesanStok ke luar scope if agar bisa diakses di luar blok
if (stok > 5) {
  pesanStok = "Stok aman";
}
console.log(pesanStok);

// 2. Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan; // FIX: Mengembalikan nilai harga - potongan alih-alih mencoba memanggil potongan di luar scope
}
console.log(hitungPotongan(50000));

// 3. Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
function sambutan() { // FIX: Ubah function expression (const) menjadi function declaration agar ter-hoist
  return "Selamat datang di Kedai Senja";
}
console.log(sambutan());

// 4. Kota. Seharusnya tercetak: Yogyakarta
let kota = "Yogyakarta"; // FIX: Pindahkan inisialisasi let kota sebelum console.log agar tidak kena TDZ
console.log(kota);

// 5. Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
let total = 100000; // FIX: Gunakan let dan variabel baru di dalam blok agar tidak menimpa variabel total utama
if (true) {
  let totalDiskon = 90000;
}
console.log(total);

// 6. Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
  saldoKas += jumlah; // FIX: Hapus deklarasi ulang 'let saldoKas = 0;' di dalam function agar langsung memperbarui saldoKas global
}
tambahKas(50000);
console.log(saldoKas);

// 7. Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
  let nomor = 0; // FIX: Pindahkan deklarasi 'let nomor = 0' ke luar inner function agar nilainya tidak tereketik ulang jadi 0 tiap dipanggil
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// 8. Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo; // FIX: Ubah 'this.saldo' menjadi 'saldo' agar merujuk pada variabel closure dari luar function
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());


/* --- Jawaban Pertanyaan Langkah 2 ---
1. Penjelasan ke-8 kesalahan:
   - Kesalahan 1: pesanStok di dalam blok if tidak bisa diakses di luar. Perbaikan: deklarasikan pesanStok di luar blok if.
   - Kesalahan 2: variabel potongan diakses di luar function. Perbaikan: panggil function langsung dalam console.log.
   - Kesalahan 3: function expression const dipanggil sebelum inisialisasi. Perbaikan: ubah menjadi function declaration.
   - Kesalahan 4: let kota diakses sebelum inisialisasi (TDZ). Perbaikan: pindahkan deklarasi ke atas console.log.
   - Kesalahan 5: var total di dalam blok menimpa var total luar. Perbaikan: ganti var dengan let agar terisolasi di blok.
   - Kesalahan 6: redeklarasi saldoKas di dalam function menutupi variabel luar (shadowing). Perbaikan: hapus 'let saldoKas = 0;'.
   - Kesalahan 7: let nomor ditaruh di dalam inner function sehingga reset terus ke 0. Perbaikan: pindahkan let nomor ke outer function.
   - Kesalahan 8: memakai this.saldo padahal saldo bukan property object melainkan variabel closure. Perbaikan: ubah this.saldo menjadi saldo.
2. Kesalahan 1, 2, 3, dan 4 menyebabkan error di console (ReferenceError). Kesalahan 5, 6, 7, dan 8 tidak membuat error tetapi menghasilkan output yang salah (bug logika).
3. Karena terjadi Variable Shadowing, di mana variabel lokal dengan nama sama menutup variabel di outer scope.
4. Karena saldo adalah variabel biasa di scope buatDompet yang ditangkap oleh closure, bukan property dari object itu sendiri.
*/

// Bikin Kasir Sendiri
// 1. Scope Global
const NAMA_WARUNG = "Warung Serba Ada";
const TARIF_PAJAK = 0.11;

// 2. Function Declaration & Pemanggilan di Baris Paling Atas Langkah 3
cetakJudul();

function cetakJudul() {
  console.log(NAMA_WARUNG.toUpperCase());
}

// Percobaan Tambahan (Langkah 3 Syarat 5):
// cetakJudulExpr();
// const cetakJudulExpr = function() { console.log(NAMA_WARUNG.toUpperCase()); };
// Hasil / Catatan: Error ReferenceError: Cannot access 'cetakJudulExpr' before initialization karena function expression tidak ter-hoist nilainya.

// 3 & 4. Function Pabrik buatKasir
function buatKasir(namaKasir, modalAwal) {
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    // 5. catatPenjualan
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = subtotal * TARIF_PAJAK;
      const total = subtotal + pajak;

      saldoKas += total;
      jumlahTransaksi++;
      riwayat.push({ namaMenu, jumlah, total });

      return total;
    },

    // 6. ambilKas
    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }
      saldoKas -= jumlah;
      return true;
    },

    // 7. cekSaldo & lihatRiwayat
    cekSaldo() {
      return saldoKas;
    },

    lihatRiwayat() {
      return riwayat.slice(); // mengembalikan salinan shallow copy
    },

    // 8. ringkasan
    ringkasan() {
      console.log(`Kasir: ${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo Kas: Rp${saldoKas}`);
    }
  };
}

// 9. Membuat dua instance kasir & transaksi
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

// Catat penjualan kasir pagi (3 transaksi)
kasirPagi.catatPenjualan("Nasi Goreng", 15000, 2);
kasirPagi.catatPenjualan("Es Teh", 5000, 2);
kasirPagi.catatPenjualan("Ayam Goreng", 20000, 1);

// Catat penjualan kasir malam (2 transaksi)
kasirMalam.catatPenjualan("Mie Goreng", 12000, 2);
kasirMalam.catatPenjualan("Kopi", 8000, 1);

// Panggil ambilKas minimal 2 kali
console.log("Pengambilan kasirPagi 20000:", kasirPagi.ambilKas(20000)); // Berhasil (true)
console.log("Pengambilan kasirPagi 900000:", kasirPagi.ambilKas(900000)); // Gagal (false)

// Ringkasan kedua kasir
kasirPagi.ringkasan();
kasirMalam.ringkasan();

// 10. Buktikan data privat
console.log("Akses langsung saldoKas:", kasirPagi.saldoKas); // undefined
kasirPagi.saldoKas = 999999;
console.log("Cek saldo via method setelah diisi manual:", kasirPagi.cekSaldo()); // Saldo tetap tidak berubah dari luar!

// 11. Buktikan salinan array riwayat
const riwayatTemp = kasirPagi.lihatRiwayat();
riwayatTemp.push({ namaMenu: "Item Palsu", jumlah: 1, total: 0 });
console.log("Panjang riwayat asli kasirPagi:", kasirPagi.lihatRiwayat().length); // Tetap 3, tidak bertambah!

// 12. Function Pabrik Penghitung Diskon dengan Arrow Function
function buatPenghitungDiskon(persen) {
  return (harga) => harga - (harga * (persen / 100));
}

const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);

console.log("Harga 80000 diskon 10%:", diskon10(80000)); // 72000
console.log("Harga 80000 diskon 25%:", diskon25(80000)); // 60000

// 13. Demonstrasi Shadowing
const itemToko = "Beras Global";

function tesShadowing() {
  const itemToko = "Beras Lokal Function";
  console.log("Di dalam function:", itemToko); // Beras Lokal Function
}

tesShadowing();
console.log("Di luar function:", itemToko); // Beras Global


/* --- Jawaban Pertanyaan Langkah 3 ---
1. kasirPagi.saldoKas bernilai undefined karena saldoKas dideklarasikan sebagai variabel let lokal dalam closure function, bukan sebagai property pada object return.
2. Saldo keduanya terpisah karena setiap kali buatKasir dipanggil, JavaScript membuat Lexical Environment (scope/ruang) baru yang terisolasi untuk variabel-variabel di dalamnya.
3. Variabel saldoKas, jumlahTransaksi, riwayat, namaKasir, dan modalAwal masih diingat karena closure mempertahankan referensi ke scope eksekusi outer function selama method-method return-nya masih ada.
4. TARIF_PAJAK bisa diakses karena mekanisme Lexical Scope, di mana inner scope selalu dapat mengakses variabel yang berada di outer/global scope.
5. cetakJudul() ter-hoist penuh karena dibuat dengan function declaration. Jika diubah ke function expression (const), akan timbul ReferenceError karena kena Temporal Dead Zone.
6. Function tersebut mengingat nilai persen melalui Closure, di mana variabel persen ditangkap (captured) saat buatPenghitungDiskon dipanggil.
*/
