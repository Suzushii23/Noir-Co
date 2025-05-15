const chatToggle = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

chatToggle.addEventListener('click', () => {
  chatbot.style.display = 'flex';
  chatToggle.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  chatbot.style.display = 'none';
  chatToggle.style.display = 'block';
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  const userMsg = document.createElement('div');
  userMsg.className = 'user-message';
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);
  userInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-message';
    botMsg.textContent = getBotResponse(message);
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 700);
}

function getBotResponse(message) {
  const msg = message.toLowerCase();

if (msg.includes("halo") || msg.includes("hai") || msg.includes("hello")) {
  return "Hai juga! Apa yang bisa kami bantu hari ini?😊";
} else if (msg.includes("alamat")) {
  return "Kami berlokasi di Jl. Raya Cikampak Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620";
} else if (msg.includes("produk")) {
  return "Kami menjual pakaian kekinian, aksesoris fashion, dan sepatu original Noir & Co.";
} else if (msg.includes("buka") || msg.includes("jam operasional")) {
  return "Kami buka setiap hari dari pukul 09.00 – 21.00 WIB.";
} else if (msg.includes("harga")) {
  return "Harga bervariasi mulai dari Rp 79.000 hingga Rp 499.000. Silakan sebutkan produk yang kamu cari.";
} else if (msg.includes("pembayaran")) {
  return "Kami menerima pembayaran via transfer bank, e-wallet (OVO, DANA, GoPay), dan COD.";
} else if (msg.includes("return") || msg.includes("retur")) {
  return "Kami menerima retur maksimal 3 hari setelah barang diterima, dengan syarat barang belum dipakai.";
} else if (msg.includes("diskon") || msg.includes("promo")) {
  return "Lagi ada promo spesial minggu ini! Dapatkan diskon hingga 30% untuk produk tertentu 🎉.";
} else if (msg.includes("ukuran")) {
  return "Kami menyediakan ukuran dari S hingga XXL. Untuk info lebih detail, silakan cek deskripsi produk.";
} else if (msg.includes("pengiriman")) {
  return "Kami bekerja sama dengan JNE, J&T, SiCepat, dan AnterAja. Pengiriman dilakukan setiap hari.";
} else if (msg.includes("mahal") || msg.includes("harganya")) {
  return "Kami paham harganya terasa mahal, tapi kualitas dan desain kami sepadan. Tenang, sering ada promo menarik kok! 😊";
} else if (msg.includes("jelek") || msg.includes("buruk")) {
  return "Maaf kalau produk belum sesuai harapan. Bisa jelaskan bagian mana yang kurang supaya kami bantu?";
} else if (msg.includes("lama kirim") || msg.includes("pengiriman lama")) {
  return "Mohon maaf atas keterlambatan, biasanya pengiriman 2-5";
} else if (msg.includes("preorder") || msg.includes("po")) {
  return "Produk pre-order akan dikirim 5–7 hari kerja setelah pembayaran diterima.";
} else if (msg.includes("garansi")) {
  return "Produk kami bergaransi 1 hari jika terdapat cacat produksi.";
} else if (msg.includes("kontak") || msg.includes("hubungi")) {
  return "Hubungi kami lewat WhatsApp di 0812-1381-5050 atau email ke suzushi23@gmail.com.";
} else if (msg.includes("model terbaru") || msg.includes("koleksi baru")) {
  return "Koleksi terbaru kami tersedia di halaman utama website dan Instagram @noir.co!";
} else if (msg.includes("cara pesan") || msg.includes("order")) {
  return "Pilih produk > klik tambah ke keranjang > lanjut checkout > isi data pengiriman.";
} else if (msg.includes("gratis ongkir")) {
  return "Kami menyediakan gratis ongkir untuk pembelian minimal Rp 250.000. Berlaku seluruh Indonesia!";
} else if (msg.includes("lokasi") || msg.includes("toko offline")) {
  return "Kami saat ini hanya melayani pembelian online melalui website dan marketplace resmi Noir & Co.";
} else if (msg.includes("cara bayar") || msg.includes("metode pembayaran")) {
  return "Kamu bisa membayar melalui transfer bank, e-wallet (OVO, DANA, GoPay), dan COD (bayar di tempat).";
} else if (msg.includes("minimal pembelian")) {
  return "Tidak ada minimal pembelian. Kamu bisa beli satuan atau lebih sesuai kebutuhanmu!";
} else if (msg.includes("diskon ongkir")) {
  return "Kami sering mengadakan promo bebas ongkir. Pantau terus Instagram kami untuk info terbaru!";
} else if (msg.includes("paket") || msg.includes("kardus")) {
  return "Setiap pesanan dikemas dengan rapi menggunakan kardus eksklusif Noir & Co.";
} else if (msg.includes("bisa tukar") || msg.includes("tukar produk")) {
  return "Produk bisa ditukar jika cacat produksi. Hubungi kami maksimal 3 hari setelah barang diterima.";
} else if (msg.includes("lama pengiriman") || msg.includes("durasi kirim")) {
  return "Pengiriman reguler memakan waktu 2–5 hari kerja, tergantung lokasi tujuan.";
} else if (msg.includes("voucher") || msg.includes("kode promo")) {
  return "Masukkan kode promo saat checkout untuk mendapatkan potongan harga. Cek Instagram untuk info kode!";
} else if (msg.includes("bisa bayar di tempat")) {
  return "Ya, kami menyediakan layanan COD (bayar di tempat) untuk area tertentu.";
} else if (msg.includes("bisa beli grosir") || msg.includes("reseller")) {
  return "Kami menerima pembelian grosir & reseller. Silakan hubungi tim kami untuk info harga khusus.";
} else {
  return "Terima kasih atas pesan kamu! Tim kami akan segera merespon. 😊";
}
}
