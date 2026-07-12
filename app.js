const fs = require('fs');
const path = require('path');

const FILE_PATH = './buku.json';
const FOLDER_GAMBAR = './File/Gambar/Buku/';

// Fungsi membaca database JSON
function bacaData() {
    if (!fs.existsSync(FILE_PATH)) {
        return { daftarBuku: [] };
    }
    return JSON.parse(fs.readFileSync(FILE_PATH));
}

// Fungsi menyimpan database JSON
function simpanData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

// 1. FUNGSI AUTO-SCAN & TAMBAH BUKU OTOMATIS
function sinkronisasiGambarKeBuku() {
    let data = bacaData();

    // Baca semua file di dalam folder gambar
    if (!fs.existsSync(FOLDER_GAMBAR)) {
        console.log("❌ Folder gambar tidak ditemukan!");
        return;
    }

    const files = fs.readdirSync(FOLDER_GAMBAR);

    files.forEach(file => {
        // Ambil nama file tanpa ekstensi (misal: 'A.png' jadi 'A')
        const namaFile = path.parse(file).name;
        const ekstensi = path.parse(file).ext.toLowerCase();

        // Hanya proses file gambar (png, jpg, jpeg)
        if (['.png', '.jpg', '.jpeg'].includes(ekstensi)) {
            
            // Cek apakah buku dengan kode tersebut sudah terdaftar di database
            const sudahAda = data.daftarBuku.some(buku => buku.kode === `BK-${namaFile}`);

            if (!sudahAda) {
                const bukuBaru = {
                    kode: `BK-${namaFile}`, // Hasil: BK-A, BK-B, BK-C
                    judul: `Buku Seri ${namaFile}`, // Judul default, bisa diedit nanti
                    pengarang: "Belum Diisi",
                    lokasiGambar: path.join(FOLDER_GAMBAR, file)
                };
                data.daftarBuku.push(bukuBaru);
                console.log(`✅ Otomatis menambah Buku: BK-${namaFile} dari file gambar.`);
            }
        }
    });

    simpanData(data);
}

// 2. FUNGSI EDIT BUKU
function editBuku(kodeBuku, judulBaru, pengarangBaru) {
    let data = bacaData();
    let buku = data.daftarBuku.find(b => b.kode === kodeBuku);
    
    if (buku) {
        buku.judul = judulBaru || buku.judul;
        buku.pengarang = pengarangBaru || buku.pengarang;
        simpanData(data);
        console.log(`📝 Buku ${kodeBuku} berhasil diperbarui.`);
    } else {
        console.log("❌ Kode buku tidak ditemukan.");
    }
}

// 3. FUNGSI HAPUS BUKU
function hapusBuku(kodeBuku) {
    let data = bacaData();
    const index = data.daftarBuku.findIndex(b => b.kode === kodeBuku);
    
    if (index !== -1) {
        data.daftarBuku.splice(index, 1);
        simpanData(data);
        console.log(`🗑️ Buku ${kodeBuku} berhasil dihapus dari database.`);
    } else {
        console.log("❌ Kode buku tidak ditemukan.");
    }
}

// === CARA MENJALANKAN ===

// Langkah A: Jalankan ini pertama kali untuk membaca folder gambar secara otomatis
sinkronisasiGambarKeBuku();

// Langkah B: Jalankan ini jika ingin mengedit judul buku A atau B atau C
// editBuku("BK-A", "Novel Sejarah Dunia", "Tere Liye");

// Langkah C: Jalankan ini jika ingin menghapus data buku dari daftar
// hapusBuku("BK-A");
