// src/moodify.js
const SentimentAnalyzer = require('./sentiment');

class Moodify {
  constructor() {
    this.sentimentAnalyzer = new SentimentAnalyzer();
  }

  analyzeSentiment(text) {
    return this.sentimentAnalyzer.analyzeSentiment(text);
  }

  getMusicSuggestions(mood) {
    // Placeholder logic for music suggestions
    if (mood === 'happy') {
      return ['Upbeat Playlist', 'Dance Hits', 'Feel-Good Vibes'];
    } else if (mood === 'sad') {
      return ['Mellow Melodies', 'Comforting Classics', 'Reflective Tunes'];
    } else {
      return ['General Playlist', 'Eclectic Mix', 'Your Choice'];
    }
  }
}

module.exports = Moodify;
