function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 
    const wadahListCucu = document.getElementById('listCucu'); 
    const areaBoxCucu = document.getElementById('areaCucuCucu'); 

    if (!kolomInput) return;
    
    // 1. Ambil teks murni dari kotak input
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di dalam kotak!");
        return;
    }

    // 2. Tutup keyboard HP
    kolomInput.blur(); 

    // 3. Pindahkan nilai dropdown ke Kelompok A secara visual saja
    // Kita sengaja TIDAK memicu event 'change' agar sistem buku.json tidak berjalan menghapus teks Anda
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); 
    }

    // 4. Masukkan teks langsung ke kelompok tujuan secara terisolasi
    if (wadahListCucu) {
        // Pastikan kotak area kelompok tujuan dalam posisi terbuka dan terlihat
        if (areaBoxCucu) {
            areaBoxCucu.style.display = "block";
        }

        // Buat elemen baris daftar (li) baru
        const barisBaru = document.createElement('li');
        barisBaru.style.margin = "10px 0";
        barisBaru.style.padding = "5px 0";
        barisBaru.style.listStyleType = "none"; // Hilangkan titik hitam bawaan daftar

        // KUNCI UTAMA: Menggunakan struktur HTML yang terkunci rapat
        // Tag <a> dibuka dan langsung ditutup </a> di baris yang sama.
        // display: inline-block memastikan area klik hanya sepanjang teks itu saja, teks lain TIDAK AKAN TERPENGARUH!
        barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline; display: inline-block; padding: 2px 5px;">🔗 ${nilaiTeks}</a>`;
        
        // Tempelkan teks baru tersebut ke baris daftar paling bawah kelompok tujuan
        wadahListCucu.appendChild(barisBaru);
        
        // Tampilkan notifikasi setelah teks sukses terpasang secara fisik di layar
        setTimeout(function() {
            alert(`Sukses! Teks "${nilaiTeks}" telah masuk ke Kelompok A tanpa memengaruhi teks lain.`);
        }, 100);
    } else {
        alert("Gagal: Komponen id='listCucu' tidak ditemukan di halaman HTML Anda.");
    }

    // 5. Bersihkan kembali isi kotak input di atas agar kosong
    kolomInput.value = "";
}
