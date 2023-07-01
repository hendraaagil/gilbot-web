export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between text-sm">
      <p>
        &copy;{new Date().getFullYear()} by{' '}
        <a href="https://hendraaagil.dev" className="hover:underline">
          Hendra Agil
        </a>
      </p>
      <div className="flex space-x-2">
        <a href="/rules" className="hover:underline">
          /rules
        </a>
        <a href="/source" className="hover:underline">
          /source
        </a>
      </div>
    </footer>
  )
}
