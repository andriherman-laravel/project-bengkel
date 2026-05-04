<?php
$conn = mysqli_connect("localhost", "root", "", "panca_auto");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>