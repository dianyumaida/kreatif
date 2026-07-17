function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const wadahHasil = document.getElementById('teksLinkHasil');

    if (!kolomInput || !wadahHasil) {
        alert("Eror: Elemen inputTeksBuku atau teksLinkHasil tidak ditemukan!");
        return;
    }

    const nilaiTeks = kolomInput.value.trim();

    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    // 1. Matikan fokus input agar keyboard HP otomatis menutup
    kolomInput.blur();

    // 2. TULIS TEKS HYPERLINK-NYA TERLEBIH DAHULU KE LAYAR
    // Menggunakan class 'hyperlink-teks' sesuai dengan CSS Anda
    wadahHasil.innerHTML = `<span class="hyperlink-teks" onclick="pilihKelompokA()" style="cursor:pointer; display:inline-block; font-weight:bold;">${nilaiTeks}</span>`;

    // 3. BERI JEDA 100 MILIDETIK BARU UTUS PINDAH KE KELOMPOK A
    // Cara ini menjamin teksnya sudah muncul secara fisik sebelum menu berubah
    setTimeout(function() {
        pilihKelompokA();
    }, 100);
}

function pilihKelompokA() {
    const dropdownKelompok = document.getElementById('menuDropdown');

    if (dropdownKelompok) {
        // Atur nilai dropdown ke "A"
        dropdownKelompok.value = "A"; 

        // Cadangan jika value di JSON menggunakan format lain, cari berdasarkan teks
        if (dropdownKelompok.selectedIndex <= 0) {
            for (let i = 0; i < dropdownKelompok.options.length; i++) {
                if (dropdownKelompok.options[i].text.includes("Kelompok A")) {
                    dropdownKelompok.selectedIndex = i;
                    break;
                }
            }
        }

        // Memicu event perubahan ke browser HP agar tampilan langsung sinkron
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);

        alert("Teks Hyperlink berhasil dibuat di bawah tombol & menu otomatis masuk ke Kelompok A!");
    } else {
        alert("Eror: Elemen id='menuDropdown' tidak ditemukan.");
    }
}
