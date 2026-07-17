function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 

    if (!kolomInput) return;
    
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    // 1. Tutup keyboard HP agar tidak menghalangi layar
    kolomInput.blur(); 

    // 2. Ubah kategori ke Kelompok A dan picu pemuatan data asli buku.json
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); // Amankan fokus pop-up HP
        
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // 3. SELESAIKAN PROSES PENYUNTIKAN TEKS TERLEBIH DAHULU
    // Kita beri jeda 500 milidetik agar aplikasi Anda selesai memuat data dari buku.json
    setTimeout(function() {
        const wadahListCucu = document.getElementById('listCucu'); 
        const areaBoxCucu = document.getElementById('areaCucuCucu'); 

        if (wadahListCucu) {
            if (areaBoxCucu) {
                areaBoxCucu.style.display = "block";
            }

            // Buat baris baru yang terisolasi dengan tag penutup </a> yang rapat
            const barisBaru = document.createElement('li');
            barisBaru.style.margin = "8px 0";
            barisBaru.style.padding = "4px 0";
            barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline; display: inline-block;">🔗 ${nilaiTeks}</a>`;
            
            // Tempelkan teks baru ke daftar Kelompok A paling bawah
            wadahListCucu.appendChild(barisBaru);
            
            // 4. NOTIFIKASI DILETAKKAN DI SINI (Muncul setelah teks benar-benar terpasang di layar)
            setTimeout(function() {
                alert(`Sukses! Teks "${nilaiTeks}" sudah menetap di dalam daftar Kelompok A.`);
            }, 50);

        } else {
            alert("Gagal: Komponen id='listCucu' tidak ditemukan di halaman.");
        }
    }, 500);

    // Bersihkan kolom input teks agar kosong kembali
    kolomInput.value = "";
}
