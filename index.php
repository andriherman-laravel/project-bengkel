<?php include 'config/koneksi.php'; ?>
<?php
if(isset($_POST['kirim'])){

    $nama = $_POST['nama'];
    $hp = $_POST['hp'];
    $layanan = $_POST['layanan'];
    $pesan = $_POST['pesan'];

    $query = mysqli_query($conn, "INSERT INTO konsultasi (nama,hp,layanan,pesan)
    VALUES ('$nama','$hp','$layanan','$pesan')");

   if($query){

    $wa = "6287771262718";
    $text = "Halo saya $nama ingin konsultasi $layanan";

    echo "<script>
    window.location.href='https://wa.me/$wa?text=" . urlencode($text) . "';
    </script>";

} else {
    echo "❌ Error: " . mysqli_error($conn);
}
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PT Panca Auto Sentra Tama</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
<div class="container">
<img src="images/logo.png" height="40" class="me-2">
<a class="navbar-brand fw-bold text-primary">Panca Auto</a>

<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="nav">
<ul class="navbar-nav ms-auto">
<li class="nav-item"><a class="nav-link" href="#hero">Home</a></li>
<li class="nav-item"><a class="nav-link" href="#sejarah">Sejarah</a></li>
<li class="nav-item"><a class="nav-link" href="#visi">Visi-Misi</a></li>
<li class="nav-item"><a class="nav-link" href="#struktur">Struktur</a></li>
<li class="nav-item"><a class="nav-link" href="#hasil-kerja">Hasil-Kerja</a></li>
<li class="nav-item"><a class="nav-link" href="#partner">Partner</a></li>
<li class="nav-item"><a class="nav-link" href="#lokasi">Lokasi</a></li>
<li class="nav-item"><a class="nav-link" href="#contact">Kontak</a></li>
<div class="nav-indicator"></div>
</ul>
</div>
</div>
</nav>

<!-- HERO -->
<section id="hero" class="hero d-flex align-items-center">
<div class="container text-center">
<h1 class="fw-bold">Body Repair Kendaraan Profesional</h1>
<p class="mt-3">Solusi terpercaya untuk kendaraan operasional, truck, dan fleet perusahaan dengan standar pengerjaan tinggi.</p>
<a href="#contact" class="btn btn-primary mt-3">Konsultasi Sekarang</a>
</div>
</section>

<!-- SEJARAH -->
<section id="sejarah" class="py-5">
<div class="container">
<h2 class="text-center fw-bold mb-5">Sejarah Perusahaan</h2>

<div class="row align-items-center">
<div class="col-md-6">
<img src="images/logo.png" class="img-fluid rounded shadow">
</div>

<div class="col-md-6">
<p class="text-muted">
PT Panca Auto Sentra Tama didirikan pada tahun 2024 sebagai respon terhadap meningkatnya kebutuhan industri akan layanan perbaikan kendaraan operasional yang cepat, tepat, dan berkualitas tinggi. 
Sejak awal berdirinya, perusahaan telah berkomitmen untuk menjadi mitra terpercaya bagi perusahaan dalam menjaga performa armada kendaraan mereka.
<br><br>
Dengan dukungan teknisi berpengalaman, peralatan modern, serta sistem kerja yang terstruktur, perusahaan mampu memberikan hasil pengerjaan yang presisi dan sesuai standar industri. 
Setiap proses dilakukan dengan mengutamakan efisiensi waktu tanpa mengurangi kualitas hasil akhir.
<br><br>
Seiring berjalannya waktu, PT Panca Auto Sentra Tama terus berkembang dan telah dipercaya oleh berbagai perusahaan serta bekerja sama dengan sejumlah asuransi terkemuka di Indonesia. 
Kepercayaan tersebut menjadi fondasi utama bagi perusahaan untuk terus meningkatkan kualitas layanan dan inovasi di bidang body repair kendaraan.
</p>
</div>
</div>

</div>
</section>

<!-- VISI MISI -->
<section id="visi" class="py-5 bg-light">
<div class="container">
<h2 class="text-center fw-bold mb-5">Visi & Misi</h2>

<div class="row g-4">
<div class="col-md-6">
<div class="card p-4 shadow-sm h-100">
<h4 class="text-primary fw-bold">Visi</h4>
<p>Menjadi perusahaan body repair kendaraan operasional terpercaya di Indonesia dengan standar kualitas tinggi dan pelayanan profesional.</p>
</div>
</div>

<div class="col-md-6">
<div class="card p-4 shadow-sm h-100">
<h4 class="text-primary fw-bold">Misi</h4>
<p>
• Memberikan layanan terbaik dan profesional<br>
• Transparansi dalam proses klaim asuransi<br>
• Mengutamakan kepuasan pelanggan<br>
• Mengembangkan SDM dan teknologi
</p>
</div>
</div>
</div>

<section id="struktur" class="py-5 bg-light">
<div class="container text-center">

    <div class="d-flex justify-content-center">
        <a href="images/struktur-organisasi.png" target="_blank">
            <img src="images/struktur-organisasi.png" 
                 class="img-fluid shadow-lg rounded"
                 style="max-width:900px; width:100%; transition:0.3s;">
        </a>
    </div>

    <p class="text-muted mt-3 small">Klik gambar untuk memperbesar</p>

</div>
</section>
<section id="hasil-kerja" class="py-5">
<div class="container">

<div class="row g-4">

<section id="hasil-kerja" class="py-5 bg-light">
<div class="container">
<h2 class="text-center fw-bold mb-5">Hasil Pengerjaan</h2>

<div class="row justify-content-center g-4">

<div class="col-md-5">
<div class="before-after">
<img src="images/Mobil_awal.jpg">
<img src="images/selesai.JPG" class="before">
<div class="label before-label">Before</div>
<div class="label after-label">After</div>
</div>
</div>

<div class="col-md-5">
<div class="before-after">
<img src="images/before.JPG">
<img src="images/after.JPG" class="before">
<div class="label before-label">Before</div>
<div class="label after-label">After</div>
</div>
</div>
</div>
</div>
<div class="text-center mt-5">
<h3 class="fw-bold">
Telah menyelesaikan lebih dari 
<span id="counter">0</span> Unit
</h3>
<p class="text-muted">Dengan kualitas terbaik dan standar profesional</p>
</div>

<div id="ai-chatbot">
  <div class="chat-header">Customer Service 🤖</div>

  <div class="chat-body" id="chatBody">
    <div class="bot">Halo 👋 ada yang bisa kami bantu?</div>
  </div>

  <div class="chat-input">
    <input type="text" id="userInput" placeholder="Tulis pertanyaan...">
  </div>
</div>

<button id="chatBtn">💬</button>
</section>
<!-- PARTNER SLIDER -->
<section id="partner" class="py-5">
<div class="container text-center">
<h2 class="fw-bold mb-4">Partner Asuransi</h2>

<div class="slider">
<div class="slide-track">

<div class="slide"><img src="images/mag.png"></div>
<div class="slide"><img src="images/aab.png"></div>
<div class="slide"><img src="images/tokio.png"></div>
<div class="slide"><img src="images/sompo.png"></div>

<div class="slide"><img src="images/mag.png"></div>
<div class="slide"><img src="images/aab.png"></div>
<div class="slide"><img src="images/tokio.png"></div>
<div class="slide"><img src="images/sompo.png"></div>

</div>
</div>

</div>
</section>

<!-- LOKASI -->
<section id="lokasi" class="py-5 bg-light">
<div class="container">
<h2 class="text-center fw-bold mb-4">Lokasi Kami</h2>

<p class="text-center text-muted">
Jl. Kampung Babakan Cikeas, Sentul, Bogor<br>
Telp: 0877-7126-2718
</p>

<div class="row mt-4 g-4">
<div class="col-md-7">
<div class="map-box">
<iframe src="https://www.google.com/maps?q=PT.+Panca+Auto+Sentul&output=embed" width="100%" height="350"></iframe>
</div>
</div>

<div class="col-md-5">
<div class="card p-4 shadow-sm">
<h5 class="text-primary">Jam Operasional</h5>
<p>Senin - Jumat : 09.00 - 17.00</p>
<p>Sabtu : 09.00 - 14.00</p>
<p>Minggu : Tutup</p>
<p>email:pancaautosentratama@gmail.com</p>
</div>
</div>
</div>

</div>
</section>


<!-- FORM -->
<section id="contact" class="py-5">
<div class="container">
<h2 class="text-center mb-4">Konsultasi Gratis</h2>

<form method="POST" class="mx-auto" style="max-width:500px">

<input type="text" name="nama" class="form-control mb-3" placeholder="Nama" required>

<input type="text" name="hp" class="form-control mb-3" placeholder="No WhatsApp" required>

<select name="layanan" class="form-control mb-3">
<option value="Body Repair">Body Repair</option>
<option value="Klaim Asuransi">Klaim Asuransi</option>
</select>

<textarea name="pesan" class="form-control mb-3" placeholder="Kebutuhan"></textarea>

<button type="submit" name="kirim" class="btn btn-primary w-100">
Kirim
</button>

</form>


</div>
</section>

<footer class="text-center py-4 bg-white border-top">
<p>© 2026 PT Panca Auto Sentra Tama</p>
</footer>

<script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>