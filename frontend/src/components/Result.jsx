export const Result = ({ content, error }) => {
  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!content) {
    return null;
  }

  return (
    <div className="result">
      <h2>Generated Content:</h2>
      <div className="content">{content}</div>
    </div>
  );
};