// GANTI SELURUH KODE FUNGSI INI DI FILE APP.JS ANDA

function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    if (!kolomInput) return;

    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu!");
        return;
    }

    // 1. Matikan fokus input agar keyboard HP otomatis menutup
    kolomInput.blur();

    // 2. Ubah menu dropdown kategori otomatis ke Kelompok A (Sesuai baris 124 HTML Anda)
    const dropdownKelompok = document.getElementById('menuDropdown');
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        
        // Tutup pop-up kotak hitam pilihan bawaan HP agar tidak mengganggu
        dropdownKelompok.blur();

        // Picu event 'change' agar data kelompok A asli dimuat terlebih dahulu oleh aplikasi Anda
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // 3. SEGERA SELIPKAN TEKS BARU ANDA SEBAGAI ANAK KELOMPOK A (`id="listCucu"`)
    // Kita beri jeda sangat singkat (200 milidetik) agar daftar asli selesai digambar dulu oleh sistem,
    // kemudian teks baru Anda akan diselipkan di bagian paling bawah kelompok tersebut.
    setTimeout(function() {
        const wadahListCucu = document.getElementById('listCucu'); // Target baris 139 di HTML Anda
        const areaBoxCucu = document.getElementById('areaCucuCucu'); // Target pembungkus utama di baris 137

        if (wadahListCucu) {
            // Pastikan kotak pembungkus "Data Cucu Terkait" terlihat di layar HP
            if (areaBoxCucu) {
                areaBoxCucu.style.display = "block";
            }

            // Buat elemen daftar <li> baru
            const elemenDaftarBaru = document.createElement('li');
            elemenDaftarBaru.style.margin = "8px 0";
            
            // Masukkan teks Anda dibungkus tag tautan <a> dengan class CSS Anda (baris 49)
            elemenDaftarBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px;">🔗 ${nilaiTeks}</a>`;
            
            // Tempelkan teks baru tersebut ke dalam daftar Kelompok A
            wadahListCucu.appendChild(elemenDaftarBaru);
        }
    }, 200);

    // 4. Bersihkan kembali kolom ketik teks setelah sukses
    kolomInput.value = "";
}
