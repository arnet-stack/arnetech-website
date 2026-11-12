# PRD — ARNETECH (Amaray Networking Technology)

## Problem Statement (Original)
Pengguna meminta landing page bisnis untuk **Amaray Networking Technology** (ARNETECH), penyedia jasa konsultasi, instalasi, dan maintenance jaringan untuk pelanggan umum di Serui, Papua. Tombol utama: Home, Daftar WiFi, Jasa Kami, Hubungi Kami, Kebijakan dan Privasi. Logo terlampir (tidak ditemukan di sistem → dibuat logo SVG original) dengan tema warna mengikuti logo (gradasi merah, kuning, oranye, hitam), kontras tapi tidak cerah. Tombol Daftar WiFi → https://wiku.app/register/223897802?memberType=ppoe. Tombol Jasa Kami → halaman baru berisi uraian jasa + ajakan konsultasi + tombol contact → WhatsApp 081343285565. Tombol Hubungi Kami → scroll ke footer (Contact Us: WhatsApp 081343285565, email amaraynetworking@gmail.com, alamat Jl. Diponegoro, Pasir Hitam, Tarau, Yapen Selatan, Kepulauan Yapen, Serui, Papua 98625). Tombol Kebijakan dan Privasi → halaman baru (data pelanggan hanya untuk layanan internet & pengingat tagihan WiFi via WhatsApp, dilanjutkan & diperluas). Tata letak rapi untuk PC & mobile, font elegan bernuansa networking, branding domain arnetech.net.

## Jawaban Pengguna (ask_human)
- Domain ditampilkan: **arnetech.net**
- Warna logo: gradasi merah, kuning, oranye, hitam
- Section tambahan: "Kenapa Pilih Kami"
- Format Kebijakan & Privasi: kombinasi poin + penutup formal

## Arsitektur
- Frontend: React 19 (CRA) + Tailwind + framer-motion + lenis smooth scroll, routing react-router-dom.
- Halaman: `/` (Home), `/jasa` (Jasa Kami), `/kebijakan-privasi` (Kebijakan & Privasi).
- Komponen: Navbar (glass sticky + menu mobile), KineticHero (reveal per baris + parallax + tilt 3D logo), Marquee, Reveal, Footer (#kontak).
- Logo: SVG original (node sinyal WiFi, gradient #EF4444→#F97316→#EAB308) + favicon.svg.
- Backend FastAPI template tidak diubah (landing page statis, tidak butuh API).
- Hosting preview: REACT_APP_BACKEND_URL origin; branding domain ditampilkan sebagai teks arnetech.net (pembiayaan domain oleh pemilik di luar app).

## Persona
- Calon pelanggan rumahan di Serui/Yapen: ingin daftar WiFi cepat via tautan pendaftaran.
- Pemilik usaha lokal: ingin konsultasi & instalasi jaringan, menghubungi via WhatsApp.
- Pelanggan existing: cek kebijakan privasi & kontak tagihan.

## Kebutuhan Inti (Core Requirements)
1. Nav 5 tombol: Home, Daftar WiFi (eksternal wiku.app), Jasa Kami, Hubungi Kami (scroll ke footer), Kebijakan & Privasi.
2. Tema gelap kontras dengan aksen gradasi merah-oranye-kuning; tidak cerah.
3. Halaman Jasa: 3 uraian jasa + ajakan konsultasi + tombol WhatsApp.
4. Footer Contact Us lengkap (WA, email, alamat).
5. Halaman Kebijakan & Privasi: pernyataan inti + poin + penutup formal.
6. Responsif PC & mobile, tipografi elegan (Unbounded / Manrope / JetBrains Mono).

## Status Implementasi (2026-11-11)
- [x] Halaman Home: hero kinetik (reveal baris per baris), parallax latar, panel logo tilt 3D, marquee editorial, Kenapa Pilih Kami (4 kartu), preview 3 jasa, CTA band, footer kontak.
- [x] Halaman /jasa: 3 layanan detail bergambar + blok konsultasi + tombol WhatsApp (prefilled message).
- [x] Halaman /kebijakan-privasi: pernyataan inti, 5 poin bernomor, penutup formal + kontak.
- [x] Navbar responsif (glass, menu mobile animated) + Footer Contact Us.
- [x] Logo asli pelanggan (terpasang transparan di navbar, hero, footer + favicon); fonts Unbounded/Manrope/JetBrains Mono; lenis smooth scroll; motion framer-motion; data-testid menyeluruh.
- [x] Verifikasi: kompilasi sukses, /api 200, screenshot desktop 1440 & mobile 390 semua halaman, tanpa overflow-x.

## Revisi Terbaru (2026-11-11)
- Seluruh sebutan lokasi (Serui, Yapen Selatan, Kepulauan Yapen) dihapus dari hero, kartu, halaman jasa, halaman privasi, judul & meta HTML — alamat hanya tampil di footer bagian kontak.
- Deskripsi footer diganti sesuai kata-kata pemilik: "Melayani jasa konsultasi, instalasi dan maintenance jaringan internet untuk seluruh pelanggan yang ingin menggunakan jasa ARNETECH."
- Fitur baru: tombol WhatsApp melayang (semua halaman) dan peta Google Maps alamat di footer. Galeri hasil kerja dibuat lalu DIHAPUS kembali atas permintaan pemilik (2026-11-11).

## Backlog / Prioritas
- P0: —
- P1: Integrasi Google Maps embed pada alamat footer; galeri proyek pemasangan (foto asli tim).
- P2: Halaman paket/harga WiFi; form konsultasi online (butuh backend); multi-bahasa (Inggris) bila diperlukan.

## Next Tasks
1. Tambahkan foto asli tim/proyek untuk menggantikan foto stok.
2. Daftarkan DNS arnetech.net/arnetech.id dan arahkan ke deployment.
3. Tambah tombol mengambang WhatsApp (sticky) di mobile.
