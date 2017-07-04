# jquery-rendersurvey
Simple jQuery plugin to create dynamic, multiple choice survey questions.

## How To
1. Include the jquery.renderSurvey script in your page.
2. Render a survey inside any element like this:
``` javascript
$('#some-element').renderSurvey({
  "question":"What is your least favorite color?",
  "answers":[
      "Red",
      "Green",
      "Blue",
      "Orange"
  ],
  "submitUrl":"http://example.com"
});
```
