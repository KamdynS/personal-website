import Link from 'next/link';
import { formatDate, getPosts } from '@/lib/posts';
import { site } from '@/lib/site';

const experience = [
  {
    company: 'Subsplash',
    role: 'Software Development Engineer II',
    years: '2025–now',
  },
  {
    company: 'Emerge Haus',
    role: 'Mid-level AI Engineer',
    years: '2024–2025',
    note: 'Redesigned a video-processing service used by 4,000+ people each week, and quadrupled throughput on an LLM and YOLO video-clipping pipeline.',
  },
  {
    company: 'CultureX at MIT',
    role: 'Software Engineer',
    years: '2024',
    note: 'AWS and PySpark data pipelines and backend services.',
  },
  {
    company: 'Boston College',
    role: 'M.A., Political Science',
    years: '2024',
  },
  {
    company: 'Hillsdale College',
    role: 'B.A., Political Science',
    years: '2022',
  },
];

export default function HomePage() {
  const posts = getPosts();

  return (
    <main className="page">
      <header>
        <h1>Kamdyn Shaeffer</h1>
        <p>
          I&apos;m a software engineer in Boston. I build backend and AI systems at
          Subsplash, and I&apos;m most interested in LLM inference, developer tools,
          Rust, and Linux.
        </p>
        <p>
          My degrees are in political science. Quantitative methods led me to NLP, and
          NLP led me to AI Engineering.
        </p>
        <ul className="links">
          <li><a href={site.github}>GitHub</a></li>
          <li><a href={site.linkedin}>LinkedIn</a></li>
          <li><a href={`mailto:${site.email}`}>Email</a></li>
          {posts.length > 0 && <li><a href="/feed.xml">RSS</a></li>}
        </ul>
      </header>

      {posts.length > 0 && (
        <section aria-labelledby="writing">
          <h2 id="writing">Writing</h2>
          {posts.map((post) => (
            <article className="item" key={post.slug}>
              <h3><Link href={`/writing/${post.slug}`}>{post.title}</Link></h3>
              {post.description && <p>{post.description}</p>}
              <p className="muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.draft && ', draft'}
              </p>
            </article>
          ))}
        </section>
      )}

      <section aria-labelledby="work">
        <h2 id="work">Recent work at Subsplash</h2>

        <article className="item">
          <h3>Transcription at 260× real time</h3>
          <p>
            A speech-to-text service on H100s, built on NVIDIA Parakeet and voice
            activity detection. At that rate an hour of audio takes about 14 seconds.
          </p>
          <div
            className="scale"
            role="img"
            aria-label="A bar for one hour of audio, with the first 260th of it marked as processing time"
          >
            <div className="scale-bar" />
            <div className="scale-key">
              <span>14 s to process</span>
              <span>1 h of audio</span>
            </div>
          </div>
        </article>

        <article className="item">
          <h3>Transcript search for a 5.4 PB video corpus</h3>
          <p>
            Semantic retrieval over transcripts of video drawn from that corpus, using
            PostgreSQL and pgvector with tenant partitioning.
          </p>
        </article>

        <article className="item">
          <h3>An assistant that can run the dashboard</h3>
          <p>
            A prelaunch AI assistant with an MCP tool layer connected to existing APIs
            and user permissions. I designed the architecture and set technical
            direction for the six engineers building it.
          </p>
        </article>
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>

        <article className="item">
          <h3><a href="https://github.com/KamdynS/vLLM-oxide">vLLM-oxide</a></h3>
          <p>
            An LLM serving engine in Rust, modeled on vLLM and still early. So far it has
            a CPU forward pass for Llama 3.2. Hand-written CUDA kernels and continuous
            batching come next.
          </p>
        </article>

        <article className="item">
          <h3><a href="https://github.com/KamdynS/Absolem">Absolem</a></h3>
          <p>
            A terminal tool, also in Rust, that shows the shape of a change before you
            review it: which types, functions, and fields moved between two git refs.
            It reads Go and Rust.
          </p>
        </article>
      </section>

      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <ul className="roles">
          {experience.map(({ company, role, years, note }) => (
            <li key={company}>
              <span className="years">{years}</span>
              <div>
                <strong>{company}</strong>
                <span className="role">{role}</span>
                {note && <p className="muted">{note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="otherwise">
        <h2 id="otherwise">Otherwise</h2>
        <p>
          I play a lot of golf, and I read philosophy and fantasy. The series I&apos;m on
          now is <cite>Red Rising</cite>.
        </p>
      </section>
    </main>
  );
}
