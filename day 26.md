Mengapa Merge Conflict Bisa Terjadi?
Merge conflict (konflik penggabungan) terjadi ketika sistem control version seperti Git mencoba menggabungkan perubahan dari dua cabang (branch) yang berbeda, tetapi menemukan perubahan yang saling bertentangan pada bagian file atau baris kode yang sama.

Karena komputer tidak memiliki kemampuan untuk menilai baris kode mana yang benar atau harus diprioritaskan, proses penggabungan otomatis dihentikan. Git kemudian meminta pengembang (developer) untuk turun tangan menyelesaikan konflik tersebut secara manual.

2 Situasi Utama yang Memicu Merge Conflict
Pengeditan Baris yang Sama di Waktu Bersamaan
Dua orang atau lebih mengubah baris kode yang persis sama di file yang sama pada branch yang terpisah, lalu mencoba menggabungkannya ke branch utama (main atau master).

Penghapusan vs. Modifikasi File
Satu pengembang menghapus sebuah file di suatu branch, sementara pengembang lain di branch berbeda justru sedang mengedit atau menambahkan baris kode di dalam file yang sama.

Contoh Skenario Nyata
Bayangkan kamu dan rekan kerjamu sedang membuat halaman web profil bisnis sederhana menggunakan file index.html.

Kondisi Awal: Di baris ke-5 file index.html, terdapat kode judul web seperti ini:

HTML
<h1>Selamat Datang di Toko Kami</h1>
Situasi yang Terjadi:

Kamu membuat branch baru bernama fitur-diskon dan mengubah baris ke-5 menjadi:

HTML
<h1>Diskon Spesial Akhir Tahun!</h1>
Di saat yang sama, rekanmu membuat branch berbeda bernama fitur-header dan mengubah baris ke-5 yang sama menjadi:

HTML
<h1>Selamat Datang di Toko Elektronik Kami</h1>
Hasilnya: Ketika kalian berdua ingin menggabungkan (merge) kerjaan masing-masing ke branch utama, Git bingung: Apakah baris ke-5 harus diisi teks diskon atau teks toko elektronik?

Di titik inilah merge conflict terjadi, dan Git akan menandai file tersebut dengan simbol khusus (seperti <<<<<<<, =======, dan >>>>>>>) agar kalian bisa berunding dan memilih teks mana yang akan digunakan.