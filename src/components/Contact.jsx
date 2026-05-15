const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-slate-100 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Send a transmission</h2>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-12">
        <form className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-200">
            <span>Name</span>
            <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-gold/40 focus:ring-2 focus:ring-gold/20" />
          </label>
          <label className="space-y-2 text-sm text-slate-200">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-gold/40 focus:ring-2 focus:ring-gold/20" />
          </label>
          <label className="md:col-span-2 space-y-2 text-sm text-slate-200">
            <span>Message</span>
            <textarea rows="6" placeholder="How can I help?" className="w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-gold/40 focus:ring-2 focus:ring-gold/20" />
          </label>
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-3xl bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-gold-dim">
            Send Transmission
          </button>
        </form>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-300 sm:flex-row sm:gap-8">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href="sara.hodaei.uk@gmail.com" className="transition hover:text-white">sara.hodaei.uk@gmail.com</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
