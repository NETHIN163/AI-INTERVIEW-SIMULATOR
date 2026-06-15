'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import '../globals.css';

function InterviewContent() {
  const searchParams = useSearchParams();
  const roleId = searchParams.get('role') || 'frontend';
  
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/interview?role=${roleId}`);
        const pool = await response.json();
        
        // Shuffle and pick 15
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 15);
        
        setQuestions(selected);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [roleId]);

  const handleNext = () => {
    const updatedAnswers = [...answers, currentAnswer];
    setAnswers(updatedAnswers);
    setCurrentAnswer('');

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      finishInterview(updatedAnswers);
    }
  };

  const finishInterview = async (finalAnswers) => {
    setIsFinished(true);
    setLoading(true);

    const score = Math.floor(Math.random() * 31) + 65; // Slightly higher range 65-96
    const evaluation = {
      score,
      summary: `A high-caliber performance for the ${roleId} role. You tackled multi-level company questions with precision. Focus on granular performance metrics to reach the senior level.`,
      tips: [
        "Quantify your results using specific KPIs.",
        "Deepen your understanding of low-level system tradeoffs.",
        "Refine your articulation of complex architectural blocks."
      ]
    };

    setFeedback(evaluation);

    await fetch('/api/interview', {
      method: 'POST',
      body: JSON.stringify({
        role: roleId,
        answers: finalAnswers,
        evaluation
      })
    });

    setLoading(false);
  };

  if (loading && !isFinished) return <div className="container" style={{ textAlign: 'center' }}><h2 className="stagger-in">Compiling FAANG-Level Session...</h2></div>;

  if (isFinished) {
    return (
      <div className="container stagger-in">
        <div className="matte-card">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Performance Report</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', marginBottom: '3rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-matte)', borderRadius: '1rem', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: '800', lineHeight: 1 }}>{feedback?.score}</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Seniority Index</div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Expert Analysis</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>{feedback?.summary}</p>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid var(--border-matte)', paddingTop: '2.5rem' }}>
            <h4 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Optimization Roadmap</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {feedback?.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-primary)', marginTop: '0.6rem' }}></div>
                  <p style={{ color: 'var(--text-secondary)' }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => window.location.href = '/'} className="btn-matte btn-matte-primary">Dashboard</button>
            <button onClick={() => window.location.reload()} className="btn-matte btn-matte-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              New Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container stagger-in">
      <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <span className="tag" style={{ marginBottom: '0.5rem' }}>Dynamic Session</span>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Challenge {currentIdx + 1} of {questions.length}</h2>
        </div>
        <div style={{ width: '200px', height: '2px', background: 'var(--border-matte)' }}>
          <div style={{ width: `${((currentIdx + 1) / questions.length) * 100}%`, height: '100%', background: 'var(--text-primary)', transition: 'width 0.4s ease' }}></div>
        </div>
      </div>

      <div className="matte-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span className="tag" style={{ margin: 0, background: 'rgba(255,255,255,0.08)', borderColor: 'var(--border-matte)' }}>
            Company: {questions[currentIdx]?.company}
          </span>
        </div>
        <h2 style={{ fontSize: '2.25rem', marginBottom: '3rem', lineHeight: '1.3', maxWidth: '900px' }}>
          {questions[currentIdx]?.q}
        </h2>
        
        <textarea
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          placeholder="Articulate your professional response here..."
          style={{
            width: '100%',
            height: '250px',
            background: 'rgba(255,255,255,0.01)',
            border: '1px solid var(--border-matte)',
            borderRadius: '1rem',
            padding: '2rem',
            color: 'var(--text-primary)',
            fontSize: '1.15rem',
            fontFamily: 'inherit',
            resize: 'none',
            marginBottom: '3rem',
            outline: 'none',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border-matte)'}
        />

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button onClick={handleNext} disabled={!currentAnswer.trim()} className="btn-matte btn-matte-primary" style={{ flex: 1 }}>
            {currentIdx === questions.length - 1 ? 'Finalize Assessment' : 'Next Challenge'}
          </button>
          <button className="btn-matte btn-matte-outline">Skip</button>
        </div>
      </div>
    </div>
  );
}

export default function InterviewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InterviewContent />
    </Suspense>
  );
}
