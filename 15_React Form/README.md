# (15) React Form

## Penergapan Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.
Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.
Dalam react akan ada banyak hal kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan belajar Basic Form.

## Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.
Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

## Uncontrolled Component

Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.
Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

## Basic Validation

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :

- Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- Melindungi akun pengguna. Misalnya, membuat pengguna
  untuk memasukkan data password yang aman
- Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

**\*Tipe Validasi Data Formulir**

- Client-side validation
  Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.
- Server-side validation
  Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

**Menggunakan Javascript**
Bisa kapan saja melakukan validasi?

- Ketika ada perubahan di form. Ketika ada perubahan, akan
  mentrigger event onChange. Kkup real-time berdasarkan
  perubahan data, namun fungsi akaelebihannya validasi akan
  cun terus dipanggil selama ada perubahan. Bisa
  dikombinasikan dengan disable button.
- Ketika menekan tombol submit. Ketika menekan tombol submit,
  akan mentrigger event onSubmit. Kelebihannya validasi cukup
  sekali, namun tidak akan real-time memvalidasi form.
