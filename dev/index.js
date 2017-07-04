require('../jquery.renderSurvey');

$('#app').renderSurvey({
  "question": 'What is your favorite color?',
  "answers": ["Red", "Green", "Blue", "Orange"],
  "submitUrl": "http://example.com",
});
