# (13) React Hook

Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

## Hooks pada react

- **Hooks Dasar:**

1. useState
2. useEffect
3. useContext

- **Hooks Tambahan:**

1. useReducer
2. useCallback
3. useMemo
4. useRef
5. uselmperativeHandle
6. useLayoutEffect
7. useDebugValue

## Aturan pada hooks

1. Hanya dipanggil hook di tingkat atas
2. Hanya panggil hooks dari fungsi - fungsi react

## useEffect

adalah salah satu dari beberapa hooks yang disediakan oleh React untuk menangani side effects dalam komponen fungsional. Side effects adalah tindakan yang terjadi di luar siklus utama rendering komponen dan sering digunakan untuk melakukan tugas seperti data fetching dari server, berlangganan (subscription) ke sumber eksternal, atau berinteraksi dengan DOM.

## useState

adalah salah satu dari beberapa hooks yang disediakan oleh React untuk mengelola state dalam komponen fungsional. Saat Anda menggunakan useState, Anda mendapatkan dua nilai kembali: nilai dari state yang Anda tentukan dan fungsi untuk mengubah nilai state tersebut.

## Create Custom Hooks

Membuat hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.
