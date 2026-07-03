document.addEventListener('DOMContentLoaded', function() {
  var promptEl = document.getElementById('prompt');
  var newPromptBtn = document.getElementById('newPromptBtn');
  var lastIndex = -1;

  function showRandomPrompt() {
    var index = lastIndex;
    if (oneOnOnePrompts.length > 1) {
      while (index === lastIndex) {
        index = Math.floor(Math.random() * oneOnOnePrompts.length);
      }
    } else {
      index = 0;
    }
    lastIndex = index;
    promptEl.textContent = oneOnOnePrompts[index];
  }

  newPromptBtn.addEventListener('click', showRandomPrompt);

  showRandomPrompt();
});
