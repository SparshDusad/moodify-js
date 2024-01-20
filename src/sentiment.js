// src/sentiment.js
class SentimentAnalyzer {
    constructor() {
      // You can include any setup or initialization here if needed
    }
  
    analyzeSentiment(text) {
      const words = text.toLowerCase().split(' ');
  
      // Count positive and negative words
      const positiveWords = ['happy', 'upbeat', 'positive', 'joyful']; // Add more as needed
      const negativeWords = ['sad', 'unhappy', 'negative', 'depressed']; // Add more as needed
  
      const positiveCount = words.filter(word => positiveWords.includes(word)).length;
      const negativeCount = words.filter(word => negativeWords.includes(word)).length;
  
      // Determine sentiment based on word counts
      if (positiveCount > negativeCount) {
        return 'happy';
      } else if (negativeCount > positiveCount) {
        return 'sad';
      } else {
        return 'neutral';
      }
    }
  }
  
  module.exports = SentimentAnalyzer;
  