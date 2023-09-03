# (7) Javascript Refreshment

## JavaScript 
-> adalah Bahasa Pemrograman yang High-level, Scripting, Untyped dan interpreted

## Deklarasi Variabel
adalah proses pembuatan variabel untuk menyimpan data.
- Terdapat 3 macam deklarasi variabel yaitu
1. var merupakan pendeklarasian yang jarang di gunakan.
2. let digunakan saat membutuhkan nilai yang dapat diubah.
3. const digunakan saat membutuhkan nilai yang tidak bisa di "reassign".
Pada var bisa digunakan walaupun belum di deklarasikan/inisialisasi. Sedangkan let/const tidak bisa digunakan, harus di deklarasikan terlebih dahulu.

## Tipe Data
1. Tipe Data Primitive
- Integer/Number -> 123, 12.3
- Boolean -> true/false
- String -> "Hello World", "test", "123", "12.3"
- Null -> null
- Undefined -> 

2. Tipe Data Collection
- Object -> { name: "John", age: 34 }
- Array -> [`Hello`, "World"], [1, 2, 3], [{}, {}, {}]

## Function
di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method. Yang mana bisa membuat coding lebih segmented dan bisa dipergunakan kembali.

## Branching
Mengacu pada penggunaan pernyataan kondisional untuk mengatur alur eksekusi program berdasarkan kondisi tertentu. Pernyataan kondisional yang umum digunakan dalam branching adalah "if", "else if", "else", dan "Switch Case". Dengan menggunakan pernyataan tersebut, dapat memeriksa nilai suatu ekspresi atau variabel, dan berdasarkan hasilnya, menjalankan blok kode yang sesuai.

## Looping
1. for loop
Perulangan for digunakan untuk melakukan iterasi sejumlah tertentu (berdasarkan kondisi) melalui sebuah blok kode. Terdiri dari tiga bagian: inisialisasi, kondisi, dan perubahan nilai.
2. while / do while loop
Perulangan while digunakan untuk melakukan iterasi selama kondisi tertentu benar. Blok kode mungkin tidak pernah dieksekusi jika kondisinya tidak pernah benar dari awal. Do-while mirip dengan while, namun pasti akan menjalankan blok kode setidaknya satu kali sebelum memeriksa kondisi.
3. forEach loop
Metode forEach digunakan pada array untuk menjalankan fungsi pada setiap elemen array. Ia membantu dalam melakukan iterasi melalui seluruh elemen array tanpa perlu mengatur indeks.
4. for of loop
Perulangan for-of digunakan untuk mengiterasi melalui nilai-nilai elemen dari objek yang dapat diiterasi seperti array, string, map, dll.
5. for in loop
Perulangan for-in digunakan untuk mengiterasi melalui properti-properti enumerabel dari sebuah objek. Ia cocok untuk objek atau array asalkan diingat bahwa ia akan mengiterasi melalui indeks atau kunci properti.
6. map
Metode map digunakan pada array untuk membuat array baru dengan memetakan setiap elemen melalui suatu fungsi. Ia mengembalikan array baru dengan elemen-elemen hasil pemetaan.