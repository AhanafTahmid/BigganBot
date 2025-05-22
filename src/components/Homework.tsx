import { useState } from 'react';

// Very basic text similarity using word overlap
const getSimilarityPercentage = (text1: string, text2: string): number => {
  const words1 = new Set(text1.toLowerCase().split(/\s+/));
  const words2 = new Set(text2.toLowerCase().split(/\s+/));

  const intersection = new Set([...words1].filter(word => words2.has(word)));
  const similarity = (intersection.size / Math.min(words1.size, words2.size)) * 100;
  return Math.round(similarity);
};

// Fake existing assignments to compare with
const existingHomeworkSamples = [
  "Atoms are the basic building blocks of matter and consist of protons, neutrons, and electrons.",
  "The nucleus of an atom contains protons and neutrons, while electrons orbit in shells around the nucleus.",
  "An element is defined by the number of protons in its atoms, which is called the atomic number.",
  "Electrons are negatively charged particles that determine how atoms interact and bond with each other.",
  "Isotopes are atoms of the same element that have different numbers of neutrons.",
  "The periodic table organizes elements based on their atomic number and chemical properties.",
  "Most of the atom's mass is concentrated in its nucleus, which is extremely dense and small."
];

const Homework = () => {
  const [studentText, setStudentText] = useState('');
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [plagiarized, setPlagiarized] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkPlagiarism = () => {
    setLoading(true);
    let maxSimilarity = 0;

    for (const sample of existingHomeworkSamples) {
      const sim = getSimilarityPercentage(studentText, sample);
      if (sim > maxSimilarity) maxSimilarity = sim;
    }

    setSimilarity(maxSimilarity);
    setPlagiarized(maxSimilarity >= 70); 
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <h2>📄 Homework on Atoms Submission</h2>
      <textarea
        placeholder="Write your homework here..."
        value={studentText}
        onChange={(e) => setStudentText(e.target.value)}
        rows={8}
        style={{ width: '100%', padding: '10px', fontSize: '16px' , border: '1px solid #ccc' }}
      />
      <button
        onClick={checkPlagiarism}
        disabled={!studentText.trim() || loading}
        style={{ marginTop: '10px', padding: '10px 20px' , background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        {loading ? 'Checking...' : 'Check for Plagiarism'}
      </button>

      {similarity !== null && (
        <div style={{ marginTop: '20px' }}>
          <strong>Similarity:</strong> {similarity}%
          <br />
          {plagiarized ? (
            <span style={{ color: 'red' }}>⚠️ This appears to be plagiarized! Rejected</span>
          ) : (
            <span style={{ color: 'green' }}>✅ Looks original! You Homework is Submitted</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Homework;
