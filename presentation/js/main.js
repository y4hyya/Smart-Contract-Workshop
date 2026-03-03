/**
 * Slide loader + Reveal.js initializer
 * Loads slide partials from the slides/ directory, injects them
 * into the .slides container, then initializes Reveal.js.
 */

const slideFiles = [
    'slides/00-title.html',
    'slides/01-what-are-smart-contracts.html',
    'slides/02-how-they-work.html',
    'slides/03-pros-and-cons.html',
    'slides/04-use-cases.html',
    'slides/06-recap-closing.html',
];

async function loadSlides() {
    const container = document.querySelector('.slides');

    const cacheBuster = Date.now();
    const slides = await Promise.all(
        slideFiles.map(f => fetch(f + '?v=' + cacheBuster).then(r => r.text()))
    );
    slides.forEach(html => container.insertAdjacentHTML('beforeend', html));

    Reveal.initialize({
        hash: true,
        slideNumber: 'c/t',
        width: 1280,
        height: 720,
        margin: 0,
        transition: 'fade',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',
        center: false,
        showNotes: false,
        pdfSeparateFragments: false,
    });
}

loadSlides();
