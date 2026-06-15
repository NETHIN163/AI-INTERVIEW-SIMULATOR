import './globals.css';

const roles = [
  { id: 'frontend', title: 'Frontend Engineer', desc: 'React, Next.js, and Modern Web UI.', level: 'Mid-Senior' },
  { id: 'backend', title: 'Backend Engineer', desc: 'System Design, APIs, and Scaling.', level: 'Mid-Senior' },
  { id: 'data-science', title: 'Data Scientist', desc: 'ML Models, Statistics, and Data Analysis.', level: 'Junior-Mid' },
  { id: 'pm', title: 'Product Manager', desc: 'Strategy, Execution, and User Research.', level: 'Senior' },
  { id: 'mobile', title: 'Mobile Developer', desc: 'React Native, Flutter, and iOS/Android.', level: 'Mid' },
  { id: 'hr', title: 'HR Professional', desc: 'Behavioral, Culture, and Leadership.', level: 'Lead' },
  { id: 'design', title: 'UI/UX Designer', desc: 'Figma, Design Systems, and Research.', level: 'Junior-Mid' },
  { id: 'devops', title: 'DevOps Engineer', desc: 'CI/CD, Kubernetes, and Cloud Infra.', level: 'Senior' }
];

export default function Home() {
  return (
    <main className="container">
      <header style={{ marginBottom: '5rem', maxWidth: '800px' }}>
        <h1 className="gradient-text stagger-in" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          Interview Like <br />A Professional.
        </h1>
        <p className="stagger-in" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', animationDelay: '0.1s' }}>
          A professional simulator tailored for the modern workforce. 
          Matte finish, high-fidelity feedback, and role-specific challenges.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {roles.map((role, i) => (
          <div 
            key={role.id} 
            className="matte-card stagger-in" 
            style={{ animationDelay: `${0.1 + (i * 0.05)}s` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="tag">{role.level}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{role.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>
              {role.desc}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={`/interview?role=${role.id}`} className="btn-matte btn-matte-primary" style={{ flex: 1, textAlign: 'center' }}>
                Start
              </a>
              <button className="btn-matte btn-matte-outline">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '8rem', borderTop: '1px solid var(--border-matte)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          &copy; 2026 ProPrep Simulator. Matte Edition.
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" className="btn-matte-outline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Privacy</a>
          <a href="#" className="btn-matte-outline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Terms</a>
        </div>
      </footer>
    </main>
  );
}
