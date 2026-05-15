const experiences = [
  {
    date: "2018 — 2022",
    title: "BSc Physics",
    company: "Kharazmi University",
    description: "Foundation in classical and modern physics. Built rigorous mathematical intuition across theoretical and applied domain.",
    tags: ["Mathematics", "Statistics"],
  },
   {
    date: "Nov 2023 — Feb 2024",
    title: "Junior Data Scientist",
    company: "Pishtaz",
    description: "Worked with live network and customer datasets in an ISP environment. Automated SQL and Python reporting workflows that replaced manual Excel processes. Supported anomaly detection on usage patterns and contributed to dashboards tracking network uptime, churn indicators, and regional bandwidth performance.",
    tags: ["Python", "SQL", "Power BI", "Anomaly Detection", "Reporting"],
  },
  {
    date: "Mar 2024 — Sep 2024",
    title: "Data Scientist",
    company: "Pishtaz",
    description: "Owned end-to-end analysis projects across customer behaviour and network performance. Built Power BI dashboards for 20+ stakeholders, developed churn prediction and customer segmentation pipelines in Python, and designed automated data validation workflows that reduced manual processing time across the business.",
    tags: ["Python", "SQL", "Power BI", "Churn Prediction", "Customer Analytics"],
  },
  {
    date: "Sep 2024 — Sep 2025",
    title: "MSc Data Science — Distinction",
    company: "University of Greenwich",
    description: "Specialising in machine learning, deep learning, and natural language processing. Dissertation on rare-word retention in abstractive summarisation currently being prepared for academic publication.",
    tags: ["Machine Learning", "NLP", "Deep Learning", "Research"],
  }
]

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 text-slate-100 sm:px-8">
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">Experience</p>
      <div className="mb-16 flex items-end justify-between">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Timeline</h2>
      </div>

      <div style={{ position: "relative", paddingLeft: "32px" }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "1px",
          background: "rgba(240,192,64,0.2)",
        }} />

        {experiences.map((exp, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "56px" }}>
            <div style={{
              position: "absolute",
              left: "-36px",
              top: "6px",
              width: "9px",
              height: "9px",
              border: "1px solid #f0c040",
              background: "#000",
              transform: "rotate(45deg)",
            }} />

            <div style={{
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#f0c040",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}>
              {exp.date}
            </div>

            <h3 style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
              fontSize: "20px",
              letterSpacing: "2px",
              color: "#e8e8e0",
              marginBottom: "4px",
            }}>
              {exp.title}
            </h3>

            <div style={{
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#f0c040",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}>
              {exp.company}
            </div>

            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "15px",
              color: "#666660",
              lineHeight: 1.8,
              marginBottom: "16px",
              maxWidth: "600px",
            }}>
              {exp.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {exp.tags.map((tag, j) => (
                <span key={j} style={{
                  fontSize: "9px",
                  letterSpacing: "1px",
                  padding: "3px 10px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#666660",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience