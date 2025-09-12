# Web Wise AI - Deepfake Detection System

Sistem deteksi deepfake yang menggunakan API Hugging Face untuk menganalisis gambar, video, dan audio yang di-generate oleh AI.

## Fitur

- **Deteksi Gambar**: Menganalisis gambar untuk mendeteksi manipulasi AI dengan akurasi tinggi
- **Deteksi Video**: Menganalisis video untuk mendeteksi deepfake dengan analisis frame-by-frame
- **Deteksi Audio**: Menganalisis audio untuk mendeteksi suara sintetis dan speech synthesis
- **Interface Modern**: UI yang user-friendly dengan drag & drop
- **Hasil Real-time**: Analisis langsung menggunakan API Hugging Face
- **Akurasi Tinggi**: Algoritma scoring yang ditingkatkan untuk deteksi yang lebih akurat

## API Integration

Sistem menggunakan Hugging Face Inference API dengan token yang telah diperbarui:
```
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
```

### Endpoint yang Digunakan

- **Image/Video Detection**: `facebook/detr-resnet-50`
- **Audio Detection**: `facebook/wav2vec2-base`

## Cara Penggunaan

1. Buka file `deepware-api.html` di browser
2. Upload file gambar, video, atau audio
3. Klik "Analyze Content"
4. Tunggu hasil analisis dari API
5. Lihat hasil deteksi deepfake

## Format File yang Didukung

### Gambar
- JPEG, PNG, GIF, WebP

### Video
- MP4, MOV, AVI, WebM

### Audio
- MP3, WAV, M4A, AAC

## Hasil Analisis

Sistem akan memberikan:
- **Authenticity Score**: Skor keaslian konten (0-100%) dengan algoritma scoring yang ditingkatkan
- **Manipulation Risk**: Level risiko manipulasi (Low/Medium/High) berdasarkan multiple indicators
- **Confidence Level**: Level kepercayaan analisis (Low/Medium/High/Very High)
- **Detailed Analysis**: Analisis detail per kategori dengan deteksi artifacts dan patterns
- **Recommendations**: Rekomendasi berdasarkan hasil dengan actionable insights

## Struktur File

```
├── deepware-api.html      # Halaman utama deteksi
├── js/
│   ├── deepware.js        # Logika API integration
│   └── script.js          # Script umum
├── css/
│   ├── deepware.css       # Styling halaman deteksi
│   └── style.css          # Styling umum
└── README.md              # Dokumentasi ini
```

## Teknologi

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: Hugging Face Inference API
- **UI Framework**: Custom CSS dengan Font Awesome icons
- **File Handling**: HTML5 File API

## Keamanan

- File diupload langsung ke API Hugging Face
- Tidak ada penyimpanan file di server lokal
- Token API disimpan di client-side (untuk demo)

## Troubleshooting

### Error "API request failed"
- Periksa koneksi internet
- Pastikan token API masih valid
- Cek format file yang diupload

### File tidak terdeteksi
- Pastikan format file didukung
- Cek ukuran file (max 100MB)
- Refresh halaman dan coba lagi

## Pengembangan

Untuk mengembangkan sistem ini:

1. Clone repository
2. Update token API di `js/deepware.js`
3. Test dengan berbagai format file
4. Deploy ke web server

## Lisensi

Proyek ini dibuat untuk tujuan edukasi dan demonstrasi teknologi AI detection.
