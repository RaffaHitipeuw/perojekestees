import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const helpTopics = [
  {
    number: '1',
    title: 'Cara Mendaftar Akun',
    description: 'Petunjuk langkah demi langkah mendaftar.',
    detail: 'Informasi lengkap mengenai langkah-langkah untuk membuat akun dapat ditampilkan di sini.',
  },
  {
    number: '2',
    title: 'Metode Pembayaran',
    description: 'Daftar metode pembayaran yang didukung.',
    detail: 'Informasi lengkap mengenai metode pembayaran yang tersedia dapat ditampilkan di sini.',
  },
  {
    number: '3',
    title: 'Kebijakan Pengembalian',
    description: 'Syarat dan ketentuan refund.',
    detail: 'Informasi lengkap mengenai syarat dan ketentuan pengembalian dana dapat ditampilkan di sini.',
  },
]

function PageIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-medium text-neutral-800">{eyebrow}</p>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900">{title}</h1>
      <p className="text-sm leading-6 text-neutral-500">{description}</p>
    </div>
  )
}

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  if (selectedTopic) {
    return (
      <section className="mx-auto max-w-4xl px-8 py-10">
        <button className="mb-8 ml-3 flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900" type="button" onClick={() => setSelectedTopic(null)}>
          <ArrowLeft size={16} /> Kembali ke HOME
        </button>
        <article className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          <span className="grid size-12 place-items-center rounded-xl bg-neutral-100 font-semibold">{selectedTopic.number}</span>
          <p className="mb-2 mt-6 text-sm font-medium text-neutral-800">Detail Pertanyaan</p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900">Detail HOME - ID: {selectedTopic.number}</h1>
          <p className="text-base leading-7 text-neutral-500">
            Ini adalah halaman detail untuk HOME dengan ID: <strong className="font-semibold text-neutral-800">{selectedTopic.number}</strong>.
          </p>
          <hr className="my-6 border-neutral-200" />
          <div className="rounded-lg bg-neutral-50 p-4 text-sm leading-6 text-neutral-500">{selectedTopic.detail}</div>
          <button className="mt-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-700" type="button" onClick={() => setSelectedTopic(null)}>
            Kembali ke HOME
          </button>
        </article>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-8 pb-20 pt-14">
      <PageIntro eyebrow="Pusat Bantuan" title="Pertanyaan Umum" description="Temukan jawaban dari pertanyaan yang sering ditanyakan." />
      <div className="mt-8 grid grid-cols-3 gap-4">
        {helpTopics.map((topic) => (
          <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" key={topic.number}>
            <span className="grid size-10 place-items-center rounded-lg bg-neutral-100 text-sm font-semibold">{topic.number}</span>
            <h2 className="mb-2 mt-5 text-lg font-semibold">{topic.title}</h2>
            <p className="text-sm leading-6 text-neutral-500">{topic.description}</p>
            <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-neutral-800" type="button" onClick={() => setSelectedTopic(topic)}>
              Lihat detail <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
