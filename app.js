function buatHyperlinkLangsung() {
    // 1. Ambil elemen kolom input tempat Anda mengetik
    const kolomInput = document.getElementById('inputTeksBuku');
    
    // 2. Ambil elemen wadah tempat memunculkan teks hasil (baris 119 di HTML)
    const wadahHasil = document.getElementById('teksLinkHasil');

    // 3. Ambil isi teks yang diketik pengguna
    const nilaiTeks = kolomInput.value.trim();

    // Validasi jika kolom kosong
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    // 4. Masukkan teks ke wadah hasil. 
    // Saat teks ini diklik, ia akan menjalankan fungsi 'pilihKelompokA()'
    wadahHasil.innerHTML = `<span class="hyperlink-teks" onclick="pilihKelompokA()" style="cursor:pointer;">${nilaiTeks}</span>`;
}

// Fungsi yang otomatis berjalan saat teks hyperlink hasil klik diklik oleh pengguna
function pilihKelompokA() {
    // Ambil elemen dropdown kelompok (baris 126 pada HTML Anda)
    const dropdownKelompok = document.getElementById('menuDropdown');

    if (dropdownKelompok) {
        // Mengubah pilihan dropdown secara otomatis ke nilai "A"
        dropdownKelompok.value = "A";
        
        // Memicu event 'change' secara manual agar JavaScript lain (jika ada) 
        // tahu bahwa pilihan dropdown sudah berubah ke kelompok A
        const event = new Event('change');
        dropdownKelompok.dispatchEvent(event);
        
        alert("Berhasil! Kelompok otomatis berpindah ke opsi A.");
    } else {
        alert("Elemen dropdown tidak ditemukan. Periksa kembali id='menuDropdown' pada HTML Anda.");
    }
}
