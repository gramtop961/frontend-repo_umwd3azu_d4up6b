import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Kegiatan', href: '#kegiatan' },
    { label: 'Prestasi', href: '#prestasi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">AR</div>
            <span className="font-semibold text-emerald-800">Ar-Raudhah</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-emerald-800/80 hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Daftar Sekarang
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-emerald-800 hover:bg-emerald-50"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-emerald-800 hover:bg-emerald-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md bg-emerald-600 text-white"
            >
              Daftar Sekarang
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
