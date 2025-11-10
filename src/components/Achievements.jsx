const achievements = [
  {
    title: 'Juara 1 Lomba Tahfidz Tingkat Kota',
    desc: 'Siswa kami meraih juara 1 dalam kompetisi tahfidz juz 30.',
  },
  {
    title: 'Sekolah Adiwiyata',
    desc: 'Komitmen pada lingkungan terbukti dengan penghargaan sekolah berwawasan lingkungan.',
  },
  {
    title: 'Finalis Olimpiade Sains',
    desc: 'Berkat pembinaan rutin, siswa mampu bersaing di olimpiade sains dasar.',
  },
];

function Achievements() {
  return (
    <section id="prestasi" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Prestasi</h2>
          <p className="mt-3 text-emerald-900/70">Bukti kualitas pendidikan yang terus kami tingkatkan.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className="rounded-xl bg-white border border-emerald-100 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center font-bold">★</div>
              <h3 className="mt-4 font-semibold text-emerald-800">{a.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/70">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
