const WA_NUMBER = "6281511259423";

// Universal function to send WA message
function sendToWA(message) {
  const encoded = encodeURIComponent(message);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
  window.open(waLink, "_blank");
}

// CTA: Konsultasi
function waKonsultasi() {
  sendToWA("Halo, saya ingin cek kesiapan OSN sekolah saya untuk tahun 2026.");
}

// CTA: Pesan Buku
function waOrderBook(bookName) {
  sendToWA(
    `Halo, saya ingin memesan paket/buku:\n\n*${bookName}*\n\nMohon informasinya.`
  );
}
