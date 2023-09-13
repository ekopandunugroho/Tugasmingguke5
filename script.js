// Konstruktor untuk objek Pendaftar
class Pendaftar {
    constructor(nama, umur, uangsaku) {
        this.nama = nama;
        this.umur = umur;
        this.uangsaku = uangsaku;
    }
}

// Daftar pendaftar
const pendaftarList = [];

// Fungsi untuk menambahkan pendaftar ke tabel
function addPendaftarToList(pendaftar) {
    const table = document.getElementById("pendaftarTable");
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerHTML = pendaftar.nama;
    cell2.innerHTML = pendaftar.umur;
    cell3.innerHTML = pendaftar.uangsaku;
}

// Fungsi untuk menghitung rata-rata umur dan uang saku
function calculateAverage() {
    let totalUmur = 0;
    let totalUangSaku = 0;

    for (const pendaftar of pendaftarList) {
        totalUmur += pendaftar.umur;
        totalUangSaku += pendaftar.uangsaku;
    }

    const avgUmur = totalUmur / pendaftarList.length;
    const avgUangSaku = totalUangSaku / pendaftarList.length;

    document.getElementById("avgUmur").textContent = avgUmur.toFixed(2);
    document.getElementById("avgUangSaku").textContent = avgUangSaku.toFixed(2);
}

// Event listener untuk form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangsaku = parseInt(document.getElementById("uangsaku").value);

    // Validasi input
    if (nama.length < 10 || umur < 25 || uangsaku < 100000 || uangsaku > 1000000) {
        alert("Data tidak valid. Periksa kembali input Anda.");
        return;
    }

    // Buat objek Pendaftar
    const pendaftar = new Pendaftar(nama, umur, uangsaku);

    // Tambahkan pendaftar ke daftar dan tabel
    pendaftarList.push(pendaftar);
    addPendaftarToList(pendaftar);

    // Hitung ulang rata-rata
    calculateAverage();

    // Kosongkan form
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uangsaku").value = "";
});

// Fungsi untuk mengganti tab aktif
function openTab(tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablink");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    for (let i = 0; i < tablinks.length; i++) {
        if (tablinks[i].getAttribute("onclick").includes(tabName)) {
            tablinks[i].classList.add("active");
        }
    }
}

// Default: Buka tab Registrasi
openTab("Registrasi");