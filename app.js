// 1. FUNGSI SAAT TOMBOL BIRU DIKLIK
function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    if (!kolomInput) return;

    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP

    // MEMBUAT STRUKTUR DATA BARU YANG SAMA DENGAN BUKU.JSON
    // Menambahkan class 'hyperlink-teks' agar tampilannya sesuai dengan CSS Anda
    const dataBaru = {
        judul: `<a href="#" class="hyperlink-teks">${nilaiTeks}</a>`,
        kelompok: "A", // Mengunci agar masuk ke Kelompok A
        link: "#"
    };

    // MEMASUKKAN KE ARRAY UTAMA APLIKASI
    // Catatan: Ganti 'dataBuku' dengan nama variabel Array penampung JSON Anda di app.js
    if (typeof dataBuku !== 'undefined' && Array.isArray(dataBuku)) {
        dataBuku.push(dataBaru);
    } else if (typeof daftarBuku !== 'undefined' && Array.isArray(daftarBuku)) {
        daftarBuku.push(dataBaru);
    } else if (typeof listBuku !== 'undefined' && Array.isArray(listBuku)) {
        listBuku.push(dataBaru);
    }

    // Pindah ke kelompok A
    pilihKelompokA();
    
    kolomInput.value = ""; // Bersihkan kolom ketik
}

// 2. FUNGSI UNTUK MEMINDAHKAN DAN MEMICU TAMPILAN KELOMPOK A
function pilihKelompokA() {
    const dropdownKelompok = document.getElementById('menuDropdown');

    if (dropdownKelompok) {
        dropdownKelompok.value = "A"; // Ubah nilai dropdown ke A

        // Cadangan jika value di HTML menggunakan teks panjang
        if (dropdownKelompok.selectedIndex <= 0) {
            for (let i = 0; i < dropdownKelompok.options.length; i++) {
                if (dropdownKelompok.options[i].text.includes("Kelompok A")) {
                    dropdownKelompok.selectedIndex = i;
                    break;
                }
            }
        }

        dropdownKelompok.blur(); // Paksa tutup kotak pop-up hitam di HP

        // Memicu event agar fungsi render data buku bawaan kode Anda otomatis berjalan
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);

        // Jika daftar masih belum muncul, kita panggil fungsi render kodingan Anda secara manual di sini
        if (typeof tampilkanBuku === 'function') {
            tampilkanBuku(); 
        } else if (typeof renderBuku === 'function') {
            renderBuku();
        }

        setTimeout(function() {
            alert("Berhasil! Teks hyperlink baru Anda telah dimasukkan ke dalam daftar Kelompok A.");
        }, 200);

    } else {
        alert("Eror: Elemen id='menuDropdown' tidak ditemukan.");
    }
}
