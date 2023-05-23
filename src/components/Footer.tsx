export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between text-sm">
      <p>
        &copy;{new Date().getFullYear()} by{' '}
        <a href="https://hendraaagil.dev" className="hover:underline">
          Hendra Agil
        </a>
      </p>
      <a href="/source" className="hover:underline">
        /source
      </a>
    </footer>
  )
}
