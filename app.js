// GANTI KODE DI APP.JS ANDA DENGAN INI

function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 

    if (!kolomInput) return;
    
    // 1. Ambil kata murni yang diketik
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP

    // 2. Geser menu dropdown otomatis ke Kelompok A
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); 
        
        // Pemicu event ganti kelompok agar aplikasi memuat data asli buku.json
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // 3. JEDA 400 MILIDETIK (Menunggu aplikasi selesai membersihkan layar & merender ulang JSON)
    // Setelah daftar asli Kelompok A selesai digambar, barulah teks baru disisipkan secara paksa di baris paling bawah.
    setTimeout(function() {
        const wadahListCucu = document.getElementById('listCucu'); 
        const areaBoxCucu = document.getElementById('areaCucuCucu'); 

        if (wadahListCucu) {
            // Pastikan kotak area kelompok tujuan dalam posisi terbuka
            if (areaBoxCucu) {
                areaBoxCucu.style.display = "block";
            }

            // Buat elemen baris <li> baru yang terisolasi secara penuh
            const barisBaru = document.createElement('li');
            barisBaru.style.margin = "8px 0";
            barisBaru.style.padding = "4px 0";
            
            // Masukkan teks murni dibungkus tag <a> dan </a> yang tertutup rapat,
            // memastikan teks lain di bawahnya tidak akan ikut terblokir menjadi link!
            barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline; display: inline-block;">🔗 ${nilaiTeks}</a>`;
            
            // Tempelkan teks baru tersebut ke baris daftar paling bawah kelompok tujuan
            wadahListCucu.appendChild(barisBaru);
            
            alert(`Sukses! Teks "${nilaiTeks}" berhasil masuk ke dalam daftar Kelompok A.`);
        } else {
            alert("Gagal: Komponen id='listCucu' tidak ditemukan saat teks akan disisipkan.");
        }
    }, 400);

    // 4. Bersihkan kembali isi kolom input di atas
    kolomInput.value = "";
}
