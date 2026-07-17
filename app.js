// FUNGSI BARU DENGAN NAMA BARU AGAR SERVER GITHUB TERPAKSA MEMPERBARUI DATA
function prosesTeksLinkBuku() {
    const input = document.getElementById('inputTeksBuku');
    const select = document.getElementById('menuDropdown');
    const list = document.getElementById('listCucu');
    const area = document.getElementById('areaCucuCucu');
    
    // 1. Validasi teks kosong
    if (!input || !input.value.trim()) { 
        alert('Silakan ketik teks terlebih dahulu di kolom!'); 
        return; 
    }
    
    const teks = input.value.trim();
    input.value = ''; // Bersihkan input
    input.blur(); // Tutup keyboard HP
    
    // 2. Pindahkan menu dropdown otomatis ke Kelompok A
    if (select) {
        select.value = 'A';
        select.blur(); // Tutup popup pilihan hitam HP
        select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    
    // 3. Masukkan teks langsung menjadi anak daftar Kelompok A
    setTimeout(function() {
        if (area) { 
            area.style.display = 'block'; 
        }
        if (list) {
            const li = document.createElement('li');
            li.style.margin = '8px 0';
            // Tag tautan <a> dengan class CSS Anda agar otomatis biru & bergaris bawah
            li.innerHTML = `<a href="#" class="hyperlink-teks" style="font-weight: bold; font-size: 16px;">🔗 ${teks}</a>`;
            list.appendChild(li);
        }
    }, 200);
}
