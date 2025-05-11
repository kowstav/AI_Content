export const handleError = (error, res) => {
  console.error('Error:', error);
  
  res.status(500).json({
    success: false,
    error: error.message || 'An unexpected error occurred'
  });
};