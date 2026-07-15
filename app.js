// Variabel global untuk menyimpan data dari JSON setelah di-load
let dataBuku = {};

// 1. Jalankan fungsi load data JSON saat halaman web pertama kali dibuka
document.addEventListener("DOMContentLoaded", function() {
    fetch('buku.json')
        .then(response => response.json())
        .then(data => {
            dataBuku = data;
            inisialisasiDropdown();
        })
        .catch(error => console.error("Gagal memuat data json:", error));
});

// 2. Fungsi mengisi opsi dropdown secara dinamis dari file JSON
function inisialisasiDropdown() {
    const selectElement = document.getElementById("menuDropdown");
    
    // Looping data JSON untuk dimasukkan ke dalam elemen HTML <option>
    for (let key in dataBuku) {
        let option = document.createElement("option");
        option.value = key;
        option.textContent = dataBuku[key].nama;
        selectElement.appendChild(option);
    }

    // Pasang event listener ketika dropdown diubah manual oleh user
    selectElement.addEventListener("change", function() {
        tampilkanDataCucu(this.value);
    });
}

// 3. Fungsi memicu perpindahan dropdown saat teks buku diklik
function picuDropdown(idAnak) {
    const selectElement = document.getElementById("menuDropdown");
    selectElement.value = idAnak; // Ubah nilai dropdown secara instan
    tampilkanDataCucu(idAnak);     // Update tampilan list cucu
}

// Fungsi menampilkan list data cucu beserta tombol hapus silang (X)
function tampilkanDataCucu(idAnak) {
    const boxCucu = document.getElementById("areaCucu");
    const listCucu = document.getElementById("listCucu");
    
    // Bersihkan isi list lama
    listCucu.innerHTML = "";

    if (idAnak && dataBuku[idAnak]) {
        const daftarCucu = dataBuku[idAnak].cucu;
        
        // Looping setiap kalimat/data di dalam array cucu
        daftarCucu.forEach((cucuText, index) => {
            let li = document.createElement("li");
            
            // Atur gaya tampilan item list agar tombol hapus berada di ujung kanan
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";
            li.style.marginBottom = "8px";

            // Masukkan teks kalimat beserta tombol silang merah (X) yang membawa index data
            li.innerHTML = `
                <span style="flex: 1; padding-right: 10px;">${cucuText}</span>
                <button 
                    onclick="hapusDataCucu('${idAnak}', ${index})" 
                    style="background: none; border: none; color: #dc3545; font-size: 18px; font-weight: bold; cursor: pointer; padding: 0 5px;"
                    title="Hapus kalimat ini"
                >©</button>
            `;
            
            listCucu.appendChild(li);
        });

        boxCucu.style.display = "block"; 
    } else {
        boxCucu.style.display = "none";  
    }
}


// 5. Fungsi kirim data ke WhatsApp tanpa me-load ulang halaman web utama
function kirimSiaranWA() {
    const selectElement = document.getElementById("menuDropdown");
    const pilihanSaatIni = selectElement.value;

    if (!pilihanSaatIni) {
        alert("Silakan pilih menu atau klik teks hyperlink di dalam buku terlebih dahulu!");
        return;
    }

    // Mengambil data teks anak dan cucunya untuk dijadikan isi pesan WhatsApp
    let namaAnak = dataBuku[pilihanSaatIni].nama;
    let daftarCucu = dataBuku[pilihanSaatIni].cucu.join(", ");

    // Ganti nomor di bawah ini dengan nomor tujuan siaran Anda (format kode negara tanpa spasi/tanda +)
    let nomorTujuan = "628123456789"; 
    
    // Susun pesan text
    let teksPesan = `Laporan Data Buku:\n- Kategori: ${namaAnak}\n- Anggota: ${daftarCucu}`;

    // Buat URL API WhatsApp dengan encoding text yang aman
    let urlWhatsApp = `https://wa.me{nomorTujuan}?text=${encodeURIComponent(teksPesan)}`;

    // Menggunakan window.open dengan parameter '_blank' 
    // Ini membuka aplikasi WhatsApp di tab/jendela baru secara background tanpa me-refresh halaman buku Anda
    window.open(urlWhatsApp, "_blank");
}
// Fungsi untuk memasukkan kalimat dari buku ke dalam Data A (Cucu) secara dinamis
function masukkanKeDataA(elemenTeks) {
    const selectElement = document.getElementById("menuDropdown");
    const pilihanSaatIni = selectElement.value;

    // Validasi: User harus memilih kategori menu dulu agar sistem tahu data mau dimasukkan ke mana
    if (!pilihanSaatIni) {
        alert("Silakan pilih Menu Kategori di bawah terlebih dahulu sebelum mengoleksi kalimat!");
        return;
    }

    // Ambil teks bacaan dari kalimat buku yang diklik
    let kalimatBaru = elemenTeks.textContent;

    // Cek apakah kalimat tersebut sudah pernah dimasukkan sebelumnya agar tidak duplikat
    if (dataBuku[pilihanSaatIni].cucu.includes(kalimatBaru)) {
        alert("Kalimat ini sudah ada di dalam daftar Data Cucu!");
        return;
    }

    // MASUKKAN DATA BARU: Tambahkan kalimat dari buku ke dalam array JSON di memori lokal
    dataBuku[pilihanSaatIni].cucu.push(kalimatBaru);

    // Refresh tampilan list agar kalimat yang baru dimasukkan langsung muncul di layar
    tampilkanDataCucu(pilihanSaatIni);

    // Notifikasi sukses kecil
    alert("✓ Kalimat berhasil dimasukkan ke dalam daftar data!");
}

// Fungsi untuk menghapus kalimat dari daftar data cucu berdasarkan nomor urutan (index)
function hapusDataCucu(idAnak, index) {
    // Beri konfirmasi ke user sebelum menghapus
    let yakin = confirm("Apakah Anda yakin ingin menghapus kalimat ini dari daftar?");
    
    if (yakin) {
        // Hapus 1 data di posisi index yang dipilih dari array memori lokal
        dataBuku[idAnak].cucu.splice(index, 1);
        
        // Refresh kembali tampilan layar agar data terupdate secara instan
        tampilkanDataCucu(idAnak);
    }
}
