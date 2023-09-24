# (16) Global State Management and Data Fetching

## Redux

Redux merupakan sebuah framework JavaScript yang ditujukan untuk membantu dalam mengelola state dalam aplikasi web. Dengan menggunakan Redux, developer dapat memisahkan state dari komponen-komponen aplikasii, sehingga mempermudah dalam pengelolaan dan pemantauan perubahan-perubahan yang terjadi pada state tersebut.

**Kapan saat yang tepat untuk menggunakan Redux**

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

**Redux Libraries dan Tools**

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

**Komponen Penting di Redux**

1. Actions
   Digunakan untuk memberikan informasi dari aplikasi ke store
2. Reducer
   Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
3. Store
   Objek sentral yang menyimpan state pada aplikasi

**Kelebihan React Redux**
Kelebihan dari Redux adalah memiliki fitur seperti immutability, central store, dan time-travel debugging yang membantu developer dalam mengelola state secara efektif dan efisien. Selain itu, Redux juga memiliki dokumentasi yang lengkap dan komunitas yang aktif yang dapat membantu developer dalam mempelajari dan menggunakan Redux.

**Kekurangan React Redux**
Beberapa kekurangan dari Redux yaitu membutuhkan waktu dan pembelajaran yang lebih untuk memahami dan mengaplikasikannya pada aplikasi web. Selain itu, Redux juga memiliki kode yang lebih panjang dan kompleks dibandingkan dengan state management lainnya.

## Redux Thunk

THunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

**Kenapa perlu Redux Thunk**

- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

## Data Fetching

**Cara - cara untuk fetching data di react**

1. Fetch API
2. Axios
3. React Query Library
