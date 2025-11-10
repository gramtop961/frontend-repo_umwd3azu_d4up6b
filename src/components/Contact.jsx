import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda telah kami terima.');
    e.currentTarget.reset();
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Kontak</h2>
            <p className="mt-3 text-emerald-900/70">Hubungi kami untuk informasi pendaftaran, kurikulum, atau kunjungan sekolah.</p>
            <div className="mt-6 space-y-3 text-emerald-800">
              <p><span className="font-semibold">Alamat:</span> Jl. Pendidikan No. 123, Indonesia</p>
              <p><span className="font-semibold">Telepon:</span> (021) 1234-5678</p>
              <p><span className="font-semibold">Email:</span> info@arraudhah.sch.id</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-800">Nama</label>
                <input required type="text" className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-800">Pesan</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700">Kirim</button>
            {status && <p className="mt-3 text-emerald-700 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
