function buatHyperlinkLangsung() {
    // 1. Ambil elemen input dan tempat hasil
    const kolomInput = document.getElementById('inputTeksBuku');
    const wadahHasil = document.getElementById('teksLinkHasil');

    // Validasi jika elemen tidak ditemukan di HTML
    if (!kolomInput || !wadahHasil) {
        alert("Eror: Elemen inputTeksBuku atau teksLinkHasil tidak ditemukan di HTML!");
        return;
    }

    const nilaiTeks = kolomInput.value.trim();

    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    // 2. Tutup keyboard HP secara otomatis agar tidak menghalangi layar
    kolomInput.blur();

    // 3. Munculkan teks hasil di dalam wadah dan pasang fungsi klik langsung ke kelompok A
    wadahHasil.innerHTML = `<span class="hyperlink-teks" onclick="pilihKelompokA()" style="cursor:pointer; display:inline-block; padding: 5px 0;">${nilaiTeks}</span>`;
    
    // Informasi bahwa teks berhasil dibuat di bawah tombol
    alert("Teks Hyperlink berhasil dibuat! Silakan klik teks hasil di bawah tombol untuk memilih Kelompok A.");
}

// Fungsi untuk memaksa dropdown berpindah ke Kelompok A
function pilihKelompokA() {
    const dropdownKelompok = document.getElementById('menuDropdown');

    if (dropdownKelompok) {
        // Coba pilih berdasarkan nilai "A" atau cari teks yang mengandung "Kelompok A"
        dropdownKelompok.value = "A"; 

        // Jika value="A" gagal karena data dari JSON berbeda, kita paksa pilih index ke-1 (opsi kedua)
        if (dropdownKelompok.selectedIndex <= 0) {
            for (let i = 0; i < dropdownKelompok.options.length; i++) {
                if (dropdownKelompok.options[i].text.includes("Kelompok A")) {
                    dropdownKelompok.selectedIndex = i;
                    break;
                }
            }
        }

        // Pemicu event agar tampilan di HP langsung berubah dan sinkron
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);

        alert("Sukses! Menu kategori otomatis berpindah ke Kelompok A.");
    } else {
        alert("Eror: Elemen dropdown id='menuDropdown' tidak ditemukan.");
    }
}
