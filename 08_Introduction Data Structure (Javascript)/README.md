# (8) Introduction Data Structure (Javascript)

## Deskripsi Data Structure
- Data adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll.)
- Data Structure adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer
- Data dapat dikelola dengan berbagai cara

## Array
1. Reading
- Melihat nilai apa yang terkandung pada indeks tertentu di dalam array
- Operasi yang efisien
- Jenis operasi tercepat karena hanya
membutuhkan 1 steps
- Setiap cell pada memori memiliki alamat spesifik yang diwakili dengan angka
- Angka yang dimiliki lebih besar dari cell sebelumnya
- Ketika membaca sebuah value pada indeks tertentu memori komputer dapat langsung melompat ke indeks tersebut

2. Searching
- Mencari apakah nilai tertentu ada didalam array atau tidak
- Ketika melakukan operasi searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu
- Komputer tidak bisa tahu begitu saja nilai apa yang terkandung pada setiap memori
- Perlu memeriksa setiap cell satu per satu
- Kurang efisien jika dibandingkan dengan Reading

3. Insertion
- Efisiensi tergantung dimana kita memasukan value nya
- Memasukan value pada akhir dari array hanya membutuhkan 1 steps
- Memasukan value baru di awal atau tengah array perlu menggeser data yang sudah ada pada array.

4. Deletion
- Operasi menghilangkan value pada indeks tertentu
- Membutuhkan jumlah N steps untuk array yang mengandung N data
- Skenario terburuk nya yaitu menghilangkan value pada awal sebuah array
- Jika array mengandung 6 data, 1 step digunakan untuk deletion sendiri lalu 5 steps untuk menggeser data nya
- Begitupun untuk array yang mengandung 50 data, 1 step digunakan untuk deletion sendiri lalu 49 steps untuk menggeser data nya

## Set
- Data structure sama seperti array, tetapi perbedaan nya hanya pada set yang tidak mengizinkan duplikat value dimasukan kedalam nya
- ari keempat operasi reading, searching, insertion, dan deletion terdapat perbedaan efisiensi pada operasi insertion. Sedangkan untuk operasi lainnya sama seperti array

1. Operasi pada Set
Reading: dapat menggunakan forEach
Searching: searching pada set dapat menggunakan has method
Deletion : dapat menggunakan method delete()

2. Insertion pada Set
- Perlu steps tambahan untuk memastikan bahwa value yang ingin dimasukan tidak ada di dalam set
- Maka operasi searching akan dijalankan terlebih dahulu untuk melihat value nya (operasi searching bisa mencapai N steps)