document.addEventListener('DOMContentLoaded', function() {
  var questionEl = document.getElementById('question');
  var newQuestionBtn = document.getElementById('newQuestionBtn');
  var lastIndex = -1;

  function showRandomQuestion() {
    var index = lastIndex;
    if (oneOnOneQuestions.length > 1) {
      while (index === lastIndex) {
        index = Math.floor(Math.random() * oneOnOneQuestions.length);
      }
    } else {
      index = 0;
    }
    lastIndex = index;
    questionEl.textContent = oneOnOneQuestions[index];
  }

  newQuestionBtn.addEventListener('click', showRandomQuestion);

  showRandomQuestion();
});
