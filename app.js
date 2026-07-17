// Fungsi ini otomatis berjalan saat tombol di baris 112 diklik
function buatHyperlinkLangsung() {
    // 1. Ambil elemen input teks (baris 109)
    const inputElemen = document.getElementById('inputTeksBuku');
    
    // 2. Ambil elemen wadah tempat menampilkan hasil (baris 119)
    const teksLinkHasil = document.getElementById('teksLinkHasil');

    // 3. Ambil teks yang diketik pengguna di dalam kolom
    const teksInput = inputElemen.value.trim();

    // Validasi: Jika kolom teks kosong, beri peringatan
    if (teksInput === "") {
        alert("Ketik kata atau kalimat di kolom terlebih dahulu!");
        return;
    }

    // 4. Masukkan teks ke wadah hasil dan bungkus dengan class CSS Anda 
    // Menggunakan class 'hyperlink-teks' yang sudah Anda buat di CSS (baris 49)
    teksLinkHasil.innerHTML = `<span class="hyperlink-teks" onclick="aksiKlikBuku('${teksInput}')">${teksInput}</span>`;
}

// Fungsi tambahan untuk menguji apakah teks hasil benar-benar bisa diklik
function aksiKlikBuku(kata) {
    alert(`Sukses! Anda berhasil mengklik teks interaktif: "${kata}"`);
}
