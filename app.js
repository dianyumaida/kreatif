function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const wadahListCucu = document.getElementById('listCucu'); // ID dari baris 139 HTML Anda
    const areaBoxCucu = document.getElementById('areaCucuCucu'); // ID dari baris 137 HTML Anda

    // 1. Validasi jika kolom ketik masih kosong
    if (!kolomInput) return;
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu!");
        return;
    }

    // 2. Tutup keyboard HP agar tidak menghalangi pandangan mata
    kolomInput.blur();

    // 3. Paksa menu dropdown pilihan otomatis bergeser ke Kelompok A
    const dropdownKelompok = document.getElementById('menuDropdown');
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); // Tutup kotak pop-up hitam bawaan sistem HP
    }

    // 4. METODE APLIKASI QUR'AN: Langsung gambar teks ke layar tanpa mematikan sistem
    if (wadahListCucu) {
        // Buka kotak pembungkus list data jika awalnya tersembunyi
        if (areaBoxCucu) {
            areaBoxCucu.style.display = "block";
        }

        // Buat elemen daftar baru (li)
        const barisBaru = document.createElement('li');
        barisBaru.style.margin = "10px 0";
        barisBaru.style.listStyleType = "none"; // Menghilangkan dot hitam bawaan list
        
        // Masukkan teks Anda dengan gaya tautan biru bergaris bawah sesuai kelas CSS Anda
        barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline;">🔗 ${nilaiTeks}</a>`;
        
        // Tempelkan langsung ke dalam barisan Kelompok A
        wadahListCucu.appendChild(barisBaru);
        
        alert(`Sukses! Teks "${nilaiTeks}" berhasil masuk ke dalam Kelompok A.`);
    } else {
        alert("Eror: Tempat tujuan id='listCucu' tidak ditemukan di HTML Anda.");
    }

    // 5. Bersihkan kembali kolom ketik di atas
    kolomInput.value = "";
}
