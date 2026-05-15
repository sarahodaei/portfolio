import { useEffect, useState, useRef } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },  // renamed from Work
  { label: 'Skills', href: '#skills' },       // added
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-black/95 shadow-xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-200 sm:px-8">
        <div className="flex items-center gap-3 font-semibold uppercase tracking-[0.35em] text-gold">
          <span>SARA HODAEI</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleMusic} style={{
            background: "transparent",
            border: "1px solid #f0c04066",
            color: "#f0c040",
            fontSize: "11px",
            letterSpacing: "2px",
            padding: "6px 14px",
            cursor: "pointer",
          }}>
            {playing ? "⏸ MUSIC" : "▶ MUSIC"}
          </button>
          <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="flex h-3 w-3 items-center justify-center">
              <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            Available for work
          </div>
        </div>
        <audio ref={audioRef} src="/theme.mp3" loop />
      </nav>
    </header>
  )
}

export default Navbar