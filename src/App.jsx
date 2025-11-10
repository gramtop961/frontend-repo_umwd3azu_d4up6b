import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-emerald-900">
      <Navbar />
      <Hero />
      <Activities />
      <Achievements />
      <Contact />
      <footer className="py-8 bg-emerald-900 text-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ar-Raudhah. Seluruh hak cipta dilindungi.</p>
          <a href="#beranda" className="underline decoration-emerald-300/60 hover:text-white">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
