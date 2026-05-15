export default function Projects() {
  const projects = [
    {
      num: "01",
      type: "NLP · Deep Learning",
      title: "Rare-Word Retention in Abstractive Summarisation",
      description: "Architected a hybrid Transformer model integrating Pointer-Generator and Coverage mechanisms into BART-base to address factual hallucination and rare-word omission in abstractive summarisation. Applied CUDA-accelerated training with custom loss weighting and span-aware decoding to improve ROUGE scores over baseline.",
      tags: ["PyTorch", "BART", "CUDA", "Transformers", "Pointer-Generator", "Coverage Mechanism"],
      link: "https://github.com/sarahodaei/Rare-word-Retention-in-Abstractive-Summarization-via-Copy-aware-Transformer",
      date: "Sep 2024 – Sep 2025",
    },
    {
      num: "02",
      type: "NLP · Classification",
      title: "Petition Topic Classification with BiLSTM",
      description: "Designed a dual-input BiLSTM architecture combining FastText embeddings with structured features for multi-class text classification. Applied Optuna hyperparameter optimisation, staged embedding fine-tuning, and weighted loss functions to handle class imbalance. Extended to importance classification using XGBoost with custom-labelled training data.",
      tags: ["BiLSTM", "XGBoost", "Optuna", "Staged Fine-tuning", "NLP"],
      link: "https://github.com/sarahodaei/Petition-Classification-with-Deep-Learning-and-Gradient-Boosting",
      date: "Feb 2025 – Mar 2025",
    },
    {
      num: "03",
      type: "Machine Learning",
      title: "Metal Lifespan Prediction & Classification",
      description: "Built and evaluated regression and classification pipelines to model metal part lifespan under manufacturing conditions. Applied Gradient Boosting and MLP regressors with feature selection via ANOVA F-tests and decision tree importance. Replaced binary labels with K-means derived usability clusters, then trained SVM and MLP classifiers across multiple tuning regimes.",
      tags: ["Gradient Boosting", "SVM", "MLP", "K-means", "Scikit-learn"],
      link: "https://github.com/sarahodaei/Predicting-Lifespan-and-Usability-of-Metal-Parts",
      date: "Oct 2024 – Nov 2024",
    },
    {
      num: "04",
      type: "Big Data",
      title: "Hive & MapReduce for Big Data",
      description: "Designed a distributed data warehouse in Apache Hive and developed custom MapReduce algorithms with combiner logic for large-scale performance data processing. Engineered complex analytical queries across a Hadoop ecosystem, evaluating schema design and scalability trade-offs in a distributed environment.",
      tags: ["HiveQL", "MapReduce", "Hadoop", "SQL"],
      link: "#",
      date: "Jan 2025 – Feb 2025",
    },
    {
      num: "05",
      type: "Databases",
      title: "Graph & Modern Databases",
      description: "Implemented and queried heterogeneous database systems across Redis, MongoDB, and JSON Schema. Engineered Lua scripts for atomic Redis transactions, designed aggregation pipelines and MapReduce functions in MongoDB for healthcare record analysis, and enforced data integrity through conditional JSON Schema validation.",
      tags: ["Redis", "MongoDB", "JSON Schema", "NoSQL"],
      link: "#",
      date: "2024 – 2025",
    },
    {
      num: "06",
      type: "Analytics · SQL · BI",
      title: "Selfridges Loyalty Analytics",
      description: "Built a production-style customer analytics pipeline across four workstreams: RFM-based churn prediction and LTV scoring, event propensity modelling with uplift analysis, SQL-driven programme health monitoring, and an automated data quality validation pipeline. Delivered insights via Power BI dashboards and a programmatically generated weekly HTML digest.",
      tags: ["Python", "SQL", "Power BI", "PostgreSQL", "Scikit-learn", "RFM Modelling"],
      link: "https://github.com/sarahodaei/selfridges-loyalty-analytics",
      date: "2025",
    },
  ];

  return (
    <>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
        .projects-section {
          padding: 120px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 24px;
          }
        }
        @media (max-width: 480px) {
          .projects-section {
            padding: 60px 16px;
          }
        }
        .projects-heading {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 100;
          font-size: 48px;
          letter-spacing: 6px;
          color: #e8e8e0;
          line-height: 1;
        }
        @media (max-width: 480px) {
          .projects-heading {
            font-size: clamp(28px, 8vw, 48px);
            letter-spacing: 3px;
          }
        }
        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 16px;
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2 className="projects-heading">PROJECTS</h2>
          <a
            href="https://github.com/sarahodaei"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "10px", letterSpacing: "2px", color: "#f0c040", borderBottom: "1px solid rgba(240,192,64,0.3)", paddingBottom: "2px" }}
          >
            View GitHub ↗
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                background: "#0d0d0d",
                border: i === 0 ? "1px solid rgba(240,192,64,0.25)" : "1px solid rgba(255,255,255,0.06)",
                padding: "24px",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(240,192,64,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = i === 0 ? "rgba(240,192,64,0.25)" : "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>{project.num}</span>
                <span style={{ fontSize: "9px", letterSpacing: "2px", color: "#f0c040" }}>{project.type}</span>
              </div>

              <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: "14px", letterSpacing: "1px", color: "#e8e8e0", marginBottom: "10px", lineHeight: 1.4 }}>
                {project.title}
              </h3>

              <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "#666660", lineHeight: 1.7, marginBottom: "16px" }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {project.tags.map((tag, j) => (
                  <span key={j} style={{ fontSize: "9px", letterSpacing: "1px", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.06)", color: "#666660" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ fontSize: "9px", letterSpacing: "1px", color: "rgba(255,255,255,0.2)" }}>{project.date}</span>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "10px", letterSpacing: "2px", color: "#f0c040", borderBottom: "1px solid transparent" }}
                    onMouseEnter={e => e.currentTarget.style.borderBottom = "1px solid #a07c1a"}
                    onMouseLeave={e => e.currentTarget.style.borderBottom = "1px solid transparent"}
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}