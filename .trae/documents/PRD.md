## 1. Ikhtisar Produk
VibeCoding Personal Dashboard adalah aplikasi web satu atap yang dirancang untuk membantu pengguna mengelola produktivitas harian mereka. Aplikasi ini menggabungkan manajemen tugas, kalender, catatan, pelacakan keuangan, dan pelacakan kebiasaan dalam satu antarmuka yang modern dan responsif.
- Memecahkan masalah fragmentasi aplikasi produktivitas dengan menyatukan berbagai alat dalam satu dashboard.
- Target pengguna: Mahasiswa, profesional muda, dan siapa saja yang ingin mengatur hidup mereka dengan lebih baik.

## 2. Fitur Utama

### 2.1 Peran Pengguna
| Peran | Metode Pendaftaran | Izin Inti |
|-------|-------------------|-----------|
| Pengguna Normal | Pendaftaran Email | Mengakses semua fitur dashboard personal |

### 2.2 Modul Fitur
1. **Dashboard Utama**: Ringkasan hari ini, widget cuaca, berita, dan statistik cepat.
2. **Manajemen Tugas**: Membuat, mengedit, menghapus, dan memprioritaskan tugas (To-Do).
3. **Kalender & Acara**: Visualisasi jadwal bulanan dan manajemen acara.
4. **Catatan & Memo**: Penyimpanan ide cepat dengan dukungan tag.
5. **Pelacak Keuangan**: Mencatat pendapatan dan pengeluaran serta pemantauan anggaran.
6. **Pelacak Kebiasaan**: Melacak konsistensi kebiasaan harian dengan visualisasi kemajuan.
7. **Autentikasi**: Login dan registrasi pengguna yang aman.

### 2.3 Detail Halaman
| Nama Halaman | Nama Modul | Deskripsi Fitur |
|--------------|------------|-----------------|
| Dashboard | Ringkasan | Menampilkan salam waktu, statistik cepat, cuaca, dan berita utama. |
| Tugas | List/Kanban | Kelola tugas dengan prioritas, tenggat waktu, dan status penyelesaian. |
| Kalender | Kalender Bulanan | Lihat dan kelola acara berdasarkan tanggal. |
| Catatan | Grid Catatan | Buat dan cari catatan dengan kategori tag. |
| Keuangan | Budget Tracker | Input transaksi dan lihat diagram pengeluaran vs anggaran. |
| Kebiasaan | Habit Tracker | Checklist harian untuk kebiasaan dan grafik garis kemajuan. |

## 3. Proses Inti
Alur utama pengguna dimulai dari pendaftaran atau login, setelah itu pengguna diarahkan ke dashboard utama untuk melihat ringkasan hari mereka. Pengguna kemudian dapat menavigasi ke berbagai modul (Tugas, Kalender, dll.) melalui sidebar untuk mengelola data spesifik mereka. Semua data disimpan secara real-time.

```mermaid
graph TD
    "A[Mulai]" --> "B{Sudah Login?}"
    "B" -- "Tidak" --> "C[Halaman Login/Register]"
    "C" --> "D[Autentikasi]"
    "D" --> "E[Dashboard Utama]"
    "B" -- "Ya" --> "E"
    "E" --> "F[Navigasi Sidebar]"
    "F" --> "G[Kelola Tugas/Kalender/Catatan/Keuangan/Kebiasaan]"
```

## 4. Desain Antarmuka Pengguna
### 4.1 Gaya Desain
- **Warna Utama**: Deep Purple (#6D28D9), Sky Blue (#0EA5E9)
- **Warna Aksen**: Pink (#EC4899)
- **Gaya Tombol**: Membulat (Rounded-lg) dengan efek hover halus.
- **Font**: Inter (Utama), sans-serif.
- **Gaya Tata Letak**: Berbasis kartu (card-based) dengan efek Glassmorphism (semi-transparan + blur).
- **Ikon**: Lucide React.

### 4.2 Ikhtisar Desain Halaman
| Nama Halaman | Nama Modul | Elemen UI |
|--------------|------------|-----------|
| Dashboard | Hero Section | Kartu salam, Widget cuaca dinamis, Grid statistik cepat. |
| Sidebar | Navigasi | Menu vertikal yang dapat diciutkan dengan ikon Lucide. |

### 4.3 Responsivitas
- Pendekatan desktop-first dengan adaptasi mobile menggunakan grid sistem Tailwind CSS.
- Navigasi hamburger untuk tampilan mobile.
- Optimalisasi sentuh untuk elemen interaktif di tablet dan smartphone.
