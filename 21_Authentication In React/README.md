# (21) Authentication In React

## Authentication

adalah proses mengonfirmasi identitas pengguna menggunakan kredensial yang diberikan. Merupakan hal yang umum untuk memulai dengan memastikan pengguna tersebut sah.

## Authorization

adalah prosedur keamanan yang digunakan untuk menentukan hak atau tingkat akses pengguna-klien. Ini adalah prosedur standar untuk memeriksa apakah pengguna yang diautentikasi memiliki akses atau otorisasi untuk melakukan suatu tugas.

## Model Autentikasi

5 model autentikasi yang sering digunakan:

1. Password-based

- Model autentikasi ini paling banyak digunakan, kita sering temukan pada aplikasi seperti email, social media platform, internal app dll.
  Dimana proses autentikasi dilakukan dengan memasukan username dan password yang sudah tervalidasi di sistem.

2. Certificate-based

- Proses autentikasi dilakukan dengan menggunakan digital certificate.
  Konsep digital certificate mirip dengan konsep Kartu Identitas.
  Dimana yang berhak memiliki akses adalah mereka yang bisa menunjukan kartu identitas atau keanggotaan.

3. Multi-factor

- Proses autentikasi dilakukan lebih dari satu kali, contoh aplikasi yang menerapkan multi-factor ini adalah gmail, setiap kali kita berhasil login dengan menggunakan username & password kita masih harus memverifikasinya menggunakan smartphone baik dalam bentuk SMS OTP atau notifikasi.

4. Token-based

- Proses autentikasi dilakukan dengan menggunakan sebuah token, umumnya berupa kombinasi string yang sudah dienkripsi.
  Sering digunakan di dalam komunikasi client-server atau REST API, dimana setiap request dari client divalidasi dengan menggunakan token yang sudah diberikan server ke client sebelumnya.

5. Biometric-based

- Proses autentikasi menggunakan karakter biologis, seperi pemindai wajah (facial recognition), fingerprint (sidik jari), voice (suara), dan eye scanner (pemindai mata).
