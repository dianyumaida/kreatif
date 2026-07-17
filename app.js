// Deklarasi variabel global sementara untuk menyimpan teks teks baru Anda
let teksHyperlinkBaruMaju = "";

function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    if (!kolomInput) return;

    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP

    // 1. Simpan teks yang diketik ke variabel global agar bisa dipakai di fungsi bawah
    teksHyperlinkBaruMaju = nilaiTeks;

    // 2. Jalankan fungsi perpindahan kelompok
    pilihKelompokA();
    
    kolomInput.value = ""; // Bersihkan kolom ketik
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

    dropdownKelompok.blur(); // Paksa tutup kotak pop-up hitam di HP

    // 2. Picu event ganti kelompok agar kode asli Anda memuat data Kelompok A ke layar
    const event = new Event('change', { bubbles: true });
    dropdownKelompok.dispatchEvent(event);

    // 3. TRIK UTAMA: Beri jeda 300 milidetik (menunggu daftar asli selesai digambar di layar),
    // lalu kita paksa selipkan teks baru Anda ke bagian paling bawah daftar Kelompok A.
    setTimeout(function() {
        if (teksHyperlinkBaruMaju !== "") {
            // Cari wadah tempat daftar isi buku Anda ditampilkan di layar HTML.
            // Kode di bawah ini otomatis mencari area buku atau kontainer daftar Anda.
            const wadahDaftarBuku = document.querySelector('.area-buku') || 
                                    document.getElementById('daftar-buku') || 
                                    document.getElementById('kontainer-buku') ||
                                    document.querySelector('.container div');

            if (wadahDaftarBuku) {
                // Buat elemen tautan baru dengan gaya tulisan kuning/biru sesuai CSS Anda
                const elemenBaru = document.createElement('div');
                elemenBaru.style.marginTop = "10px";
                elemenBaru.style.padding = "5px 0";
                elemenBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight:bold; font-size:16px;">${teksHyperlinkBaruMaju}</a>`;
                
                // Tempelkan teks baru tersebut tepat di bawah anak-anak Kelompok A yang lain
                wadahDaftarBuku.appendChild(elemenBaru);
            }
        }
    }, 300);
}
