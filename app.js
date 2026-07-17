function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const wadahListCucu = document.getElementById('listCucu'); 
    const areaBoxCucu = document.getElementById('areaCucuCucu'); 
    const dropdownKelompok = document.getElementById('menuDropdown'); 

    if (!kolomInput) return;
    
    // Mengambil teks murni yang diketik tanpa spasi berlebih di awal/akhir
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP

    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); 
    }

    if (wadahListCucu) {
        if (areaBoxCucu) {
            areaBoxCucu.style.display = "block";
        }

        // 1. Buat elemen list item baru
        const barisBaru = document.createElement('li');
        barisBaru.style.margin = "10px 0";
        barisBaru.style.listStyleType = "none"; 
        
        // 2. KUNCI UTAMA: Tag <a> harus ditutup dengan ketat (</a>) 
        // agar teks lain di luar daftar tidak ikut-ikutan menjadi hyperlink!
        barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline; display: inline-block;">🔗 ${nilaiTeks}</a>`;
        
        // 3. Tempelkan teks baru yang bersih ke dalam Kelompok A
        wadahListCucu.appendChild(barisBaru);
        
        alert(`Sukses! Teks "${nilaiTeks}" berhasil masuk ke dalam Kelompok A.`);
    } else {
        alert("Eror: Tempat tujuan id='listCucu' tidak ditemukan.");
    }

    // Bersihkan kolom input teks agar kosong kembali
    kolomInput.value = "";
}
