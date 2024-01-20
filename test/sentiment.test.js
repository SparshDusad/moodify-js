// test/sentiment.test.js
const SentimentAnalyzer = require('../src/sentiment');

test('should analyze sentiment correctly', () => {
  const sentimentAnalyzer = new SentimentAnalyzer();
  const result = sentimentAnalyzer.analyzeSentiment('Happy and positive text');
  expect(result).toBe('happy');
});
