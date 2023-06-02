const credits = [
  { name: 'TiklyDown API', link: 'https://api.tiklydown.me/' },
  { name: 'The Cat API', link: 'https://thecatapi.com/' },
  { name: 'Candaan API', link: 'https://candaan-api.vercel.app/' },
  { name: 'KyokoAPI', link: 'https://kyoko.rei.my.id/' },
  { name: 'jadwalsholatorg', link: 'https://github.com/lakuapik/jadwalsholatorg' },
  { name: 'summarize.tech', link: 'https://www.summarize.tech/' },
  { name: 'api-frontend.kemdikbud', link: 'https://api-frontend.kemdikbud.go.id/hit_mhs/%7Bnama_mahasiswa%7D' },
]

export const Credits = () => {
  return (
    <section className="flex w-full flex-col justify-center px-0 md:px-2">
      <h2 className="pb-8 text-2xl font-bold">Credits</h2>
      <p className="mb-2 text-lg">Beberapa sumber data yang dipakai:</p>
      <ul className="w-full list-disc pl-8 text-lg">
        {credits.map((credit) => (
          <li key={credit.name}>
            <a href={credit.link} className="hover:underline">
              {credit.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
