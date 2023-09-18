# (14) React Routing

## Apa itu Router?

Routs merupakan modul Dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single page application)

## Multi Page Application

Multi Page Application (MPA) juga disebut dengan (tradisional web app) adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.

## Single Page Application

Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

## Parameter URL

Parameter URL adalah suatu parameter yang nilainya di tetapkan secara dinamis di URL halaman.

## Hook routing react

1. useHistory
   useHistory memberi kita akses ke instrance riwayat yang dapat anda gunakan untuk bernavigasi.
   contoh:

- length
- go
- goBack
- goForward
- push

2. useParams
   useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari < Route> saat ini.

3. useRouteMatch
   useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti < Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar - benar merender < Route>
