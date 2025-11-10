function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-800">
              Sekolah Islam Ar-Raudhah
            </h1>
            <p className="mt-4 text-emerald-900/80 leading-relaxed">
              Mencetak generasi Qur'ani yang berakhlak mulia, cerdas, dan berdaya saing. 
              Kurikulum terpadu dengan pembinaan karakter Islami serta kegiatan yang menyenangkan.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#kegiatan" className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Lihat Kegiatan</a>
              <a href="#kontak" className="px-5 py-3 rounded-md border border-emerald-300 text-emerald-700 hover:bg-emerald-50">Hubungi Kami</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-emerald-700 font-semibold text-lg">"Iqra' bismi rabbika"</p>
                <p className="text-emerald-900/70 mt-2">Membaca, memahami, dan mengamalkan ilmu sebagai jalan menuju keberkahan.</p>
              </div>
            </div>
            <div className="absolute -z-0 inset-0 pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-200 blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-300 blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
