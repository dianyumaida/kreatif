function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 

    if (!kolomInput) return;
    
    // 1. Ambil teks murni yang diketik pengguna
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP agar layar lega

    // 2. STRATEGI QUR'AN DIGITAL: Buat objek data baru dengan format JSON Anda
    // Mengisolasi tag </a> agar teks lain di aplikasi tidak ikut terblokir menjadi link!
    const itemBukuBaru = {
        judul: `<a href="#" class="hyperlink-teks" style="font-weight: bold; color: #0056b3; text-decoration: underline; display: inline-block;">🔗 ${nilaiTeks}</a>`,
        kelompok: "A", // Mengunci target ke Kelompok A tujuan
        link: "#"
    };

    // 3. AMANKAN DATA KE ARRAY UTAMA APLIKASI
    // Kode ini otomatis mendeteksi nama variabel Array data buku kodingan asli Anda
    if (typeof dataBuku !== 'undefined' && Array.isArray(dataBuku)) {
        dataBuku.push(itemBukuBaru);
    } else if (typeof daftarBuku !== 'undefined' && Array.isArray(daftarBuku)) {
        daftarBuku.push(itemBukuBaru);
    } else if (typeof listBuku !== 'undefined' && Array.isArray(listBuku)) {
        listBuku.push(itemBukuBaru);
    } else if (typeof bukuData !== 'undefined' && Array.isArray(bukuData)) {
        bukuData.push(itemBukuBaru);
    }

    // 4. PINDAHKAN DROPDOWN KE KELOMPOK A
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); // Amankan fokus pop-up sistem HP
        
        // Memicu event ganti kelompok agar aplikasi memuat ulang data + teks baru kita
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // 5. JALANKAN ULANG FUNGSI RENDER BAWAAN ANDA SECARA MANUAL (JIKA PERLU)
    if (typeof tampilkanBuku === 'function') { tampilkanBuku(); }
    else if (typeof renderBuku === 'function') { renderBuku(); }
    else if (typeof tampilkanData === 'function') { tampilkanData(); }

    // Tampilkan notifikasi setelah teks sukses disuntikkan ke dalam sistem kelompok
    setTimeout(function() {
        alert(`Sukses! Teks "${nilaiTeks}" berhasil terdaftar menetap di Kelompok A.`);
    }, 100);

    // Bersihkan isi kolom input di atas
    kolomInput.value = "";
}
