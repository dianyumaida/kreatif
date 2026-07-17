// GANTI KODE DI FILE APP.JS ANDA DENGAN INI

function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 

    if (!kolomInput) return;
    
    // 1. Ambil teks murni dari kotak input
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di dalam kotak!");
        return;
    }

    kolomInput.blur(); // Matikan fokus agar keyboard HP menutup

    // 2. STRATEGI AL-QUR'AN DIGITAL: Buat objek data baru sesuai format aplikasi Anda
    const objekBukuBaru = {
        judul: nilaiTeks,     // Teks murni dari kotak
        kelompok: "A",       // Kunci target ke Kelompok A
        link: "#"            // Tautan kosong atau arahkan ke link tujuan
    };

    // 3. MASUKKAN DATA BARU LANGSUNG KE DALAM MEMORI UTAMA KODINGAN ANDA
    // Kode di bawah ini otomatis mendeteksi nama variabel Array data buku kodingan asli Anda
    if (typeof dataBuku !== 'undefined' && Array.isArray(dataBuku)) {
        dataBuku.push(objekBukuBaru);
    } else if (typeof daftarBuku !== 'undefined' && Array.isArray(daftarBuku)) {
        daftarBuku.push(objekBukuBaru);
    } else if (typeof listBuku !== 'undefined' && Array.isArray(listBuku)) {
        listBuku.push(objekBukuBaru);
    } else if (typeof bukuData !== 'undefined' && Array.isArray(bukuData)) {
        bukuData.push(objekBukuBaru);
    }

    // 4. ALIRKAN KE DROPDOWN UNTUK MEMICU TAMPILAN KELOMPOK A
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); 
        
        // Memicu event ganti kelompok agar fungsi render data asli Anda memuat memori baru kita
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // 5. JALANKAN ULANG FUNGSI RENDER BAWAAN ANDA SECARA MANUAL (JIKA LAYAR MASIH KOSONG)
    if (typeof tampilkanBuku === 'function') { tampilkanBuku(); }
    else if (typeof renderBuku === 'function') { renderBuku(); }
    else if (typeof tampilkanData === 'function') { tampilkanData(); }

    // Bersihkan kembali isi kotak input di atas agar kosong
    kolomInput.value = "";
}
