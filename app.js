// GANTI KODE DI APP.JS ANDA DENGAN INI

let teksHyperlinkBaruMaju = "";

function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    if (!kolomInput) return;

    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP secara otomatis

    // Simpan teks yang diketik ke variabel global
    teksHyperlinkBaruMaju = nilaiTeks;

    // Jalankan fungsi perpindahan kelompok
    pilihKelompokA();
    
    kolomInput.value = ""; // Bersihkan kembali kolom ketik
}

function pilihKelompokA() {
    const dropdownKelompok = document.getElementById('menuDropdown');
    if (!dropdownKelompok) return;

    // 1. Ubah nilai dropdown ke Kelompok A
    dropdownKelompok.value = "A"; 
    if (dropdownKelompok.selectedIndex <= 0) {
        for (let i = 0; i < dropdownKelompok.options.length; i++) {
            if (dropdownKelompok.options[i].text.includes("Kelompok A")) {
                dropdownKelompok.selectedIndex = i;
                break;
            }
        }
    }

    dropdownKelompok.blur(); // Tutup kotak pop-up pilihan hitam di HP

    // 2. Picu event ganti kelompok untuk menjalankan fungsi bawaan kode asli Anda
    const event = new Event('change', { bubbles: true });
    dropdownKelompok.dispatchEvent(event);

    // 3. SEGERA MUNCULKAN TEKS DI WADAH RIWAYAT BARU YANG KITA BUAT
    const kotakRiwayat = document.getElementById('wadahRiwayatKelompokA');
    const listTeksMasuk = document.getElementById('listTeksMasuk');

    if (kotakRiwayat && listTeksMasuk && teksHyperlinkBaruMaju !== "") {
        // Tampilkan kotak pembungkusnya yang tadi tersembunyi
        kotakRiwayat.style.display = "block";

        // Buat elemen hyperlink baru sesuai dengan gaya CSS Anda
        const barisBaru = document.createElement('div');
        barisBaru.style.padding = "6px 0";
        barisBaru.style.borderBottom = "1px dashed #ddd";
        barisBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight:bold; font-size:16px; color:#0056b3; text-decoration:underline;">🔗 ${teksHyperlinkBaruMaju}</a>`;
        
        // Masukkan teks ke dalam daftar riwayat kelompok A
        listTeksMasuk.appendChild(barisBaru);
    }

    // Tampilkan notifikasi keberhasilan
    setTimeout(function() {
        alert("Berhasil! Teks baru langsung dimasukkan ke dalam daftar Kelompok A di bawah.");
    }, 150);
}
