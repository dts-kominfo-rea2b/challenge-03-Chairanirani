// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  let list = [];
  for(let i =0; i < dataBelanjaan.length; i++){
    list.push(`- ${dataBelanjaan[i].nama} x ${dataBelanjaan[i].kuantitas}`);
  }
  return list;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
let nums = [];
for(let j =0; j < dataBelanjaan.length; j++){
  nums.push(dataBelanjaan[j].harga);
}

const totalBelanjaan = (nums) => {
  let total =0;
  for(let j =0; j < nums.length; j++){
    total += nums[j].harga * nums[j].kuantitas;
  }
  return total;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
