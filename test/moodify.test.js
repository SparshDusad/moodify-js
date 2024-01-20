// test/moodify.test.js
const Moodify = require('../src/moodify');

test('should analyze sentiment correctly', () => {
  const moodify = new Moodify();
  const result = moodify.analyzeSentiment('Happy and positive text');
  expect(result).toBe('happy');
});

test('should get music suggestions based on mood', () => {
  const moodify = new Moodify();
  const suggestions = moodify.getMusicSuggestions('happy');
  expect(suggestions).toEqual(['Upbeat Playlist', 'Dance Hits', 'Feel-Good Vibes']);
});
