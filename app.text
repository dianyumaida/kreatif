function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 

    if (!kolomInput) return;
    
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di dalam kotak!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP

    // 1. SIMPAN TEKS KE MEMORI LOKAL HP (LocalStorage)
    // Trik ini menjaga agar teks tidak hilang saat layar dihapus oleh sistem json Anda
    localStorage.setItem('teksHyperlinkBuku Baru', nilaiTeks);

    // 2. PINDAHKAN DROPDOWN KE KELOMPOK A
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); 
        
        // Picu event ganti kelompok agar aplikasi memuat data asli Kelompok A
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // 3. AMBIL KEMBALI DATA DARI MEMORI HP DAN PAKSA SUNTIK KE KELOMPOK A
    // Beri jeda 400 milidetik agar proses muat ulang data json asli selesai terlebih dahulu
    setTimeout(function() {
        const wadahListCucu = document.getElementById('listCucu'); 
        const areaBoxCucu = document.getElementById('areaCucuCucu'); 
        const teksTersimpan = localStorage.getItem('teksHyperlinkBuku Baru');

        if (wadahListCucu && teksTersimpan) {
            if (areaBoxCucu) {
                areaBoxCucu.style.display = "block";
            }

            // Buat elemen baris daftar baru yang terisolasi ketat
            const barisBaru = document.createElement('li');
            barisBaru.style.margin = "8px 0";
            barisBaru.style.padding = "4px 0";
            barisBaru.style.listStyleType = "none";
            
            // Mengunci tautan <a> dengan rapat agar teks lain di luar daftar tidak ikut terblokir
            barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline; display: inline-block;">🔗 ${teksTersimpan}</a>`;
            
            // Tempelkan teks baru secara fisik ke bagian paling bawah Kelompok A
            wadahListCucu.appendChild(barisBaru);
            
            alert(`Sukses! Teks "${teksTersimpan}" berhasil dikunci ke dalam Kelompok A.`);
            
            // Hapus memori sementara setelah teks berhasil muncul di layar
            localStorage.removeItem('teksHyperlinkBuku Baru');
        }
    }, 400);

    // Bersihkan kembali isi kotak input di atas
    kolomInput.value = "";
}
