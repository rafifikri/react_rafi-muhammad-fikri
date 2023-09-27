# (17) React Testting

## Apa itu testing?

adalah proses mmeverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

**Manfaat Testing**
Walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut:

- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

**Kategori Testing**
Secara umum, cara mengetes di React terbagi menjadi dua
kategori:

1. Rendering component trees di dalam environment tes yang
   sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus
   pada bagian ini.
2. Menjalankan aplikasi lengkap di dalam environment peramban
   (browser) asli. Ini dikenal sebagai tes “end-to-end”.

**Rekomendasi Tools**

- Jest
  Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.

**React Testing Library**
Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara “dangkal” pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.

## Rendering Komponen

**Render dan Debug**
Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.
React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

**Kategri Testing**
Contoh lain yang bisa digunakan.

- LabelText: getByLabelText: < label for="search" />
- PlaceholderText: getByPlaceholderText: < input placeholder="Search" />
- AltText: getByAltText: < img alt="profile" />
- DisplayValue: getByDisplayValue: < input value="JavaScript" />
