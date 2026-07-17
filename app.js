function pilihKelompokA() {
    const dropdownKelompok = document.getElementById('menuDropdown');

    if (dropdownKelompok) {
        // 1. Atur nilai dropdown ke "A"
        dropdownKelompok.value = "A"; 

        // Cadangan jika value di HTML berbeda, cari berdasarkan teks "Kelompok A"
        if (dropdownKelompok.selectedIndex <= 0) {
            for (let i = 0; i < dropdownKelompok.options.length; i++) {
                if (dropdownKelompok.options[i].text.includes("Kelompok A")) {
                    dropdownKelompok.selectedIndex = i;
                    break;
                }
            }
        }

        // 2. PAKSA TUTUP MENU POP-UP DROPDOWN DI HP
        // Fungsi blur() akan memaksa browser HP menutup kotak pilihan yang mengambang
        dropdownKelompok.blur(); 

        // 3. Memicu event perubahan agar browser memperbarui tampilan riwayat data buku
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);

        // Beri jeda sangat singkat agar menu menutup sempurna sebelum memunculkan notifikasi
        setTimeout(function() {
            alert(`Sukses! Menu otomatis masuk ke Kelompok A.`);
        }, 150);

    } else {
        alert("Eror: Elemen id='menuDropdown' tidak ditemukan di HTML.");
    }
}
