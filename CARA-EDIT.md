# Cara edit teks website FixedLab (tanpa coding)

Website otomatis ter-update ±1–2 menit setelah perubahan disimpan ke branch `main`.

## Edit lewat browser (HP atau laptop)

1. Buka file yang mau diedit di GitHub:
   - Halaman utama → `index.html`
   - Halaman FAQ → `faq.html`
2. Klik ikon **pensil (Edit this file)** di kanan atas.
3. Cari teksnya (Ctrl+F / Cmd+F). Ganti **hanya teks di antara tag**, contoh:
   `<p>Message us or fill in the quote form.</p>` → ganti bagian `Message us …` saja.
4. Klik **Commit changes…** → pilih *Commit directly to the main branch* → **Commit changes**.
5. Tunggu 1–2 menit, lalu refresh website.

## Yang sering diedit

| Apa | File | Cari teks |
|---|---|---|
| Nomor SMS | `index.html` dan `faq.html` | `61422092458` dan `0422 092 458` |
| Email | `index.html` dan `faq.html` | `hello@fixedlab.com.au` |
| Nama & keterangan layanan | `index.html` | contoh: `Mac Repair` |
| Langkah "How it works" | `index.html` | `Tell us the problem` |
| Pertanyaan FAQ | `faq.html` | `<summary>` = pertanyaan, `<p>` di bawahnya = jawaban |
| Link Instagram | `index.html` dan `faq.html` | `instagram.com/fixedlab` |

## Tambah pertanyaan FAQ

Di `faq.html`, copy satu blok ini lalu paste di bawah blok terakhir dan ganti teksnya:

```html
<details>
  <summary>Pertanyaan di sini?<svg class="ico" aria-hidden="true"><use href="assets/img/icons.svg#i-plus"/></svg></summary>
  <p>Jawaban di sini.</p>
</details>
```

Jangan hapus tanda `<` `>` atau tanda kutip — kalau ada yang rusak, tampilan bisa berantakan.
Kalau salah, semua versi lama tersimpan di tab **History** dan bisa dikembalikan.
