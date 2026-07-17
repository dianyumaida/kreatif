function buatHyperlinkLangsung() {
    // 1. Ambil kolom tempat mengetik
    const kolomInput = document.getElementById('inputTeksBuku');
    
    // 2. Ambil wadah untuk menampilkan teks hasil (baris 119 di HTML Anda)
    const wadahHasil = document.getElementById('teksLinkHasil');

    // 3. Ambil nilai teks yang diketik
    const nilaiTeks = kolomInput.value.trim();

    // Validasi jika kolom kosong
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    // 4. Munculkan teks dengan class CSS hyperlink-teks yang sudah Anda buat
    wadahHasil.innerHTML = `<span class="hyperlink-teks" onclick="klikTeksBuku('${nilaiTeks}')">${nilaiTeks}</span>`;
}

// Fungsi deteksi saat hasil hyperlink teks kuning diklik
function klikTeksBuku(kata) {
    alert("Sukses! Anda mengklik teks interaktif: " + kata);
}
