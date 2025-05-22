import { useState } from 'react';

const Doubts = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botReply, setBotReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    setLoading(true);
    setBotReply('');
    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setBotReply(data.reply);
    } catch (err) {
      setBotReply('দুঃখিত, উত্তর পাওয়া যায়নি।');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>বাংলা চ্যাট</h2>
      <textarea
        value={userMessage}
        onChange={e => setUserMessage(e.target.value)}
        placeholder="বাংলায় প্রশ্ন লিখুন..."
        style={{ width: '100%', padding: '10px', marginBottom: '10px', minHeight: '60px' }}
      />
      <button
        onClick={sendMessage}
        style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
        disabled={loading || !userMessage.trim()}
      >
        {loading ? 'লোড হচ্ছে...' : 'পাঠাও'}
      </button>
      {botReply && (
        <div style={{ marginTop: '20px', background: '#f3f3f3', padding: '10px' }}>
          <strong>উত্তর:</strong> {botReply}
        </div>
      )}
    </div>
  );
};

export default Doubts;