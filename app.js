// GANTI KODE DI APP.JS ANDA DENGAN LOGIKA PEMANTAU INI

function buatHyperlinkLangsung() {
    const kolomInput = document.getElementById('inputTeksBuku');
    const dropdownKelompok = document.getElementById('menuDropdown'); 
    const wadahListCucu = document.getElementById('listCucu');

    if (!kolomInput) return;
    
    const nilaiTeks = kolomInput.value.trim();
    if (nilaiTeks === "") {
        alert("Silakan ketik teks terlebih dahulu di kolom!");
        return;
    }

    kolomInput.blur(); // Tutup keyboard HP

    // 1. BUAT SISTEM PEMANTAU (OBSERVER) UNTUK MENGUNCI DAFTAR KELOMPOK
    if (wadahListCucu) {
        const targetPemantau = wadahListCucu;
        
        const pemantauDaftar = new MutationObserver(function(mutations, observer) {
            // Begitu mendeteksi ada perubahan data atau pemuatan dari buku.json selesai
            observer.disconnect(); // Matikan pemantau agar tidak terjadi perulangan abadi
            
            // Masukkan teks baru Anda secara fisik ke baris paling bawah listCucu
            const barisLiBaru = document.createElement('li');
            barisLiBaru.style.margin = "8px 0";
            barisLiBaru.style.padding = "4px 0";
            barisLiBaru.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px; color: #0056b3; text-decoration: underline; display: inline-block;">🔗 ${nilaiTeks}</a>`;
            
            targetPemantau.appendChild(barisLiBaru);
            
            // Munculkan notifikasi setelah teks benar-benar terkunci di layar
            setTimeout(function() {
                alert(`Sukses! Teks "${nilaiTeks}" telah dikunci di dalam Kelompok A.`);
            }, 50);
        });

        // Aktifkan mode pemantauan ketat pada elemen daftar kelompok tujuan
        pemantauDaftar.observe(targetPemantau, { childList: true });
    }

    // 2. JALANKAN PERINTAH UTK MENGUBAH DROPDOWN KE KELOMPOK A
    if (dropdownKelompok) {
        dropdownKelompok.value = "A";
        dropdownKelompok.blur(); // Amankan fokus pop-up sistem HP
        
        // Pemicu event ganti kelompok agar aplikasi Anda memuat data asli buku.json
        const event = new Event('change', { bubbles: true });
        dropdownKelompok.dispatchEvent(event);
    }

    // Bersihkan isi kolom input ketik di atas
    kolomInput.value = "";
}
