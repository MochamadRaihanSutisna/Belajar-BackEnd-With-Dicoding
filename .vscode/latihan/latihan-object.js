/*
    const biodata = {
    namaLengkap : "Mochamad Raihan Sutinsna",
    umur : 20,
    alamat : "Cianjur",
    pekerjaan : "Pengangguran",
    hobi : "Coding",
    "pencapaian" : "SoftWare Engineer" 
    };
    
    console.log(`Perkenalkan nama saya ${biodata.namaLengkap}, saya umur ${biodata.umur} tahun, tinggal di ${biodata.alamat}, saat ini saya seorang ${biodata.pekerjaan}, saya sangat menyukai ${biodata.hobi} dan saya bercita - cita ingin menjadi seorang ${biodata["pencapaian"]}!`);
    
    hasil ---->
        Perkenalkan nama saya Mochamad Raihan Sutinsa, saya umur 20 tahun, tinggal di Cianjur, saat ini saya seorang Pengangguran, saya sangat menyukai coding dan saya bercita - cita ingin menjadi seorang SoftWare Engineer!

*/


const biodata = {
    namaLengkap : "Mochamad Raihan Sutinsna",
    umur : 20,
    alamat : "Cianjur",
    pekerjaan : "Pengangguran",
    hobi : "Coding",
    "pencapaian" : "SoftWare Engineer" //mengakses properti dari object menggunakan bracket atau tanda kurung siku.
    
};

    biodata.namaLengkap = "Dewi Salwa Waenurlillah"; // Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).

    biodata["pekerjaan"] = "Guru"; //mengakses properti dari object menggunakan bracket atau tanda kurung siku.

    biodata.hobi = "Belajar Bahasa Inggris";

    biodata.lulusan = "S1 - Pendidikan Guru Bahasa Inggris"; // Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.

delete biodata.lulusan; // ita juga dapat menghapus property pada object menggunakan keyword delete

console.log(biodata);
console.log(`Perkenalkan nama saya ${biodata.namaLengkap}, saya umur ${biodata.umur} tahun, tinggal di ${biodata.alamat}, saat ini saya seorang ${biodata.pekerjaan}, saya sangat menyukai ${biodata.hobi} dan saya bercita - cita ingin menjadi seorang ${biodata["pencapaian"]}!`);
    // Perkenalkan nama saya Dewi Salwa Waenurlillah, saya umur 20 tahun, tinggal di Cianjur, saat ini saya seorang Guru, saya sangat menyukai Belajar Bahasa Inggris dan saya bercita - cita ingin menjadi seorang tutor inspiratif bagi siswa!    