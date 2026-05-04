<?php 
$conn = mysqli_connect("localhost", "root", "", "panca_auto");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

if(isset($_POST['kirim'])){
    $nama = $_POST['nama'];

    $q = mysqli_query($conn, "INSERT INTO konsultasi (nama) VALUES ('$nama')");

    if($q){
        echo "BERHASIL SIMPAN";
    } else {
        echo "ERROR: " . mysqli_error($conn);
    }
}
?>

<form method="POST">
<input name="nama" placeholder="nama">
<button name="kirim">Kirim</button>
</form>