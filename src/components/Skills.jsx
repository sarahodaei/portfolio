import { useEffect } from 'react'

const skillGroups = [
  {
    title: 'Languages',
    icon: 'ti-code',
    color: { bg: '#E6F1FB', fg: '#185FA5' },
    items: ['Python', 'SQL', 'R'],
  },
  {
    title: 'ML / DL',
    icon: 'ti-brain',
    color: { bg: '#EEEDFE', fg: '#534AB7' },
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'CUDA'],
  },
  {
    title: 'NLP',
    icon: 'ti-message-language',
    color: { bg: '#E1F5EE', fg: '#0F6E56' },
    items: ['Transformers', 'Hugging Face', 'Optuna'],
  },
  {
    title: 'Data & Analysis',
    icon: 'ti-chart-bar',
    color: { bg: '#FAEEDA', fg: '#854F0B' },
    items: ['Pandas', 'NumPy', 'Power BI', 'Matplotlib'],
  },
  {
    title: 'Databases',
    icon: 'ti-database',
    color: { bg: '#FAECE7', fg: '#993C1D' },
    items: ['PostgreSQL', 'MongoDB',  'HiveQL', 'MapReduce'],
  },
]

const Skills = () => {
  useEffect(() => {
    const existing = document.querySelector('link[data-tabler]')
    if (existing) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css'
    link.setAttribute('data-tabler', 'true')
    document.head.appendChild(link)
  }, [])

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="mb-12">
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">SKILLS</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-base"
                style={{ background: group.color.bg, color: group.color.fg }}
              >
                <i className={`ti ${group.icon}`} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-medium text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills