const meta = [
  { label: 'Location', value: 'London, UK' },
  { label: 'Focus', value: 'ML · NLP · Data Analysis' },
  { label: 'Background', value: 'Physics → Data Science' }
]

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 text-slate-100 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:items-start">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">About</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Still trying to predict what comes next.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            At eighteen I chose physics over engineering. My parents were terrified. Looking back, fair enough. What followed were years of mathematics so abstract it felt deliberately hostile. Theoretical physics has a way of humbling you. Quantum mechanics in particular has a way of dissolving your confidence on a molecular level. But somewhere between the equations and the suffering, something shifted. I got interested in a different kind of question. Not just what a system does, but whether you could predict it. Model it. Get close to describing what comes next. That pull toward prediction is what led me to machine learning. It felt like a door between the world I came from and something more tangible.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            In my final year of undergraduate study, AI was just beginning to surface as something people actually used. I tried using an early version of GPT for help with coursework. It failed spectacularly. The logic could not handle the conceptual complexity of what I was studying. But that failure stuck with me. How does it generate language at all? Why does it break down here? What would it take to make it better? Those questions are still what I work on.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-xl shadow-black/10 backdrop-blur-sm">
          <div className="mb-8 border-b border-white/10 pb-6 text-lg font-semibold text-white">Meta</div>
          <dl style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {meta.map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                <dt style={{ minWidth: "120px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#94a3b8", flexShrink: 0 }}>{item.label}</dt>
                <dd style={{ fontSize: "15px", color: "#f1f5f9" }}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About