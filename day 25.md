1.Arah Aliran Kode (Push & Pull)

Push: Mengirimkan perubahan kode dari komputer lokal (komputer) ke remote reposotory (seperti GitHub)

Pull: Mengambil dan menggabungkan pembaruan kode terbaru dari remote repository (GitHub) ke komputer lokal

Situasi nyata push: Anda baru saja selesai memperbaiki tampilan halaman web lokal di laptop dan ingin menyimpan serta membagikan agar bisa diakses oleh tim di GitHub

Situasi nyata pull: satu tim sudah mengirmkan kode fitur baru ke GitHub, dan perlu memperbarui repository di komputer lokal sebelum mulai bekerja agar memiliki versi yang paling mutakhir

2.Perintah git.push dan opsi -u

a.Fungsi opsi -u (--set-upstream)
Mengaitkan branch yang bersesuaian di remote (origin). Ini membuat Git "mengingat" hubungan antara kedua branch tersebut.

b. Apa yang terjadi jika opsi -u tidak disertakan pada push pertama: Git akan menolak perintah dan menampilkan pesan error (atau instruksi manual) karena Git tidak tahu ke branch remote mana data tersebut harus dikirim. Anda harus mengetik perintah yang lebih panjang seperti git push origin <nama-branch>.

c. Mengapa setelah -u ditetapkan cukup menjalankan git push saja: Karena relasi upstream sudah tersimpan, Git secara otomatis tahu bahwa perintah git push selanjutnya ditujukan ke branch dan remote yang sama tanpa perlu ditulis ulang.

3.git clone vs git init

git clone: Menyalin seluruh repositori yang sudah ada (termasuk seluruh riwayat commit dan konfigurasinya) dari server remote seperti GitHub ke komputer lokal.

git init: Menginisialisasi folder kosong di komputer lokal agar menjadi repositori Git yang baru dari nol.

Mengapa tidak perlu git init setelah clone: Karena perintah git clone secara otomatis sudah membuat folder .git dan mengatur koneksi remote di dalamnya, sehingga folder hasil clone sudah berstatus sebagai repositori Git yang sah.

4.Perintah git pull

Fungsi: Menggabungkan dua perintah sekaligus, yaitu mengunduh pembaruan dari remote (git fetch) dan langsung menerapkannya ke branch aktif di komputer lokal (git merge).

Pentingnya dalam Tim: Mencegah terjadinya konflik kode yang parah, memastikan semua anggota tim bekerja di atas fondasi kode yang seragam, dan menyelaraskan progres pekerjaan secara berkala.

2 Momen Spesifik Menjalankan git pull:

Tepat sebelum Anda mulai menulis kode baru atau bekerja di pagi hari.

Sebelum Anda melakukan push kode lokal Anda ke GitHub (untuk memastikan tidak ada perubahan dari orang lain yang terlewat).

5.Alur Kerja Harian yang Direkomendasi

Urutan perintah standar harian:

git pull origin main — Penting untuk memastikan kode lokal Anda selalu sinkron dengan versi terbaru di server.

git switch -c fitur-baru — Penting membuat branch baru agar pekerjaan terisolasi dan tidak merusak kode utama (main) yang sudah stabil.

git add . — Penting untuk memasukkan file yang diubah ke staging area (menandai file yang akan disimpan).

git commit -m "Pesan deskriptif" — Penting untuk merekam snapshot perubahan di komputer lokal disertai catatan yang jelas.

git push origin fitur-baru — Penting untuk mencadangkan pekerjaan ke GitHub dan membagikannya ke tim.

6.Konsep Fork

Apa itu Fork: Tindakan membuat salinan mandiri dari sebuah repositori milik orang/organisasi lain ke akun GitHub Anda sendiri.

2 Situasi Nyata Memerlukan Fork:

Berkontribusi pada proyek open source milik orang lain di mana Anda tidak memiliki akses write (izin langsung) ke repositori asli.

