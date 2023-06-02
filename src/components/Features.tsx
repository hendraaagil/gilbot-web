const commands = [
  { name: 'menu', description: 'menampilkan daftar perintah bot' },
  { name: 'ping', description: 'ping bot' },
  { name: 'kucing', description: 'minta gambar kucing' },
  { name: 'quote', description: 'minta quote bang' },
  { name: 'receh', description: 'minta receh bang' },
  { name: 'sholat', description: 'cari jadwal sholat berdasarkan lokasi' },
  { name: 'hitung', description: 'menghitung operasi matematika sederhana' },
  { name: 'stiker', description: 'membuat stiker dari gambar / gif / video' },
  { name: 'qr', description: 'membuat QR dari teks / link' },
  { name: 'tiktok', description: 'download video TikTok tanpa watermark' },
  { name: 'rangkum', description: 'merangkum video YouTube ke dalam teks bahasa inggris' },
  { name: 'mahasiswa', description: 'cari data mahasiswa berdasarkan nama' },
  { name: 'bagikan', description: 'berikan link bot ini kepada yang membutuhkan' },
  { name: 'tentang', description: 'menampilkan informasi pembuat bot' },
]

export const Features = () => {
  return (
    <section className="flex w-full flex-col justify-center space-y-8 px-0 md:px-2">
      <h2 className="text-2xl font-bold">Daftar Perintah</h2>
      <ol className="w-full list-decimal pl-8 text-lg">
        {commands.map((command) => (
          <li key={command.name}>
            <strong>/{command.name}</strong>, {command.description}.
          </li>
        ))}
      </ol>
    </section>
  )
}
