# (12) Event Handling

## State

State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

1. Data yang bisa dimodifikasi menggunakan setState
2. Setiap terjadi modifikasi akan terjadi render ulang
3. Bersifat Asynchronous
4. Dipakai dalam class

## Stateful dan Stateless Component

- Stateful component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.
- Stateless Component adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.
  **Perbedaan dari komponen stateful dan komponen stateless:**

1. Stateles component :

- Tidak tahu tentang aplikasi
- Tidak melakukan data fetching (pengambilan data)
- Tujuan utamanya adalah visualisasi
- Dapat digunakan kembali
- Hanya berkomunikasi dengan induk langsung

2. Stateful component:

- Mengerti tentang aplikasi
- melakukan data fetching (pengambilan data)
- Berinteraksi dengan aplikasi
- Tidak dapat digunakan kembali
- Meneruskan status dan data ke anak - anaknya

## Handling Event

- Handling Event adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen.
- Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol di tekan.
  **Contoh list event:**

1. Clipboard Events (Promise terpenuhi)
2. Form Events (onchange, onSubmit)
3. Mouse Events: (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onload)
