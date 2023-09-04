# (9) Clean Code

## Apa itu Clean Code?

Clean Code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer.
“Working code isn't necessary good code. Your code also need to be easy to read, understand, and modify” ~Brandon Gregory
“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” ~Martin Flowler

## Karakteristik Clean Code

1. Mudah dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good Function
8. Gunakan konvensi

### Saran Formatting :

- Lebar baris code 80 - 120 karakter.
- Satu class 300 - 500 baris.
- Baris code yang berhubungan saling berdekatan.
- Dekatkan fungsi dengan pemanggilnya.
- Deklarasi variabel berdekatan dengan penggunanya.
- Perhatikan indentasi.
- Menggunakan preitier atau formatter.

## Prinsip Clean Code

1. KISS(Keep It So Simple)
   -> Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
   Tips :

- Fungsi atau class harus kecil.
- Fungsi dibuat untuk melakukan satu tugas saja.
- Jangan gunakan terlalu banyak argumen pada fungsi.
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlah minimal.

2. DRY(Don't Repeat Yourself)
   -> Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

3. Refactioring
   -> proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
   Teknik Refactoring :

- Membuat sebuah abstraksi.
- Memecah kode dengan fungsi/class.
- Perbaiki penamaan dan lokasi kode.
- Deteksi kode yang memiliki duplikasi.
