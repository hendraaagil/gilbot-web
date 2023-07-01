export const Rules = () => (
  <section className="flex min-h-screen flex-col justify-center space-y-8">
    <h1 className="text-4xl font-bold">Rules</h1>
    <p>
      <strong>Rules / peraturan</strong> ini dibuat agar GilBot tidak disalahgunakan oleh orang / pihak yang tidak
      bertanggung jawab. Pelanggaran dari peraturan yang ada akan dikenakan sanksi <strong>ban</strong> permanen. Jika
      kamu terkena ban, maka kamu tidak bisa menggunakan GilBot lagi.
    </p>
    <div className="flex flex-col space-y-2">
      <h2 className="text-2xl font-bold">Peraturan</h2>
      <ul className="list-disc pl-8">
        <li>
          Dilarang mengirim konten{' '}
          <a
            href="https://id.wikipedia.org/wiki/Not_safe_for_work"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            NSFW
          </a>
          .
        </li>
        <li>Dilarang mempromosikan apapun.</li>
        <li>Dilarang mengirim konten yang berkaitan dengan SARA dan politik.</li>
      </ul>
    </div>
    <div className="flex flex-col space-y-2">
      <h2 className="text-2xl font-bold">Jika kamu tidak merasa melanggar, namun terkena ban</h2>
      <p>
        Kamu bisa menghubungi:{' '}
        <a
          href="https://t.me/hendraaagil"
          className="font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://t.me/hendraaagil
        </a>
        . Agar dapat dilakukan review ulang terhadap akun kamu.
      </p>
    </div>
    <hr className="w-full border" />
    <a href="/" className="hover:underline">
      🏠 Kembali ke halaman utama
    </a>
  </section>
)