Menyalin proyek pihak lain untuk dimodifikasi secara privat atau dijadikan fondasi proyek baru Anda sendiri.

Perbedaan Mendasar: Fork terjadi di server GitHub (menghasilkan repo baru di akun Anda), sedangkan Clone mengunduh repositori ke komputer lokal Anda.

7.Alur Kontribusi Open Source (fork + PR)

Fork: Menyalin repositori target ke akun GitHub Anda untuk mendapatkan kendali penuh atas salinan tersebut.

Clone: Mengunduh salinan dari akun Anda ke komputer lokal agar bisa mulai mengedit kode.

Branch: Membuat branch baru di lokal agar perubahan kode Anda terisolasi dengan rapi.

Commit: Menyimpan perubahan kode yang sudah dibuat ke dalam riwayat Git lokal.

Push: Mengirim branch berisi perubahan tersebut dari komputer lokal ke repositori hasil fork di GitHub Anda.

Pull Request (PR): Mengajukan permintaan kepada pemilik repositori asli agar meninjau dan menggabungkan perubahan Anda ke repositori utama.

8.Pull Request

Definisi: Fitur kolaborasi di GitHub untuk memberitahu orang lain bahwa Anda telah mendorong perubahan dan ingin menggabungkannya ke branch utama.

Peran dalam Tim & Alasan Penggunaan: Tim profesional tidak langsung merge ke main demi menjaga kualitas kode. PR bertindak sebagai gerbang kendali mutu (code review) dan ruang diskusi teknis.

2 Keuntungan Utama:

Memungkinkan anggota tim lain memeriksa dan meninjau kode (Code Review) sebelum digabung.

Mencegah masuknya bug, kesalahan sintaksis, atau error fatal ke lingkungan produksi (main).

9.Analisis Skenario: Andi dan Budi

a. Yang terjadi saat Budi mencoba push: Git akan menolak (reject) perintah push Budi dan memberikan pesan error bahwa remote repository memiliki pembaruan yang belum ada di komputer lokal Budi.

b. Mengapa hal ini bisa terjadi: Karena Andi sudah melakukan push duluan, riwayat kode di GitHub lebih baru daripada yang ada di laptop Budi (Budi belum memperbarui kodenya). Git mencegah tindakan Budi yang berisiko menimpa (overwrite) pekerjaan Andi secara tidak sengaja.

c. Yang seharusnya Budi lakukan sebelumnya: Budi seharusnya melakukan git pull terlebih dahulu sebelum mulai mengedit file style.css.

d. Urutan perintah Budi sejak pagi hari:

git pull origin main (Mengambil update dari Andi)

(Edit file style.css di komputer)

git add style.css

git commit -m "Memperbarui style.css"

git push origin main

10.Studi Kasus-Alur Kerja Lengkap

a. git clone ...: Mengunduh seluruh repositori dari URL GitHub ke komputer lokal, membuat folder proyek, dan menginisialisasi sistem pelacakan Git (.git).

b. Mengapa membuat branch perbaikan-bug: Agar pekerjaan perbaikan terisolasi dengan aman, menjaga branch main tetap bersih dari error, dan memudahkan pengelolaan jika ada revisi.

c. Mengapa git push origin perbaikan-bug: Karena branch tersebut masih baru dan hanya ada di komputer lokal. Perintah ini mendaftarkan sekaligus mengirim branch tersebut ke remote repository di GitHub.

d. Langkah di antarmuka web GitHub: Buka halaman repositori di web, klik tombol Compare & pull request yang muncul otomatis, isi judul serta deskripsi perubahan, lalu klik Create pull request.

e. Jika pemilik repo meminta revisi:

Lakukan perbaikan tambahan pada file terkait di komputer lokal pada branch yang sama (perbaikan-bug).

Jalankan git add . dan git commit -m "Revisi perbaikan bug sesuai masukan".

Jalankan git push origin perbaikan-bug (Perubahan baru ini akan otomatis masuk dan memperbarui PR yang sudah buat sebelumnya di GitHub).

