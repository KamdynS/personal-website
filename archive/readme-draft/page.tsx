const experience = [
  {
    company: 'Subsplash',
    role: 'Software Development Engineer II',
    dates: '2025—present',
    preview: 'AI assistant, transcript retrieval, and GPU transcription.',
    details: [
      'Architected a prelaunch AI assistant for dashboard operations, with an MCP tool layer connected to existing APIs and user permissions.',
      'Designed transcript retrieval with PostgreSQL and pgvector over video drawn from a 5.4 PB source corpus.',
      'Designed and built an H100 transcription service using NVIDIA Parakeet and voice activity detection, reaching 260× real-time throughput.',
    ],
  },
  {
    company: 'Emerge Haus',
    role: 'Mid-level AI Engineer',
    dates: '2024—2025',
    preview: 'AI-assisted video processing for social-media clips.',
    details: [
      'Redesigned a video-processing service used by 4,000+ people each week and implemented most of the refactor.',
      'Improved an LLM and YOLO video-clipping pipeline, increasing throughput 4× and reducing processing time 30%.',
    ],
  },
  {
    company: 'CultureX at MIT',
    role: 'Software Engineer',
    dates: '2024',
    preview: 'AWS and PySpark data pipelines and backend services.',
    details: [
      'Built AWS and PySpark data pipelines and backend services.',
    ],
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="file-line" aria-hidden="true">
        <span>~/kamdyn/README.md</span>
        <span>Boston, MA</span>
      </div>

      <article className="readme">
        <header>
          <h1><span className="heading-mark" aria-hidden="true">#</span> Kamdyn Shaeffer</h1>
          <p className="intro">
            Software engineer at Subsplash. I work on backend and AI systems,
            and I&apos;m interested in LLM inference, developer tools, Rust,
            and Linux.
          </p>
          <div className="facts" aria-label="Languages">
            <span>languages: Go, Rust, Python, TypeScript, SQL</span>
          </div>
        </header>

        <section aria-labelledby="work-heading">
          <h2 id="work-heading"><span className="heading-mark" aria-hidden="true">##</span> Work</h2>
          <div className="entries">
            {experience.map(({ company, role, dates, preview, details }) => (
              <details className="work-item" key={company} open={company === 'Subsplash'}>
                <summary className="work-summary">
                  <span className="entry-name">{company}</span>
                  <span className="entry-detail">
                    <span className="role-line">{role}<span className="entry-date">{dates}</span></span>
                    <span className="entry-preview">{preview}</span>
                  </span>
                  <span className="expand-label" aria-hidden="true">details <span className="expand-symbol" /></span>
                </summary>
                <div className="work-details">
                  <ul>
                    {details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading"><span className="heading-mark" aria-hidden="true">##</span> Projects</h2>
          <div className="entry">
            <a className="entry-name" href="https://bintodec.com" target="_blank" rel="noopener noreferrer">BinToDec ↗</a>
            <span className="entry-detail">A game for practicing binary and decimal conversion</span>
          </div>
        </section>

        <section aria-labelledby="elsewhere-heading">
          <h2 id="elsewhere-heading"><span className="heading-mark" aria-hidden="true">##</span> Elsewhere</h2>
          <div className="links">
            <a href="https://github.com/KamdynS" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/kshaeffer1844/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="mailto:kamdynshaefferbusiness@gmail.com">Email ↗</a>
          </div>
        </section>
      </article>
    </main>
  );
}
