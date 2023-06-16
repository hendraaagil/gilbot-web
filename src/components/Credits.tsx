import { supabase } from '@/libs/supabase'

const getCredits = async () => {
  const { data } = await supabase
    .from('credits')
    .select('id, name, link, position')
    .order('position', { ascending: true })
  return data
}

export const Credits = async () => {
  const credits = await getCredits()

  return (
    <section className="flex w-full flex-col justify-center px-0 md:px-2">
      <h2 className="pb-8 text-2xl font-bold">Credits</h2>
      <p className="mb-2 text-lg">Beberapa sumber data / tools yang dipakai:</p>
      <ul className="w-full list-disc pl-8 text-lg">
        {credits?.map((credit) => (
          <li key={credit.name}>
            <a href={credit.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {credit.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
