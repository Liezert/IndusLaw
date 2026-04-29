# 📄 Product Requirements Document (PRD)
## IndusLaw — MVP v1.0

---

> [!IMPORTANT]
> **Document Status:** ✅ Fully Finalized v1.3 — All Decisions Locked, Ready for Development
> **Last Updated:** April 29, 2026
> **Approach:** Vibe-Coding MVP
> **Language:** Bilingual (EN + ID context)
> **AI Engine:** Google Gemini API ✅
> **Backend:** Node.js + Express (Custom) ✅
> **History Feature:** Included in MVP ✅
> **Monetization:** Free Only ✅
> **Platform:** Web Only (Mobile-Responsive) ✅

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Target Users & Personas](#4-target-users--personas)
5. [Core Features — MVP Scope](#5-core-features--mvp-scope)
6. [User Flow](#6-user-flow)
7. [Feature Specifications](#7-feature-specifications)
8. [AI System Logic](#8-ai-system-logic)
9. [UI/UX Requirements](#9-uiux-requirements)
10. [Technical Architecture](#10-technical-architecture)
11. [Post-MVP / Backlog Features](#11-post-mvp--backlog-features)
12. [Assumptions & Constraints](#12-assumptions--constraints)
13. [Open Questions](#13-open-questions)

---

## 1. Executive Summary

**IndusLaw** adalah platform berbasis AI yang dirancang untuk meningkatkan *transparansi dunia perusahaan* di Indonesia. Aplikasi ini memberdayakan pengguna biasa — yang tidak memiliki latar belakang hukum — untuk memverifikasi legalitas perusahaan, mendeteksi link phishing/palsu, dan mengidentifikasi email mencurigakan hanya dalam beberapa klik.

| Atribut | Detail |
|---|---|
| **Product Name** | IndusLaw |
| **Version** | MVP 1.0 |
| **Platform** | Web Application Only (Mobile-Responsive) ✅ |
| **Primary Language** | Bahasa Indonesia |
| **AI Integration** | Google Gemini API ✅ |
| **Monetization** | Free Only ✅ |
| **Target Market** | Indonesia |
| **Estimated MVP Timeline** | 6–8 Weeks |

---

## 2. Problem Statement

### 2.1 Background

Pengguna di Indonesia sering mengalami kesulitan dalam:

- Memahami aspek **hukum perusahaan** secara mandiri
- Membedakan **informasi digital yang asli dan palsu**
- Memverifikasi **legalitas suatu perusahaan**
- Mengidentifikasi **email phishing** atau link berbahaya

### 2.2 Core Problems

| # | Problem | Impact |
|---|---|---|
| P1 | Tidak ada cara mudah untuk mengecek legalitas perusahaan berdasarkan hukum Indonesia (UU yang berlaku) | Tinggi — risiko penipuan bisnis |
| P2 | Masyarakat tidak bisa membedakan link asli dan phishing | Tinggi — risiko kebocoran data & finansial |
| P3 | Email spoofing dan phishing merajalela tanpa alat verifikasi yang mudah diakses | Tinggi — korban penipuan digital meningkat |
| P4 | Kurangnya literasi hukum perusahaan di kalangan pengusaha UMKM | Sedang — ketidakpatuhan regulasi tanpa disadari |

### 2.3 Why Now?

- Pertumbuhan **UMKM digital** di Indonesia terus meningkat pasca pandemi
- Kasus **penipuan online** di Indonesia meningkat setiap tahun (BSSN Report)
- Adopsi AI untuk kebutuhan sehari-hari semakin tinggi di kalangan masyarakat urban Indonesia

---

## 3. Goals & Success Metrics

### 3.1 Product Goals

| Goal | Description |
|---|---|
| **G1 — Aksesibilitas Hukum** | Membuat informasi hukum perusahaan mudah dipahami oleh masyarakat umum |
| **G2 — Deteksi Penipuan** | Memberikan alat deteksi link dan email palsu yang akurat dan cepat |
| **G3 — Transparansi Digital** | Meningkatkan kepercayaan masyarakat terhadap ekosistem digital perusahaan di Indonesia |

### 3.2 Success Metrics (KPIs)

| Metric | Target (3 Months Post-Launch) |
|---|---|
| **Monthly Active Users (MAU)** | ≥ 1,000 pengguna |
| **Total Checks Performed** | ≥ 5,000 pengecekan/bulan |
| **User Retention (Week 2)** | ≥ 30% |
| **Task Completion Rate** | ≥ 85% per fitur utama |
| **Average Session Duration** | ≥ 3 menit |
| **User Satisfaction (CSAT)** | ≥ 4.0 / 5.0 |
| **Bounce Rate** | ≤ 50% |

---

## 4. Target Users & Personas

### Persona 1 — Andi, Pengusaha UMKM

| | |
|---|---|
| **Usia** | 32 tahun |
| **Pekerjaan** | Pemilik usaha kuliner kecil |
| **Lokasi** | Surabaya |
| **Tech Savviness** | Sedang |
| **Goals** | Memahami persyaratan legal mendirikan PT untuk usahanya |
| **Pain Points** | Biaya konsultan hukum mahal, tidak tahu harus mulai dari mana |
| **Quote** | *"Saya mau daftarin usaha jadi PT tapi bingung syaratnya apa aja."* |

---

### Persona 2 — Siti, Karyawan Swasta

| | |
|---|---|
| **Usia** | 26 tahun |
| **Pekerjaan** | Staff administrasi di perusahaan startup |
| **Lokasi** | Jakarta |
| **Tech Savviness** | Tinggi |
| **Goals** | Memverifikasi apakah email dari "HR perusahaan baru" itu asli atau phishing |
| **Pain Points** | Tidak yakin dengan link dan email yang diterima dari pihak yang mengaku perusahaan resmi |
| **Quote** | *"Ada email masuk ngaku dari BCA, tapi domainnya aneh. Palsu gak ya?"* |

---

### Persona 3 — Budi, Mahasiswa Hukum

| | |
|---|---|
| **Usia** | 21 tahun |
| **Pekerjaan** | Mahasiswa |
| **Lokasi** | Bandung |
| **Tech Savviness** | Tinggi |
| **Goals** | Riset cepat mengenai regulasi pendirian perusahaan untuk tugas kuliah |
| **Pain Points** | Referensi hukum tersebar, tidak ada ringkasan yang mudah dipahami |
| **Quote** | *"Susah nyari rangkuman UU perusahaan yang simpel buat bahan presentasi."* |

---

## 5. Core Features — MVP Scope

### 5.1 ✅ MUST HAVE (MVP)

| # | Feature | Description |
|---|---|---|
| F1 | **Autentikasi Pengguna** | Register & Login dengan email dan password; sesi dikelola via JWT |
| F2 | **Dashboard Utama** | Halaman utama dengan 3 pilihan fitur utama + shortcut ke History |
| F3 | **Cek Perusahaan** | Gemini AI menganalisis jenis/nama perusahaan dan memberikan checklist hukum berdasarkan UU Indonesia |
| F4 | **Cek Link** | Gemini AI menganalisis URL dan menentukan apakah link tersebut aman, mencurigakan, atau palsu |
| F5 | **Cek Email** | Gemini AI menganalisis alamat email dan menentukan keasliannya, serta memberikan email resmi alternatif jika palsu |
| F6 | **Halaman Hasil Analisis** | Menampilkan status (Aman / Mencurigakan / Palsu), penjelasan, dan rekomendasi tindakan |
| F7 | **Navigasi Kembali** | User dapat kembali ke dashboard dan melakukan pengecekan baru |
| F8 | **Riwayat Pengecekan (History)** ✅ | User dapat melihat semua pengecekan yang pernah dilakukan, lengkap dengan filter tipe dan tanggal |

### 5.2 ❌ POSTPONED (Post-MVP)

| # | Feature | Alasan Ditunda |
|---|---|---|
| PF1 | Login dengan Google / Social Auth | Kompleksitas OAuth; cukup dengan email/password untuk MVP |
| PF2 | Laporan PDF yang bisa diunduh | Scope terlalu besar untuk validasi awal |
| PF3 | Notifikasi / Alert Real-time | Infrastruktur tambahan diperlukan |
| PF4 | API publik untuk developer | Butuh dokumentasi dan keamanan ekstra |
| PF5 | Multi-bahasa (Inggris) | Fokus dulu ke pasar Indonesia |
| PF6 | Dashboard Admin / Moderasi | Bukan kebutuhan pengguna akhir |
| PF7 | Integrasi database AHU (Kemenkumham) | Memerlukan akses API pemerintah resmi |

---

## 6. User Flow

### 6.1 High-Level Flow

```
[Landing Page]
      │
      ▼
[Login / Register]
      │
      ├──(Belum punya akun)──► [Register Page] ──► [Login Page]
      │
      ▼
[Dashboard — Halaman Utama]
      │
      ├──► [Cek Perusahaan] ──► [Input Form] ──► [Gemini AI Proses] ──► [Hasil Analisis]
      │                                                                        │
      ├──► [Cek Link]       ──► [Input Form] ──► [Gemini AI Proses] ──► [Hasil Analisis]
      │                                                                        │
      ├──► [Cek Email]      ──► [Input Form] ──► [Gemini AI Proses] ──► [Hasil Analisis]
      │                                                              [Tersimpan ke History ✅]
      │                                                                        │
      └──► [History ✅]     ──► [Daftar Riwayat] ──► [Filter/Sort] ──► [Detail Hasil]
                                                                              │
                                                                              ▼
                                                                    [Kembali ke Dashboard]
```

### 6.2 Detailed Flow — Cek Perusahaan

```
User memilih "Cek Perusahaan"
      │
      ▼
Input: jenis usaha (misal: "usaha kuliner", "startup teknologi")
      │
      ▼
AI memproses input
      │
      ▼
Output:
  ✅ Checklist persyaratan legal (UU PT, CV, UD, dll.)
  📋 Penjelasan singkat tiap persyaratan
  💡 Rekomendasi langkah selanjutnya
```

### 6.3 Detailed Flow — Cek Link

```
User memilih "Cek Link"
      │
      ▼
Input: URL / link yang ingin dicek
      │
      ▼
AI memproses & menganalisis link
      │
      ├── (Link Aman) ──► Status: ✅ AMAN
      │                   + Deskripsi: "Link ini mengarah ke [nama situs resmi]..."
      │
      ├── (Mencurigakan) ► Status: ⚠️ MENCURIGAKAN
      │                   + Penjelasan mengapa mencurigakan
      │                   + Rekomendasi: Jangan klik / laporkan
      │
      └── (Palsu/Phishing) ► Status: ❌ PALSU / PHISHING
                            + Penjelasan mengapa palsu
                            + Link asli yang seharusnya (jika diketahui)
                            + Rekomendasi keamanan
```

### 6.4 Detailed Flow — Cek Email

```
User memilih "Cek Email"
      │
      ▼
Input: alamat email yang ingin dicek
      │
      ▼
AI memproses & menganalisis email
      │
      ├── (Email Asli) ──► Status: ✅ VALID
      │                   + Penjelasan: "Email ini terdaftar sebagai domain resmi [nama perusahaan]"
      │
      └── (Email Palsu) ─► Status: ❌ PALSU / SPOOFING
                           + Penjelasan mengapa palsu
                           + Email resmi yang seharusnya (jika ada)
                           + Rekomendasi: Jangan balas / laporkan ke pihak terkait
```

---

## 7. Feature Specifications

### F1 — Autentikasi Pengguna

**Register**
- Input: Nama lengkap, Email, Password, Konfirmasi Password
- Validasi: Format email valid, password minimal 8 karakter
- Setelah sukses: Auto-redirect ke halaman Dashboard
- Error handling: Email sudah terdaftar, password tidak cocok

**Login**
- Input: Email, Password
- Validasi: Kredensial cocok dengan database
- Setelah sukses: Redirect ke Dashboard
- Error handling: Email/password salah, akun tidak ditemukan

**Logout**
- Sesi dihapus, redirect ke Landing Page

---

### F3 — Cek Perusahaan (AI Company Checker)

| Atribut | Detail |
|---|---|
| **Input** | Jenis usaha / nama bisnis (teks bebas) |
| **Contoh Input** | "usaha warung makan", "startup fintech", "toko online fashion" |
| **AI Output** | Checklist hukum berdasarkan UU yang berlaku di Indonesia |
| **UU Referensi** | UU No. 40 Tahun 2007 (PT), UU No. 20 Tahun 2008 (UMKM), UU Cipta Kerja 2020 |
| **Format Output** | Checklist interaktif + penjelasan tiap poin + rekomendasi |
| **Status Label** | Tidak berlaku (fitur ini bersifat informatif/edukatif) |

**Output Checklist Contoh (Usaha Kuliner → PT):**
- [ ] NIB (Nomor Induk Berusaha) via OSS
- [ ] Izin PIRT (jika produksi rumahan)
- [ ] BPOM (jika produksi skala menengah-besar)
- [ ] Sertifikat Halal (opsional, tapi sangat direkomendasikan)
- [ ] Akta Pendirian PT di hadapan Notaris
- [ ] Pendaftaran ke Kemenkumham

---

### F4 — Cek Link (AI Link Analyzer)

| Atribut | Detail |
|---|---|
| **Input** | URL / link (teks) |
| **Contoh Input** | `http://bca-promo-hadiah.xyz/claim`, `https://tokopedia.com` |
| **AI Analysis** | Analisis domain, subdomain, TLD, pola phishing umum |
| **Output** | Status + Penjelasan + Deskripsi tujuan link + Rekomendasi |
| **Status Label** | ✅ AMAN / ⚠️ MENCURIGAKAN / ❌ PALSU |

**Indikator Phishing yang Dicek AI:**
- Domain menyerupai brand terkenal (typosquatting)
- TLD tidak lazim (`.xyz`, `.tk`, `.gq`, dll.)
- Penggunaan HTTP alih-alih HTTPS
- URL terlalu panjang atau berisi karakter aneh
- Adanya kata kunci manipulatif (`promo`, `hadiah`, `klaim`, dll.)

---

### F5 — Cek Email (AI Email Validator)

| Atribut | Detail |
|---|---|
| **Input** | Alamat email (teks) |
| **Contoh Input** | `cs@bca-online.com`, `hrd@tokopedia.com` |
| **AI Analysis** | Verifikasi domain email, pola spoofing, domain resmi perusahaan |
| **Output** | Status + Penjelasan + Email resmi yang seharusnya (jika diketahui) |
| **Status Label** | ✅ VALID / ❌ PALSU / SPOOFING |

**Indikator Email Palsu yang Dicek AI:**
- Domain tidak cocok dengan perusahaan yang diklaim
- Penggunaan domain gratis (`gmail.com`, `yahoo.com`) untuk mengaku sebagai korporasi
- Typosquatting pada nama domain (misal: `bca-online.com` bukan `bca.co.id`)
- Pola email yang tidak wajar

---

### F6 — Halaman Hasil Analisis

Setiap hasil analisis wajib menampilkan:

| Elemen | Keterangan |
|---|---|
| **Status Badge** | Visual jelas: ✅ Aman / ⚠️ Mencurigakan / ❌ Palsu |
| **Penjelasan** | Narasi singkat dalam Bahasa Indonesia yang mudah dipahami |
| **Detail Teknis** | Alasan spesifik (opsional, collapsible) |
| **Rekomendasi** | Langkah konkret yang bisa diambil user |
| **Sumber Hukum** ✅ | Tautan langsung ke dokumen PDF regulasi resmi di peraturan.bpk.go.id |
| **Tombol Cek Lagi** | CTA untuk kembali ke halaman input fitur yang sama |
| **Tombol Dashboard** | Kembali ke halaman utama |

---

## 8. AI System Logic

### 8.1 Prompt Engineering Strategy

Setiap fitur akan menggunakan **System Prompt** yang disiapkan oleh developer, dan **User Prompt** dari input pengguna.

**System Prompt Template — Cek Perusahaan:**
```
Kamu adalah asisten hukum perusahaan Indonesia yang ahli dalam regulasi 
perundang-undangan resmi Indonesia, termasuk:
- UU No. 40 Tahun 2007 tentang Perseroan Terbatas
- UU No. 20 Tahun 2008 tentang UMKM
- UU Cipta Kerja 2020
- Perpres No. 19 Tahun 2024 tentang Percepatan Pengembangan Industri Gim Nasional
- PP No. 184 Tahun 1961 tentang Pendirian Perusahaan Negara Industri Makanan dan Minuman
- Dan peraturan terkait lainnya dari database JDIH BPK (peraturan.bpk.go.id)

Berikan checklist persyaratan legal yang relevan berdasarkan jenis usaha yang 
disebutkan user. Untuk setiap poin checklist, sertakan referensi regulasi 
yang mendasarinya. Gunakan Bahasa Indonesia yang mudah dipahami masyarakat umum.
Format output: JSON dengan checklist, penjelasan singkat tiap poin, dan referensi hukum.
```

**System Prompt Template — Cek Link:**
```
Kamu adalah pakar keamanan siber yang menganalisis URL untuk mendeteksi 
phishing, link palsu, dan ancaman digital. Analisis URL yang diberikan dan 
tentukan apakah aman, mencurigakan, atau palsu. Berikan alasan teknis yang 
mudah dipahami dalam Bahasa Indonesia dan rekomendasikan tindakan yang tepat.
```

**System Prompt Template — Cek Email:**
```
Kamu adalah ahli verifikasi email dan keamanan digital. Analisis alamat email 
yang diberikan untuk menentukan apakah email tersebut asli atau merupakan 
email phishing/spoofing. Jika palsu, berikan email resmi perusahaan yang 
seharusnya jika kamu mengetahuinya. Gunakan Bahasa Indonesia yang mudah dipahami.
```

### 8.2 Output Format Contract

AI harus selalu mengembalikan response dalam format JSON yang terstruktur:

```json
{
  "status": "AMAN | MENCURIGAKAN | PALSU | VALID",
  "summary": "Penjelasan singkat dalam 1-2 kalimat",
  "details": [
    "Alasan 1",
    "Alasan 2"
  ],
  "recommendation": "Langkah yang disarankan untuk user",
  "official_alternative": "Email/link resmi (opsional, khusus F4 & F5)",
  "checklist": [] // Khusus F3 — Cek Perusahaan
}
```

### 8.3 Legal Reference Documents (Sumber Hukum Resmi)

> [!NOTE]
> Semua analisis AI untuk fitur **Cek Perusahaan** didasarkan pada dan dapat diverifikasi melalui dokumen PDF resmi dari **database JDIH BPK** (Jaringan Dokumentasi dan Informasi Hukum — Badan Pemeriksa Keuangan Republik Indonesia).

Berikut adalah regulasi referensi yang digunakan sebagai grounding AI dan dapat diakses langsung oleh user untuk memverifikasi hasil analisis:

| # | Regulasi | Topik | Link Detail | Download PDF |
|---|---|---|---|---|
| R1 | **Perpres No. 19 Tahun 2024** | Percepatan Pengembangan Industri Gim Nasional | [Detail](https://peraturan.bpk.go.id/Details/277601/perpres-no-19-tahun-2024) | [📄 Download PDF](https://peraturan.bpk.go.id/Download/336212/Salinan%20Perpres%20Nomor%2019%20Tahun%202024.pdf) |
| R2 | **PP No. 184 Tahun 1961** | Pendirian Perusahaan Negara Industri Makanan dan Minuman | [Detail](https://peraturan.bpk.go.id/Details/75406/pp-no-184-tahun-1961) | [📄 Download PDF](https://peraturan.bpk.go.id/Download/65937/pp%20no%20184%20tahun%201961.pdf) |

**Regulasi Inti Tambahan (built-in ke knowledge AI):**

| # | Regulasi | Topik |
|---|---|---|
| R3 | **UU No. 40 Tahun 2007** | Perseroan Terbatas (PT) |
| R4 | **UU No. 20 Tahun 2008** | Usaha Mikro, Kecil, dan Menengah (UMKM) |
| R5 | **UU Cipta Kerja 2020** | Kemudahan Berusaha & Perizinan Online (OSS) |
| R6 | **UU PDP No. 27 Tahun 2022** | Perlindungan Data Pribadi |

**Implementasi di Frontend:**
- Setiap hasil analisis **Cek Perusahaan** menampilkan tombol **"Lihat Sumber Hukum"** yang membuka link PDF regulasi terkait di tab baru
- Link bersumber langsung dari `peraturan.bpk.go.id` (domain resmi pemerintah RI)
- Disclaimer: *"Hasil ini dapat diverifikasi melalui dokumen resmi di atas"*

---

## 9. UI/UX Requirements

### 9.1 Design Principles

| Prinsip | Deskripsi |
|---|---|
| **Simplicity First** | Tampilan bersih, tidak membingungkan user awam |
| **Trust & Authority** | Warna dan desain yang memancarkan kepercayaan (navy, putih, aksen hijau/merah) |
| **Mobile-Responsive** | Harus berfungsi penuh di perangkat mobile (mayoritas user Indonesia) |
| **Bahasa Sederhana** | Hasil analisis disajikan dalam bahasa yang mudah dipahami |
| **Fast Feedback** | Loading state jelas, response AI < 10 detik |

### 9.2 Page List

| Page | Route | Keterangan |
|---|---|---|
| Landing Page | `/` | Pengenalan produk + CTA Login/Register |
| Register | `/register` | Form pendaftaran akun |
| Login | `/login` | Form masuk akun |
| Dashboard | `/dashboard` | 3 pilihan fitur utama |
| Cek Perusahaan | `/dashboard/company` | Input + submit form |
| Cek Link | `/dashboard/link` | Input + submit form |
| Cek Email | `/dashboard/email` | Input + submit form |
| Hasil Analisis | `/dashboard/result` | Tampilan hasil AI |
| 404 | `/404` | Halaman tidak ditemukan |

### 9.3 Component List (Minimal)

- `Navbar` — Logo + tombol Logout
- `FeatureCard` — Card untuk 3 fitur di Dashboard
- `InputForm` — Form input dengan validasi
- `StatusBadge` — Visual status (Aman/Mencurigakan/Palsu)
- `ResultCard` — Menampilkan hasil analisis
- `ChecklistItem` — Item checklist interaktif (F3)
- `LoadingSpinner` — Feedback saat AI memproses
- `Button` — Primary, Secondary, Danger variants
- `AuthForm` — Form Login/Register

---

## 10. Technical Architecture

### 10.1 Tech Stack Recommendation

| Layer | Teknologi | Alasan |
|---|---|---|
| **Frontend** | React.js + Vite | Cepat, ekosistem besar, cocok untuk vibe-coding |
| **Styling** | Vanilla CSS / CSS Modules | Fleksibel, ringan, tanpa dependency tambahan |
| **Backend** | Node.js + Express (Custom) ✅ | Full control atas routing, middleware, dan business logic |
| **Database** | PostgreSQL + Prisma ORM | Relational DB ideal untuk user data & history |
| **Authentication** | JWT (JSON Web Token) + bcrypt | Stateless auth cocok untuk Express custom; password di-hash dengan bcrypt |
| **AI Engine** | Google Gemini API ✅ (`gemini-1.5-flash`) | Speed optimal, cost-efficient, gratis untuk volume rendah |
| **Hosting** | Vercel (Frontend) + Railway (Backend + DB) | Free tier cukup untuk MVP |
| **Monetization** | Free Only ✅ | Tidak ada tier berbayar pada MVP |

### 10.2 API Endpoints (Backend)

| Method | Endpoint | Fungsi |
|---|---|---|
| `POST` | `/api/auth/register` | Registrasi user baru, return JWT |
| `POST` | `/api/auth/login` | Login user, return JWT |
| `POST` | `/api/auth/logout` | Invalidate token / clear session |
| `GET` | `/api/auth/me` | Get current authenticated user dari JWT |
| `POST` | `/api/check/company` | Analisis perusahaan via Gemini AI + simpan ke history |
| `POST` | `/api/check/link` | Analisis link via Gemini AI + simpan ke history |
| `POST` | `/api/check/email` | Analisis email via Gemini AI + simpan ke history |
| `GET` | `/api/history` | Ambil semua riwayat pengecekan milik user ✅ |
| `GET` | `/api/history/:id` | Ambil detail satu item riwayat ✅ |
| `DELETE` | `/api/history/:id` | Hapus satu item riwayat ✅ |

### 10.3 Data Model

**Prisma Schema (PostgreSQL)**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String         @id @default(uuid())
  fullName  String
  email     String         @unique
  password  String         // bcrypt hashed
  createdAt DateTime       @default(now())
  history   CheckHistory[]
}

model CheckHistory {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  type      String   // 'company' | 'link' | 'email'
  input     String
  status    String   // 'AMAN' | 'MENCURIGAKAN' | 'PALSU' | 'VALID'
  result    Json     // Full Gemini AI response
  createdAt DateTime @default(now())
}
```

**JWT Payload Structure**
```json
{
  "userId": "uuid",
  "email": "user@example.com",
  "iat": 1234567890,
  "exp": 1234654290
}
```

---

## 11. Post-MVP / Backlog Features

| Priority | Feature | Description |
|---|---|---|
| ✅ In MVP | ~~History / Riwayat Pengecekan~~ | Sudah dimasukkan ke MVP |
| 🔴 High | **Google / Social Login** | Mudahkan akses dengan OAuth (post-MVP) |
| 🔴 High | **Bulk Delete History** | Hapus semua / sebagian besar history sekaligus |
| 🟡 Medium | **Export PDF Report** | Download hasil analisis sebagai PDF |
| 🟡 Medium | **Integrasi AHU Kemenkumham** | Cek legalitas perusahaan ke database resmi pemerintah |
| 🟡 Medium | **Notifikasi Email** | Kirim hasil analisis ke email user |
| 🟡 Medium | **Search & Filter History** | Cari riwayat berdasarkan keyword atau rentang tanggal |
| 🟢 Low | **Multi-bahasa (Inggris)** | Tambah dukungan Bahasa Inggris |
| 🟢 Low | **Dark Mode** | Preferensi tampilan gelap |
| 🟢 Low | **Public API** | API terbuka untuk developer pihak ketiga |
| 🟢 Low | **Admin Dashboard** | Moderasi dan monitoring penggunaan platform |

---

## 12. Assumptions & Constraints

### 12.1 Key Assumptions

| # | Assumption |
|---|---|
| A1 | Pengguna memiliki koneksi internet yang stabil |
| A2 | Google Gemini API mampu memberikan respons akurat dalam konteks hukum Indonesia ✅ |
| A3 | Pengguna bersedia melakukan registrasi dengan email dan password |
| A4 | MVP tidak memerlukan integrasi dengan database pemerintah (AHU, BSSN, dll.) |
| A5 | Analisis AI bersifat *advisory* (saran), bukan pengganti konsultasi hukum profesional |
| A6 | Semua fitur tersedia gratis tanpa batasan penggunaan pada MVP (Free Only) ✅ |

### 12.2 Technical Constraints

| # | Constraint |
|---|---|
| C1 | AI API memiliki rate limit dan biaya — perlu dibatasi per user/session untuk MVP |
| C2 | Akurasi AI bergantung pada training data; tidak 100% sempurna untuk kasus edge |
| C3 | Tidak ada akses langsung ke database resmi pemerintah (AHU, OJK, BPOM) |
| C4 | Waktu respons AI bisa bervariasi (2–10 detik) |
| C5 | Platform adalah **Web Only** — tidak ada native mobile app (iOS/Android) pada MVP ✅ |
| C6 | Web app harus **mobile-responsive** agar dapat diakses via browser mobile dengan nyaman |

### 12.3 Legal & Ethical Constraints

> [!WARNING]
> IndusLaw memberikan informasi bersifat **edukatif dan advisory** saja. Hasil analisis AI **bukan merupakan pendapat hukum resmi** dan tidak menggantikan konsultasi dengan notaris, advokat, atau instansi pemerintah yang berwenang.

- Tampilkan **disclaimer** jelas di setiap halaman hasil analisis
- Tidak menyimpan data sensitif pengguna tanpa persetujuan
- Patuhi regulasi **UU PDP (Perlindungan Data Pribadi) No. 27 Tahun 2022**

---

## 13. Open Questions

| # | Question | Owner | Status |
|---|---|---|---|
| OQ1 | AI model mana yang akan digunakan? | Tech Lead | ✅ **Google Gemini API** (`gemini-1.5-flash`) |
| OQ2 | Apakah MVP perlu fitur History atau bisa ditunda? | Product | ✅ **Masuk MVP** |
| OQ3 | Apa batas maksimal karakter input per fitur? | Tech Lead | ❓ Open — *Rekomendasi: 500 karakter* |
| OQ4 | Apakah akan ada free tier dan paid tier? | Founder | ✅ **Free Only** |
| OQ5 | Apakah analisis AI perlu di-review oleh legal expert sebelum live? | Legal | ✅ **Resolved** — User dapat memverifikasi mandiri via PDF resmi JDIH BPK (`peraturan.bpk.go.id`) |
| OQ6 | Platform awal: Web only, atau butuh mobile app juga? | Product | ✅ **Web Only** (mobile-responsive) |

---

> [!NOTE]
> **Disclaimer:** Seluruh analisis yang diberikan oleh IndusLaw bersifat informatif dan edukatif. Hasil analisis AI tidak menggantikan konsultasi hukum profesional dengan notaris, advokat, atau instansi pemerintah yang berwenang.

---

## 14. Development Readiness Checklist

> [!TIP]
> Semua keputusan produk sudah terkunci. PRD ini siap digunakan sebagai acuan pengembangan.

| # | Item | Status |
|---|---|---|
| D1 | AI Engine dipilih (Gemini API) | ✅ |
| D2 | Backend stack dipilih (Express + PostgreSQL + Prisma + JWT) | ✅ |
| D3 | Frontend stack dipilih (React + Vite) | ✅ |
| D4 | Fitur History masuk MVP | ✅ |
| D5 | Monetisasi: Free Only | ✅ |
| D6 | Platform: Web Only (mobile-responsive) | ✅ |
| D7 | Sumber hukum resmi (JDIH BPK) terdokumentasi | ✅ |
| D8 | Semua Open Questions resolved | ✅ |
| D9 | API Endpoints terdefinisi | ✅ |
| D10 | Data model (Prisma schema) terdefinisi | ✅ |

**Next Steps yang Direkomendasikan:**
1. 🎨 **Design** — Buat wireframe / mockup UI untuk setiap halaman
2. 🏗️ **Setup Project** — Inisiasi repo React + Vite (frontend) dan Express (backend)
3. 🔐 **Auth Module** — Implementasi Register, Login, JWT middleware
4. 🤖 **AI Integration** — Koneksikan Gemini API untuk 3 fitur utama
5. 🗃️ **Database** — Setup PostgreSQL + Prisma, jalankan migrasi
6. 📜 **History Feature** — Implementasi setelah core AI feature selesai
7. 🧪 **Testing** — UAT dengan 3 persona target
8. 🚀 **Deploy** — Vercel (Frontend) + Railway (Backend + DB)

---

*Document prepared for IndusLaw MVP — April 2026*
*Vibe-coding approach: Build fast, validate early, iterate often.*
*PRD Version: 1.3 — Fully Finalized ✅*
