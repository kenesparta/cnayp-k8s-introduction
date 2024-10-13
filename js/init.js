async function loadSlides() {
  const slideFiles = [
    "slides/intro/01-title.html",
    "slides/intro/02-history.html",
    "slides/intro/03-general.html",
    "slides/practice/01-letsgo.html",
  ];
  const slidesContainer = document.getElementById('slides-container');

  for (const file of slideFiles) {
    const response = await fetch(file);
    const html = await response.text();
    const section = document.createElement('section');
    section.innerHTML = html;
    slidesContainer.appendChild(section);
  }

  Reveal.initialize({
    hash: true,
    slideNumber: true,
    disableLayout: false,
    plugins: [
      RevealMarkdown,
      RevealHighlight,
      RevealNotes,
    ]
  });
}

loadSlides().then(r => console.log(r));