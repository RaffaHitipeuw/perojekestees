import { NavLink, Outlet } from 'react-router'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Testimony', to: '/testimony' },
  { label: 'FAQ', to: '/faq' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="mx-auto flex h-[70px] max-w-7xl items-center border-b border-neutral-100 px-8">
        <a className="flex items-center gap-2 border-r border-neutral-200 pr-5 font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-neutral-900 text-white">L</span>
          <span>Logo</span>
        </a>
        <nav className="flex items-center gap-1 pl-5">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `rounded-lg px-3 py-2 text-sm transition-colors hover:bg-neutral-100 ${isActive ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="ml-auto rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-700" type="button">Sign In</button>
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}

export default App
