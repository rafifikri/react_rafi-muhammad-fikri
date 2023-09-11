# (11) React Fundamental

## Apa itu komponen?

Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.

## Apa itu props?

1. Singkatan dari properties, membuat kita dapat memberikan argumen / data pada component.
2. Props membantu untuk membuat komponen menjadi lebih dinamis
3. Props dioper ke component sama seperti memberikan atribut pada tag HTML.
4. Props pada component adalah read-only dan tidak dapat diubah.

## React Lifecycle

**Lifecycle method yang umum :**

1. render()

- Fungsi yang paling sering dipakai
- Required pada class component
- Pure function. Tidak boleh ada setState()

2. componentDidMount()

- Dipanggil ketika component sudah di render untuk pertama kali
- Tempat yang tepat untuk pemanggilan API
- Boleh ada setState()

3. componentDidUpdate()

- Dipanggil ketika terjadi update (props atau state berubah)

4. componentWillUnmount()

- Dipanggil ketika component akan dihancurkan
- Cocok untuk clean up actions

**Lifecycle method yang lainnya:**

1. shouldComponentUpdate()
2. static getDerivedStateFromProps()
3. getSnapshotBeforeUpdate()

## Condition and list

**Render Bersyarat**
Pada React, Kita dapat membuat komponen berbeda yong mencakup perilaku yang dibutuhkan. Lalu, Kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi Anda.

- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

**Render List**
Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}.

**Key**
Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

## Struktur Direktori

React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukkan file ke folder.

**Strukturnya antara lain:**

- Pengelompokan berdasarkan fitur atau rute
- Pengelompokan berdasarkan jenis file
- Hindari terlalu banyak nesting dan jangan terlalu memikirkanya
