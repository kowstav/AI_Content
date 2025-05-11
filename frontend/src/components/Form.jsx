import { useState } from 'react';

export const Form = ({ onSubmit, loading }) => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('blog post');

  const contentTypes = [
    'blog post',
    'social media post',
    'marketing copy',
    'email',
    'tweet',
    'product description'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ prompt, contentType });
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="prompt">What would you like to create?</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contentType">Content Type</label>
        <select
          id="contentType"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          {contentTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
    </form>
  );
};