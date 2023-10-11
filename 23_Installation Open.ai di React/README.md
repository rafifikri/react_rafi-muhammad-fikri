# (23) Installation Open.ai di React

## Kenapa Belajar Open A.I.?

- Gratis (trial)
- Mudah di pasang
- Dipakai banyak user
- Jumlah parameter: 175 miliar (model davinci 03)

## Cara pemasangan open A.I. di react

1. Membuat react project
2. Install openAI package
3. Import module yang diperlukan -> useState, Configuration, dan OpenATApi dari package react dan openai.
4. Deklarasi objek -> Selanjutnya, deklarasikan objek Configuration dan OpenAIApi dengan menggunakan API key yang diberikan oleh OpenAI.
5. Deklarasi state
6. Deklarasi handleClick -> Pada fungsi ini, akan membuat request ke OpenAl API dengan menggunakan method createCompletion
7. Rendering komponen -> rendering komponen textarea, button, dan pre untuk menampilkan input dari user, tombol generate, dan hasil generate dari OpenAl API.

## Cara mendapatkan API keys

1. Buka situs web OpenAI di [API Reference - OpenAl API](https://platform.openai.com/docs/api-reference) menggunakan browser web Anda.
2. Account OpenAI.com -> Untuk mendapatkan api keys, kita harus memiliki account OpenAl.com. Tombol ada di kanan atas (website openai.com versi 2023)

3. Pada halaman tersebut, cari bagian introduction dan masuk ke API keys atau masuk ke hamalan beriktu [OpenAl API key](https://platform.openai.com/account/api-keys)
4. Setelah masuk ke halaman seperti di bawah pilih API keys dan Create new secret key.
5. Ikuti petunjuk untuk mengkonfigurasi kunci API sesuai dengan kebutuhan.
6. Masukkan API Keys kalian ke dalam project React yang telah dibuat.
