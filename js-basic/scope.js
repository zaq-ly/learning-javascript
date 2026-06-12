let totalPenjualan = 0; // global — terus diupdate dari mana saja

function prosesTransaksi(items) {
  const pajak = 0.11; // local — hanya untuk function ini

  for (const item of items) {
    const subtotal = item.harga * item.qty; // block scope — reset tiap iterasi
    const pajakItem = subtotal * pajak;     // block scope — reset tiap iterasi

    totalPenjualan += subtotal + pajakItem; // ✅ update variabel global
  }

  // subtotal & pajakItem sudah tidak ada di sini
  console.log(`Total penjualan: Rp ${totalPenjualan}`); // ✅ bisa
//   console.log(subtotal); // ❌ Error! subtotal hanya hidup di dalam for { }
}

const transaksiHariIni = [
  { nama: "Kopi", harga: 25000, qty: 3 },
  { nama: "Roti", harga: 15000, qty: 2 }
];

prosesTransaksi(transaksiHariIni);
console.log(totalPenjualan); // ✅ bisa — dia global