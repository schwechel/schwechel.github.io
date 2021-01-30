document.addEventListener('DOMContentLoaded', function() {
  fetch("./header.html", {mode: 'no-cors'})
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  })
  .catch((_error) => {
      document.querySelector("header").innerHTML = '<nav role="navigation"><ul><li><a href="index.html">Home</a></li><li><a href="projects.html">Projects</a></li><li><a href="about.html">About Me</a></li></ul></nav>';
  });

  fetch("./footer.html", {mode: 'no-cors'})
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  })
  .catch((_error) => {
      document.querySelector("footer").innerHTML = '<div class="copyright">&copy 2020 - schwechel.Net</div><ul id="social"><li><a href="https://stackoverflow.com/story/schwechel" class="stackOverflow">Stack Overflow</a></li><li><a href="https://github.com/schwechel" class="gitHub">GitHub</a></li><li><a href="https://twitter.com/#!/DerekSchwechel" class="twitter">Twitter</a></li><li><a href="http://linkedin.com/in/DerekSchwechel" class="linkedin">Linked In</a></li><li><a href="http://facebook.com/DerekSchwechel" class="facebook">Facebook</a></li></ul>';
  });
});

document.addEventListener("keydown", konamiCheck, false);

var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var currentIndex = 0;

function konamiCheck(event) {
  if (event.key !== konamiCode[currentIndex]) {
		currentIndex = 0;
		return;
	}

	// Update how much of the pattern is complete
	currentIndex++;

	// If complete, alert and reset
	if (konamiCode.length === currentIndex) {
		currentIndex = 0;
		window.open('https://c.xkcd.com/random/comic/', '_blank');
	}
}