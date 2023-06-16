import { supabase } from '@/libs/supabase'

const getFeatures = async () => {
  const { data } = await supabase
    .from('commands')
    .select('id, name, description, position')
    .order('position', { ascending: true })
  return data
}

export const Features = async () => {
  const features = await getFeatures()

  return (
    <section className="flex w-full flex-col justify-center space-y-8 px-0 md:px-2">
      <p>
        <strong>GilBot</strong> adalah bot WhatsApp yang bisa menjalankan beberapa perintah melalui chat. Seperti
        membuat stiker, download video TikTok / Instagram, dan masih banyak lagi. Chat dengan GilBot sekarang! 🤘
      </p>
      <h2 className="text-2xl font-bold">Daftar Perintah</h2>
      <ol className="w-full list-decimal pl-8 text-lg">
        {features?.map((feature) => (
          <li key={feature.name}>
            <strong>/{feature.name}</strong>, {feature.description}.
          </li>
        ))}
      </ol>
    </section>
  )
}
