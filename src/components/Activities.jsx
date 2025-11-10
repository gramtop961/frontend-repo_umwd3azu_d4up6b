const activities = [
  {
    title: 'Tahfidz & Tilawah',
    desc: 'Program harian untuk meningkatkan hafalan Al-Qur\'an dan memperbaiki tajwid.',
  },
  {
    title: 'Kajian Adab & Akhlak',
    desc: 'Pembiasaan akhlak mulia melalui keteladanan, kisah nabi, dan praktik langsung.',
  },
  {
    title: 'Sains Kreatif',
    desc: 'Eksperimen sederhana dan proyek STEAM yang mendorong rasa ingin tahu.',
  },
  {
    title: 'Olahraga & Pramuka',
    desc: 'Melatih fisik, kemandirian, dan kepemimpinan melalui aktivitas luar ruang.',
  },
];

function Activities() {
  return (
    <section id="kegiatan" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Kegiatan Unggulan</h2>
          <p className="mt-3 text-emerald-900/70">Pembelajaran menyenangkan yang membentuk karakter, pengetahuan, dan keterampilan.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item) => (
            <div key={item.title} className="rounded-xl border border-emerald-100 p-5 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center font-semibold">AR</div>
              <h3 className="mt-4 font-semibold text-emerald-800">{item.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
